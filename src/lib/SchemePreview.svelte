<script lang="ts">
    import { getScheme, type IPalette } from "$lib/colors";
    import SchemeColors from "./SchemeColors.svelte";
    import { scheme, config } from "./stores";
</script>

<div class="w-fit mx-auto">
    <SchemeColors dark={false}/>
    <SchemeColors dark={true}/>
</div>
