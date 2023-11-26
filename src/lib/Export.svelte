<script lang="ts">
    import { hexFromArgb } from "@material/material-color-utilities";
    import { getTailwindColors } from "./colors";
    import { scheme } from "./stores";
    import Button from "./Button.svelte";

    let tailwindConfig: string;

    $: tailwindConfig = getTailwindColors($scheme)
    const copyToClipboard = () => {
        navigator.clipboard.writeText(JSON.stringify(tailwindConfig, undefined, 2))
    }
</script>

<p class="italic text-center my-2">Put this in the colors section of tailwind.config.js</p>
<pre id="json" class="h-96 overflow-y-auto bg-surface-variant rounded">{JSON.stringify(tailwindConfig, undefined, 2)}</pre>

<Button on:click={copyToClipboard} type="button">Copy to clipboard</Button>