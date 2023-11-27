<script lang="ts">
    import { config, scheme } from '$lib/stores';
    import ConfigForm from '$lib/ConfigForm.svelte';
    import SchemePreview from '$lib/SchemePreview.svelte';
    import Export from '$lib/Export.svelte';
    import SectionHeader from '$lib/SectionHeader.svelte';
</script>

<svelte:head>
    <title>M3 + Tailwind Generator</title>
    <meta name="description" content="Easy to use tool that generates a set of Material 3 colours for use in TailwindCSS">
</svelte:head>

<div class="w-fit mx-auto">
<h1 class="text-5xl text-center font-bold mb-8">M3 + Tailwind Generator</h1>
<div>
    <SectionHeader>1. Configuration</SectionHeader>
    <div class="px-4 py-4 rounded-md w-min mx-auto bg-surface drop-shadow-lg">
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
