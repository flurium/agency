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
      message = t.notification.nameCantBeEmpty
      return
    }

    const emailValidation = await z.string().email().safeParseAsync(email)
    if(emailValidation.success == false) {
      message = t.notification.invalidEmail
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
      const body: { message: string } = await response.json()

      message = body.message
      setTimeout(() => message = null, 5000);

      if(response.ok) {
        name = ""
        email = ""
        context = ""
      }
    } catch(error) {
      message = t.notification.cantSendNow
    } 
  }
</script>

{#if message != null}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="fixed z-10 bg-violet-400 text-white end-0 top-0 max-w-sm py-2 px-4 rounded-md m-2 cursor-pointer"
    on:click={() => message = null} transition:fade
  >
    <div class="text-base mb-2 opacity-90">{t.notification.header}</div>
    <p>{message}</p>
  </div>
{/if}

<form class="flex flex-col gap-6" on:submit|preventDefault={submit}>
  <label>
    <div class="font-semibold mb-1 ml-2">{t.name.label}</div>
    <input class="py-3 px-5 block rounded-md w-full bg-zinc-50 outline-none" name="name" 
      placeholder={t.name.placeholder} bind:value={name}>
  </label>
    
  <label>
    <div class="font-semibold mb-1 ml-2">{t.email.label}</div>
    <input 
      class="py-3 px-5 block rounded-md w-full bg-zinc-50 outline-none" name="email"
      placeholder={t.email.placeholder} bind:value={email}>
  </label>

  <label>
    <div class="font-semibold mb-1 ml-2">{t.context.label}</div>
    <textarea name="context"
      class="py-3 px-5 block rounded-md w-full bg-zinc-50 outline-none" 
      placeholder={t.context.placeholder} rows="7" bind:value={context}
    ></textarea>
  </label>

  <button class="py-2 px-4 font-semibold rounded-md bg-violet-400 text-white">{t.submit}</button>
</form>
