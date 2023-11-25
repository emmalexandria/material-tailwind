<script lang="ts">
    import { hexFromArgb } from "@material/material-color-utilities";
    import { getTailwindColors } from "./generation";
    import { scheme } from "./stores";

    let tailwindConfig = getTailwindColors($scheme)

    const copyToClipboard = () => {
        navigator.clipboard.writeText(JSON.stringify(tailwindConfig, undefined, 2))
    }
</script>

<h2 class="text-center text-xl">Put this in the colors section of tailwind.config.js</h2>
<pre id="json" class="h-96 overflow-y-auto">{JSON.stringify(tailwindConfig, undefined, 2)}</pre>
<button on:click={copyToClipboard} class="px-4 py-2 rounded-full" style={`background-color: ${hexFromArgb($scheme.light.primary)}; color: ${hexFromArgb($scheme.light.onPrimary)}`}>Copy to clipboard</button>