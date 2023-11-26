<script lang="ts">
    import TextInput from "$lib/TextInput.svelte";
    import SubmitButton from "$lib/Button.svelte";
    import type { IConfig } from "./types";
    import { config, scheme } from "./stores";
    import { hexFromArgb } from "@material/material-color-utilities";
    import ColorInput from "./ColorInput.svelte";
    import { updateUIColors } from "./ui";
    import { getHexTones, getSchemeArray } from "./colors";

    let primary: string = $config.primary;
    let secondary: string =
        $config.secondary != undefined ? $config.secondary : "#000000";
    let tertiary: string =
        $config.tertiary != undefined ? $config.tertiary : "#000000";
    let error: string = $config.error != undefined ? $config.error : "#000000";
    let secondaryEnabled = false;
    let tertiaryEnabled = false;
    let errorEnabled = false;

    const formSubmitHandler = (e: SubmitEvent) => {
        e.preventDefault();

        const formConfig: IConfig = {
            primary
        }

        if(secondaryEnabled) formConfig["secondary"] = secondary
        if(tertiaryEnabled) formConfig["tertiary"] = tertiary
        if(errorEnabled) formConfig["error"] = error

        console.log(formConfig)

        $config = formConfig;
        /* let hexScheme = getSchemeArray($scheme.light, false);
        hexScheme.forEach((col) => {
            if (col.name == "primary" && formConfig.primary == undefined) {
                formConfig.primary = col.color;
            }
            if (col.name == "secondary" && (formConfig.secondary == undefined || !secondaryEnabled)) {
                formConfig.secondary = col.color;
            }
            if (col.name == "secondary" && (formConfig.tertiary == undefined || !tertiaryEnabled)) {
                formConfig.tertiary = col.color;
            }
            if (col.name == "tertiary" && (formConfig.error == undefined || !errorEnabled) ) {
                formConfig.error = col.color;
            }
        }); */

        updateUIColors(formConfig);
    };
    
</script>


<form on:submit={formSubmitHandler}>
    <div class="flex flex-row w-fit mx-auto space-x-4">
        <ColorInput label="Primary" disableable={false} enabled={true} bind:value={primary} />
        <ColorInput label="Secondary" bind:value={secondary} bind:enabled={secondaryEnabled}/>
        <ColorInput label="Tertiary" bind:value={tertiary} bind:enabled={tertiaryEnabled} />
        <ColorInput label="Error" bind:value={error} bind:enabled={errorEnabled}/>
    </div>
    <div class="w-fit mx-auto mt-4">
        <SubmitButton type="submit">Generate</SubmitButton>
    </div>

</form>

