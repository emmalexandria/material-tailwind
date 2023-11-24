<script lang="ts">
    export let colors: string[];
    export let colorName: string;

    let colorIndices = [
        50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950
    ]
</script>

<div class="w-fit flex flex-col space-y-2">
<h1 class="text-xl">{colorName}</h1>
{#each colors as color, i}
    <div class="flex flex-row space-x-2">
        <div
            class="w-6 h-6"
            style={`border-radius: 4px; background: ${color}`}
        />
        <p>{colorIndices[i]}</p>
    </div>
{/each}
    
</div>
