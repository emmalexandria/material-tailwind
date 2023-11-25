<script lang="ts">
  import "../app.css";
    import { config, scheme } from "$lib/stores";
    import { getScheme } from "$lib/generation";
    import { onMount } from "svelte";
    import { hexFromArgb } from "@material/material-color-utilities";


    onMount(() => {
        $scheme = getScheme($config)
    })
</script>

{#if $scheme}
<main class="px-8 py-8 w-full h-full" style={`background-color: ${hexFromArgb($scheme.light.background)} color: ${hexFromArgb($scheme.light.onBackground)}`}>
  <slot />
</main>
{/if}
