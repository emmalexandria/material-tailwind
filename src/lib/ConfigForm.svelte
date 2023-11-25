<script lang="ts">
    import TextInput from '$lib/TextInput.svelte';
    import SubmitButton from '$lib/SubmitButton.svelte';
    import type { IConfig } from './types';
    import { config, scheme } from './stores';
    import { hexFromArgb } from '@material/material-color-utilities';
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
    <TextInput name="primary" label="Primary color*" required={true} value={hexFromArgb($scheme.light.primary)}/>
    <TextInput name="secondary" label="Secondary color" required={false}/>
    <TextInput name="tertiary" label="Tertiary color" required={false}/>
    <TextInput name="error" label="Error color" required={false}/>

    <SubmitButton>Generate</SubmitButton>


</form>
    
</div>
