<script lang="ts">
    export let value: string;
    export let label: string;
    export let disableable: boolean = true;
    export let enabled: boolean = false;

    import ColorPicker from "svelte-awesome-color-picker";
    import Checkbox from "./Checkbox.svelte";
</script>

<div class="flex flex-row align-center">
    <div
        class={`${
            !enabled && disableable
                ? "opacity-80 pointer-events-none"
                : "opacity-100"
        }`}
    >
        <ColorPicker isTextInput={true} {label} bind:hex={value} />
    </div>
    {#if disableable}
        <Checkbox id={label} bind:checked={enabled}/>
    {/if}
</div>
