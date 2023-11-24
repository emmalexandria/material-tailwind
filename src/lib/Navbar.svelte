<script>
    import NavItem from "./NavItem.svelte";

</script>
<nav class="flex flex-row items-center">
    <a class="text-3xl" href="/"><h1>M3 Tailwind Colors</h1></a>

    <ul class="flex flex-row">
        <NavItem href="/" disabled={false}>Config</NavItem>
        <NavItem href="/preview" disabled={false}>Preview</NavItem>
        <NavItem href="/export" disabled={false}>Export</NavItem>
    </ul>
</nav>