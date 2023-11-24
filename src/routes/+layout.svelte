<script lang="ts">
  import "../app.pcss";
  import Navbar from "$lib/Navbar.svelte";
</script>

<header class="px-8 py-4">
  <Navbar />
</header>
<main class="px-8">
  <slot />
</main>
