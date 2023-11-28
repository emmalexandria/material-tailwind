<script lang="ts">
    export let value: string;
    export let label: string;

</script>

<input type="text" bind:value={value} name={label} data-coloris class="p-2 border rounded-md border-outline" />