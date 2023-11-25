<script>
    import { hexFromArgb } from "@material/material-color-utilities";
    import { scheme } from "./stores";
</script>

<button type="submit" class="px-4 py-2 text-white rounded-full" style={`background-color: ${hexFromArgb($scheme.light.primary)}; color: ${hexFromArgb($scheme.light.onPrimary)}`}><slot/></button>