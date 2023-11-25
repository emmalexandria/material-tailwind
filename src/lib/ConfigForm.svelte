<script lang="ts">
    import TextInput from '$lib/TextInput.svelte';
    import SubmitButton from '$lib/SubmitButton.svelte';
    import type { IConfig } from './types';
    import { config } from './stores';

    let form: HTMLFormElement

    const formData = (e: SubmitEvent) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const primary = formData.get("primary") as FormDataEntryValue


        const formConfig: IConfig = {
            primary: primary.toString(),
            secondary: formData.get("secondary")?.toString(),


            surfaceBackground: formData.get("surface-background")?.toString() == "on" ? true : false,
            elevation: formData.get("elevation")?.toString() == "on" ? true : false,
            typography: formData.get("typography")?.toString() == "on" ? true : false,
        }

        $config = formConfig;
    }

</script>

<div class="border-2 rounded-md w-max px-8 py-4">
<form on:submit={formData} bind:this={form}>
    <h2>Colours</h2>
    <TextInput name="primary" label="Primary color*" required={true}/>
    <TextInput name="secondary" label="Secondary color" required={false}/>
    <h2>Options</h2>
    <ul>
        <li>
            <label for="checkbox-1">
                <input type="checkbox" name="surface-background" />
                Generate surface and background styles
            </label>
        </li>
        <li>
            <label for="checkbox-2">
                <input type="checkbox" name="elevation"/>
                Generate elevation styles
            </label>
        </li>
        <li>
            <label for="checkbox-3">
                <input type="checkbox" name="typography"/>
                Generate typographical styles
            </label>
        </li>
    </ul>

    <SubmitButton>Generate</SubmitButton>


</form>
    
</div>
