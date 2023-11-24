<script lang="ts">
    import { hexFromArgb, labFromArgb, type Hct } from "@material/material-color-utilities";

    export let data: {
        colors: string[]
    };

</script>


{#each data.colors as color}
    <div style={`width: 50px; height: 50px; border-radius: 4px; background: ${color}`}></div> 
{/each}
