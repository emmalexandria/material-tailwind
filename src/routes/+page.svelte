<script lang="ts">
    import { config, scheme } from '$lib/stores';
    import ConfigForm from '$lib/ConfigForm.svelte';
    import SchemePreview from '$lib/SchemePreview.svelte';
    import Export from '$lib/Export.svelte';
    import SectionHeader from '$lib/SectionHeader.svelte';
</script>

<svelte:head>
    <title>M3 Tailwind Colour Generator</title>
    <meta name="description" content="Generates a set of TailwindCSS variables in accordance with the Material 3 spec">
</svelte:head>

<div class="w-fit mx-auto">
<h1 class="text-5xl text-center font-bold mb-8">Material Tailwind Scheme Generator</h1>
<div class="space-y-16">
    <div class="px-4 py-2 rounded-md w-min mx-auto bg-surface drop-shadow">
        <SectionHeader>1. Configuration</SectionHeader>
        <ConfigForm/>
    </div>
    <div class="">
        <SectionHeader>2: Preview</SectionHeader>
        <SchemePreview/>
    </div>
    <div class="">
        <SectionHeader>3: Export</SectionHeader>
        <Export/>
    </div>

    
</div>
    
</div>
