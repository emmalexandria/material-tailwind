<script lang="ts">
    import TextInput from '$lib/TextInput.svelte';
    import SubmitButton from '$lib/SubmitButton.svelte';
    import type { IConfig } from './types';
    import { config, scheme } from './stores';
    import { hexFromArgb } from '@material/material-color-utilities';
    import ColorInput from './ColorInput.svelte';
    let form: HTMLFormElement

    const formData = (e: SubmitEvent) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const primary = formData.get("primary") as FormDataEntryValue

        const formConfig: IConfig = {
            primary: primary.toString(),
            secondary: formData.get("secondary")?.toString(),

        }

        $config = formConfig;
    }

</script>

<div class="border-2 rounded-md w-max px-8 py-4 mx-auto">
<form on:submit={formData} bind:this={form}>
    <ColorInput name="primary" value={$config.primary}/>
    <ColorInput name="secondary" value={$config.secondary != undefined ? $config.secondary : "#000000"}/>
    <TextInput name="secondary" label="Secondary color" required={false}/>
    <TextInput name="tertiary" label="Tertiary color" required={false}/>
    <TextInput name="error" label="Error color" required={false}/>

    <SubmitButton>Generate</SubmitButton>


</form>
    
</div>
