<script lang="ts">
    import { generateColors, getScheme, getShades, type IPalette } from "$lib/generation";
    import SchemeColors from "./SchemeColors.svelte";
    import { scheme, config } from "./stores";

    $: if($config != undefined) $scheme = getScheme($config);
</script>

<h1 class="text-2xl">Light</h1>
<SchemeColors scheme={$scheme.light}/>

<h1 class="text-2xl">Dark</h1>
<SchemeColors scheme={$scheme.dark}/>