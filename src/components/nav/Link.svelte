<script lang="ts">
  export let href: string
  export let external: boolean = false
</script>

{#if external}

<a
  class="underline-offset-4 decoration-2 decoration-secondary-300 hover:decoration-primary-500 underline font-semibold cursor-pointer"
  href={href} target="_blank"
>
  <slot />
</a>

{:else}

<a
  class="underline-offset-4 decoration-2 decoration-secondary-300 hover:decoration-primary-500 underline font-semibold cursor-pointer"
  href={href} rel="prefetch"
>
  <slot />
</a>

{/if}
