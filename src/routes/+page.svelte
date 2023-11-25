<script lang="ts">
    import { config, scheme } from '$lib/stores';
    import ConfigForm from '$lib/ConfigForm.svelte';
    import SchemePreview from '$lib/SchemePreview.svelte';
    import { onMount } from 'svelte';
    import { getScheme } from '$lib/generation';

</script>

<div class="w-fit mx-auto">
<h1 class="text-5xl text-center">Material Tailwind Scheme Generator</h1>
<div>
    <h2 class="text-3xl">Step 1: Configuration</h2>
    <ConfigForm/>
    {#if $config}
    <h2 class="text-3xl">Step 2: Preview</h2>
        <SchemePreview/>
    {/if}
    {#if $scheme}
        <h2 class="text-3xl">Step 3: Export</h2>
    {/if}
</div>
    
</div>
