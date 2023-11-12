<script lang="ts">
  import { z } from "zod"
  import { fade } from 'svelte/transition'
  import type { ContactFormTranslation } from '../translations'

  export let t: ContactFormTranslation 

  let message: string | null = null
  let name: string = ""
  let email: string = ""
  let context: string = ""

  async function submit() {
    name = name.trim()
    if(name == "") {
      message = t.notification.client.nameCantBeEmpty
      return
    }

    const emailValidation = await z.string().email().safeParseAsync(email)
    if(emailValidation.success == false) {
      message = t.notification.client.invalidEmail
      return
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          context
        })
      })

      const status = response.status

      if(status == 200) {
        message = t.notification.server.success
        name = ""
        email = ""
        context = ""
      } else if(status == 400) {
        message = t.notification.server.invalidBody
      } else {
        message = t.notification.server.unexpectedError
      }
      
      setTimeout(() => message = null, 5000);
    } catch(error) {
      message = t.notification.client.cantSendNow
      setTimeout(() => message = null, 5000);
    } 
  }
</script>

{#if message != null}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="fixed z-10 bg-primary-400 text-white end-0 top-0 max-w-sm py-2 px-4 rounded m-2 cursor-pointer"
    on:click={() => message = null} transition:fade
  >
    <div class="text-base mb-2 opacity-90">{t.notification.header}</div>
    <p>{message}</p>
  </div>
{/if}

<form class="flex flex-col gap-6" on:submit|preventDefault={submit}>
  <label>
    <div class="mb-1">{t.name.label}</div>
    <input class="py-3 px-5 block rounded w-full bg-secondary-50 outline-none" name="name" 
      placeholder={t.name.placeholder} bind:value={name}>
  </label>
    
  <label>
    <div class="mb-1">{t.email.label}</div>
    <input 
      class="py-3 px-5 block rounded w-full bg-secondary-50 outline-none" name="email"
      placeholder={t.email.placeholder} bind:value={email}>
  </label>

  <label>
    <div class="mb-1">{t.context.label}</div>
    <textarea name="context"
      class="py-3 px-5 block rounded w-full bg-secondary-50 outline-none" 
      placeholder={t.context.placeholder} rows="6" bind:value={context}
    ></textarea>
  </label>

  <button class="py-4 px-6 w-fit font-semibold rounded hover:bg-primary-600 bg-primary-500 text-white">
    {t.submit}
  </button>
</form>
