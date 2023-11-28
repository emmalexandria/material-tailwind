<script lang="ts">
    export let value: string;
    export let label: string;
    export let disableable: boolean = true;
    export let enabled: boolean = false;
    
    import Checkbox from "./Checkbox.svelte";
    import ColorPicker from "./ColorPicker.svelte";
</script>

<div class="flex flex-row items-start">
    <div
        class={`${
            !enabled && disableable
                ? "opacity-80 pointer-events-none"
                : "opacity-100"
        }`}
    >
        <label for={label} class="w-fit mr-2 block">
            <ColorPicker bind:value={value} {label}/>
            {label}
        </label>
    </div>
    {#if disableable}
        <Checkbox id={label} bind:checked={enabled}/>
        <!-- <CheckboxLabel id={label} bind:checked={enabled} {label}/> -->
    {/if}
</div>
