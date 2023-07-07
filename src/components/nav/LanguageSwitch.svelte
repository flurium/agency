<script lang="ts">
  import type { Language } from "../../translations"
  import {languages} from "../../translations"

  export let lang: Language
  let open: boolean = false

  const t = {
    uk: {
      short: "Укр",
      full: "Українська"
    },
    en: {
      short: "Eng",
      full: "English"
    }
  } as const

</script>

<button 
  class="outline-none  flex items-baseline hover:bg-secondary-100 gap-3 py-2 px-4 rounded-md"
  on:click={() => open = !open}
>
  <span>{t[lang].short}</span>
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 1.66666L6 5.66666L10 1.66666" stroke="#6B7280" stroke-width="2" stroke-linecap="square"/>
  </svg>
</button>

{#if open}
  
  <div class="absolute flex flex-col shadow-lg p-5 gap-5 bg-white top-20 rounded-md z-10">
    {#each languages as language}
      <a href={`/${language}`}>{t[language].full}</a>
    {/each}
  </div>

{/if}