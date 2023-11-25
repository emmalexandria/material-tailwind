<script lang="ts">
    import { config } from '$lib/stores';
    import ConfigForm from '$lib/ConfigForm.svelte';
    import SchemePreview from '$lib/SchemePreview.svelte';

    $: console.log($config)
</script>

<h1>Step 1: Configuration</h1>
<ConfigForm/>
{#if $config}
    <SchemePreview/>
{/if}

