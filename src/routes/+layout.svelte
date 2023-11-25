<script lang="ts">
  import "../app.css";
    import { config, scheme } from "$lib/stores";
    import { getScheme } from "$lib/generation";
    import { onMount } from "svelte";


    onMount(() => {
        $scheme = getScheme($config)
    })
</script>

{#if $scheme}
<main class="px-8 py-8 w-full h-full" style={`background-color: ${$scheme.light.background} color: ${$scheme.light.onBackground}`}>
  <slot />
</main>
{/if}
