<script lang="ts">
  import type { Language, NavbarTranslation } from '../../translations'
  import { TwitterIcon, GitHubIcon } from "../icons"
  import LanguageSwitch from './LanguageSwitch.svelte'

  export let t: NavbarTranslation
  export let lang: Language

  let open: boolean = false
</script>

<nav class="sm:hidden flex gap-4">
  <LanguageSwitch {lang}/>
  <button class="p-3 rounded-md text-2xl hover:bg-secondary-100" aria-label="Navbar toggle button" on:click={() => open = !open}>
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 4.66675H20M0 15.3334H20M0 10.0001H20"
        stroke="black"
        stroke-width="1.5"></path>
    </svg>
  </button>
</nav>

{#if open}
  <div class="absolute top-0 right-0 py-6 w-full bg-white sm:hidden shadow-md z-20">
    <div class="flex justify-between w-full items-center px-6">
      <a class="select-none font-bold text-primary-500 text-3xl" href="/">FLURIUM</a>

      <button class="p-3 rounded-md text-2xl hover:bg-secondary-100" on:click={() => open = !open}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L18 18M2 18L18 2" stroke="black" stroke-width="1.5"/>
        </svg>
      </button>
    </div>


    <nav class="flex flex-col my-6"> 
      <a
      class="hover:bg-secondary-100 py-2 px-6"
      href={`/${lang}/#our-work`}
      rel="prefetch"
    >
      {t.ourWork}
    </a>
    <a
      class="hover:bg-secondary-100 py-2 px-6"
      href={`/${lang}/#team`}
      rel="prefetch"
    >
      {t.team}
    </a>
    <a
      class="hover:bg-secondary-100 py-2 px-6"
      href={`/blog/${lang}`}
      rel="prefetch"
    >
      {t.blog}
    </a>
    </nav>
    
      <!-- <LanguageSwitch lang={lang} /> -->
      
    <div class="flex gap-4 items-center mx-6">
      <span class=" leading-10">Social:</span> 
      <a
        class="hover:bg-secondary-100 w-12 h-12 flex justify-center items-center rounded-md"
        href="https://twitter.com/fluriumteam"
        target="_blank"
      >
        <TwitterIcon />
      </a>
      <a
        class="hover:bg-secondary-100 w-12 h-12 flex justify-center items-center rounded-md"
        href="https://github.com/flurium"
        target="_blank"
      >
        <GitHubIcon />
      </a>
    </div>

    <a href="#contact" class="py-2 px-4 block mx-6 mt-4 rounded-md bg-primary-500 text-white text-center">
        {t.contact}
    </a>
  </div>
{/if}