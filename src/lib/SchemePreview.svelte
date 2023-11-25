<script lang="ts">
    import { getScheme, type IPalette } from "$lib/generation";
    import SchemeColors from "./SchemeColors.svelte";
    import { scheme, config } from "./stores";

    $: if($config != undefined) $scheme = getScheme($config);
</script>

<div class="w-fit mx-auto">
    <h1 class="text-2xl">Light</h1>
    <SchemeColors scheme={$scheme.light} dark={false}/>
    
    <h1 class="text-2xl">Dark</h1>
    <SchemeColors scheme={$scheme.dark} dark={true}/>
</div>
