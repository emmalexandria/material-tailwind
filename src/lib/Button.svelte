<script lang="ts">
    export let type: "submit" | "button";
</script>

<button on:click {type}
  class="middle none center rounded-full h-10 bg-primary px-6 text-sm font-medium shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:primary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  data-ripple-light="true"
>
  <slot/>
</button>