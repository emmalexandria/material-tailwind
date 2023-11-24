<script lang="ts">
    import { page } from "$app/stores";

    export let href: string;
    export let disabled: boolean;

    let selected: boolean = false;

    $: selected = ($page.url.pathname == href)
</script>

{#if !selected}
<li class="ml-8 p-2 rounded-md block">
    <a {href} class="">
        <slot/>
    </a>
</li>
{:else}
<li class="ml-8 p-2 rounded-md text-white bg-blue-500">
    <a {href}>
        <slot/>
    </a>
</li>
{/if}