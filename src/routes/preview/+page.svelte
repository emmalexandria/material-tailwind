<script lang="ts">
    import ColorPreview from "$lib/ColorPreview.svelte";
    import type { IPalette } from "$lib/generation";
import { hexFromArgb, labFromArgb, type Hct } from "@material/material-color-utilities";

    export let data: {
        colors: IPalette
    };

</script>

<ColorPreview colorName="Primary" colors={data.colors.primary}/>
{#if data.colors.secondary}
<ColorPreview colorName="Secondary" colors={data.colors.secondary}/>
{/if}


