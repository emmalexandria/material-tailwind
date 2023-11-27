<script lang="ts">
    import type { Scheme } from "@material/material-color-utilities";
    import SchemeColor from "./SchemeColor.svelte";
    import { scheme } from "$lib/stores";
    import { getSchemeArray } from "./colors";
    import type { IColor } from "./types";

    export let dark: boolean;
    let colorScheme: Scheme = dark ? $scheme.dark : $scheme.light;
    $: colorScheme = dark ? $scheme.dark : $scheme.light;

    let schemeHex: IColor[] = [];
    $: schemeHex = getSchemeArray(colorScheme, dark);
</script>

<div
    class={`grid grid-cols-4 px-4 py-4 space-y-4 rounded-lg mb-4 drop-shadow-lg ${
        dark
            ? "bg-background-dark"
            : "bg-background-light"
    }`}
>
    {#each schemeHex as hex}
        <SchemeColor colorName={hex.name} color={hex.color} />
    {/each}
</div>
