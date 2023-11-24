<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { IConfig } from '$lib/types';
    import { redirect } from '@sveltejs/kit';
    import { config } from '$lib/stores';
    import { generateColors } from '$lib/generation';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import { enhance } from '$app/forms';
    import TextInput from '$lib/TextInput.svelte';

	const dispatch = createEventDispatcher();

    const formSubmit = (event: FormDataEvent) => {
        event.preventDefault()
        const surfaceBackground = event.formData.get("surface-background") == "on" ? true: false;
        const elevation = event.formData.get("elevation") == "on" ? true: false;
        const typography  = event.formData.get("typography") == "on" ? true: false;

        

        const genSettings: IConfig = {
            primary: event.formData.get("primary")?.toString() as string,
            secondary: event.formData.get("secondary")?.toString(),
            surfaceBackground,
            elevation,
            typography,
        }

        $config = genSettings;
        //window.location.replace('/preview')
    }
</script>

<div class="border-2 rounded-md w-max px-8 py-4">
<form on:formdata={formSubmit}>
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

    <button type="submit">Submit</button>


</form>
    
</div>
