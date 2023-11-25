<script lang="ts">
    import { getScheme, type IPalette } from "$lib/generation";
    import SchemeColors from "./SchemeColors.svelte";
    import { scheme, config } from "./stores";
</script>

<div class="w-fit mx-auto">
    <h1 class="text-2xl">Light</h1>
    <SchemeColors dark={false} scheme={$scheme.light}/>
    
    <h1 class="text-2xl">Dark</h1>
    <SchemeColors dark={true} scheme={$scheme.dark}/>
</div>
