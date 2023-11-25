<script lang="ts">
    import { config, scheme } from '$lib/stores';
    import ConfigForm from '$lib/ConfigForm.svelte';
    import SchemePreview from '$lib/SchemePreview.svelte';
    import { onMount } from 'svelte';
    import { getScheme } from '$lib/generation';
    import Export from '$lib/Export.svelte';


    $: $scheme = getScheme($config);
</script>

<div class="w-fit mx-auto">
<h1 class="text-5xl text-center">Material Tailwind Scheme Generator</h1>
<div class="space-y-4">
    <h2 class="text-3xl text-center">Step 1: Configuration</h2>
    <ConfigForm/>
    {#if $config}
    <h2 class="text-3xl text-center">Step 2: Preview</h2>
        <SchemePreview/>
    {/if}
    {#if $scheme}
        <h2 class="text-3xl text-center">Step 3: Export</h2>
        <Export/>
    {/if}
    
</div>
    
</div>
