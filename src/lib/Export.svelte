<script lang="ts">
    import { hexFromArgb } from "@material/material-color-utilities";
    import { getTailwindColors } from "./colors";
    import { scheme } from "./stores";
    import Button from "./Button.svelte";
    import OutlinedButton from "./OutlinedButton.svelte";

    let tailwindConfig: string;

    $: tailwindConfig = getTailwindColors($scheme)
    const copyToClipboard = () => {
        navigator.clipboard.writeText(JSON.stringify(tailwindConfig, undefined, 2))
    }
</script>


<pre id="json" class="h-96 overflow-y-auto bg-surface-variant rounded mt-8">{JSON.stringify(tailwindConfig, undefined, 2)}</pre>

<div class="flex flex-row mt-4 justify-between">
    <p class="italic text-center my-2">Put this in the colors section of tailwind.config.js</p>
    <Button on:click={copyToClipboard} type="button">Copy to clipboard</Button>
</div>
