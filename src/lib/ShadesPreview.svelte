<script lang="ts">
    import ColorPreview from "$lib/ColorPreview.svelte";
    import { generateColors, getShades, type IPalette } from "$lib/generation";
    import { shades, config } from "./stores";

    $: if($config != undefined) $shades = getShades($config);
</script>


{#if $shades}
    <ColorPreview colorName="Primary" colors={$shades.primary} />
    {#if $shades.secondary}
    <ColorPreview colorName="Secondary" colors={$shades.secondary} />
    {/if}
{/if}
