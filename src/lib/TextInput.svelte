<script lang="ts">
    export let required: boolean = false;
    export let autocomplete: "on" | "off" = "off";
    export let name: string;
    export let label: string;
</script>

<label for={name}>{label}</label>
<input type="text" {name} {required} {autocomplete} class="block border-2"/>
