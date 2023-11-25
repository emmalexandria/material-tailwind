<script lang="ts">
    export let colorName: string;
    export let color: string;
</script>

<span class="flex flex-row space-x-2 items-center">
    <div class="w-12 h-12 rounded-md border" style={`background-color: ${color}`}></div>
    <h2 class="text-xl">{colorName}</h2>
</span>