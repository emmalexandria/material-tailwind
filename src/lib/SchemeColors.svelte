<script lang="ts">
    import { hexFromArgb, type Scheme } from "@material/material-color-utilities";
    import SchemeColor from "./SchemeColor.svelte";

    export let scheme: Scheme;


</script>

<div class="grid grid-cols-4 px-8 py-4 space-y-4 rounded-lg w-fit" style={`background-color: ${hexFromArgb(scheme.surface)}; color: ${hexFromArgb(scheme.onSurface)}`}>

<SchemeColor colorName="Primary" color={hexFromArgb(scheme.primary)}/>
<SchemeColor colorName="On primary" color={hexFromArgb(scheme.onPrimary)}/>
<SchemeColor colorName="Primary container" color={hexFromArgb(scheme.primaryContainer)}/>
<SchemeColor colorName="On primary container" color={hexFromArgb(scheme.onPrimaryContainer)}/>
<SchemeColor colorName="Secondary" color={hexFromArgb(scheme.secondary)}/>
<SchemeColor colorName="On secondary" color={hexFromArgb(scheme.onSecondary)}/>
<SchemeColor colorName="Secondary container" color={hexFromArgb(scheme.secondaryContainer)}/>
<SchemeColor colorName="On secondary container" color={hexFromArgb(scheme.onSecondaryContainer)}/>
<SchemeColor colorName="Tertiary" color={hexFromArgb(scheme.tertiary)}/>
<SchemeColor colorName="On tertiary" color={hexFromArgb(scheme.onTertiary)}/>
<SchemeColor colorName="Tertiary container" color={hexFromArgb(scheme.tertiaryContainer)}/>
<SchemeColor colorName="On tertiary container" color={hexFromArgb(scheme.onTertiaryContainer)}/>
<SchemeColor colorName="Error" color={hexFromArgb(scheme.error)}/>
<SchemeColor colorName="On error" color={hexFromArgb(scheme.onError)}/>
<SchemeColor colorName="Error container" color={hexFromArgb(scheme.errorContainer)}/>
<SchemeColor colorName="On error container" color={hexFromArgb(scheme.onErrorContainer)}/>
<SchemeColor colorName="Background" color={hexFromArgb(scheme.background)}/>
<SchemeColor colorName="On background" color={hexFromArgb(scheme.onBackground)}/>
<SchemeColor colorName="Surface" color={hexFromArgb(scheme.surface)}/>
<SchemeColor colorName="On surface" color={hexFromArgb(scheme.onSurface)}/>
<SchemeColor colorName="Surface variant" color={hexFromArgb(scheme.surfaceVariant)}/>
<SchemeColor colorName="On surface variant" color={hexFromArgb(scheme.onSurfaceVariant)}/>
<SchemeColor colorName="Outline" color={hexFromArgb(scheme.outline)}/>
<SchemeColor colorName="Outline variant" color={hexFromArgb(scheme.outlineVariant)}/>
<SchemeColor colorName="Shadow" color={hexFromArgb(scheme.shadow)}/>
<SchemeColor colorName="Scrim" color={hexFromArgb(scheme.scrim)}/>
<SchemeColor colorName="Inverse surface" color={hexFromArgb(scheme.inverseSurface)}/>
<SchemeColor colorName="Inverse on surface" color={hexFromArgb(scheme.inverseOnSurface)}/>
<SchemeColor colorName="Inverse primary" color={hexFromArgb(scheme.inversePrimary)}/>



</div>
