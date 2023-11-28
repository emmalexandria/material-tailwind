<script lang="ts">
    import "../app.css";
    import { config, scheme } from "$lib/stores";
    import { getScheme } from "$lib/colors";

    import '@fontsource-variable/roboto-flex';
    onMount(async () => {
      // @ts-ignore
      import('@material-tailwind/html/scripts/ripple')
    })

    import { onMount } from "svelte";
    $: $scheme = getScheme($config);
</script>



<main class="px-16 py-16 w-full h-full bg-background">
  <slot />
</main>