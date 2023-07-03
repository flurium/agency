<script lang="ts">
  export let href: string
  export let external: boolean = false

</script>

<a
  class="underline-offset-4 decoration-2 decoration-zinc-300 hover:decoration-primary-400 underline font-semibold cursor-pointer"
  href={href}
  target={external ? "_blank" : null}
>
  <slot />
</a>
