<script lang="ts">
  import Link from './Link.svelte'

  let open: boolean = false
</script>

<nav class="block sm:hidden">
  <button class="p-3 rounded-md text-2xl hover:bg-zinc-100" on:click={() => open = !open}>
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
  <nav class="absolute top-0 right-0 p-6 w-1/2 bg-white rounded-md flex flex-col gap-4 sm:hidden items-end">
    <button class="p-3 rounded-md text-2xl hover:bg-zinc-100" on:click={() => open = !open}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L18 18M2 18L18 2" stroke="black" stroke-width="1.5"/>
      </svg>
    </button>

    <Link href="#our-work">Our work</Link>
    <Link href="#team">Team</Link>
    <a href="#contact" class="py-2 px-4 w-full rounded-md bg-violet-400 text-white text-center">
      Contact
    </a>
  </nav>
{/if}