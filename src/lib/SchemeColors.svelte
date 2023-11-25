<script lang="ts">
    import { hexFromArgb, type Scheme } from "@material/material-color-utilities";
    import SchemeColor from "./SchemeColor.svelte";
    import { getSchemeArray } from "./generation";

    export let scheme: Scheme;
    export let dark: boolean;

    let schemeHex = getSchemeArray(scheme, dark);

</script>

<div class="grid grid-cols-4 px-8 py-4 space-y-4 rounded-lg" style={`background-color: ${hexFromArgb(scheme.background)}; color: ${hexFromArgb(scheme.onBackground)}`}>


{#each schemeHex as hex}
<SchemeColor colorName={hex.name} color={hex.color}/>
{/each}



</div>
