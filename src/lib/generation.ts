import type { IColor, IConfig } from "./types";

import { CorePalette, Scheme, argbFromHex, hexFromArgb } from "@material/material-color-utilities";
import type { CorePaletteColors, Hct, TonalPalette } from "@material/material-color-utilities";

export interface IPalette {
    primary: string[],
    secondary?: string[]
}


export function getScheme(config: IConfig) {
    const primary = argbFromHex(config.primary);
    let secondary = undefined;
    if (config.secondary) {
        secondary = argbFromHex(config.secondary);
    }

    const coreColors: CorePaletteColors = {
        primary: primary,
        secondary: secondary,
    }

    const genPalette = CorePalette.fromColors(coreColors);
    return generateScheme(genPalette);
}

function generateScheme(corePalette: CorePalette) {
    const schemeLight = Scheme.lightFromCorePalette(corePalette);
    const schemeDark = Scheme.darkFromCorePalette(corePalette);

    return {
        light: schemeLight,
        dark: schemeDark,
    }
}


export function getHexTones(palette: TonalPalette) {
    const hexPalette: string[] = [];

    hexPalette.push(hexFromArgb(palette.getHct(5).toInt()))
    for (let i = 10; i <= 90; i += 10) {
        hexPalette.push(hexFromArgb(palette.getHct(i).toInt()))
        if (i == 90) hexPalette.push(hexFromArgb(palette.getHct(95).toInt()))
    }

    console.log(hexPalette);
    return hexPalette;
}

export function getSchemeArray(scheme: Scheme, dark: boolean): IColor[] {
    let retArray: IColor[] = [];

    //unironically the least ugly way I could come up with to do this kind of mapping
    retArray.push({name: `primary${dark?'-dark' : ''}`, color: hexFromArgb(scheme.primary)})
    retArray.push({name: `on-primary${dark?'-dark' : ''}`, color: hexFromArgb(scheme.onPrimary)})
    retArray.push({name: `primary-container${dark?'-dark' : ''}`, color: hexFromArgb(scheme.primaryContainer)})
    retArray.push({name: `on-primary-container${dark?'-dark' : ''}`, color: hexFromArgb(scheme.onPrimaryContainer)})
    retArray.push({name: `secondary${dark?'-dark' : ''}`, color: hexFromArgb(scheme.secondary)})
    retArray.push({name: `on-secondary${dark?'-dark' : ''}`, color: hexFromArgb(scheme.onSecondary)})
    retArray.push({name: `secondary-container${dark?'-dark' : ''}`, color: hexFromArgb(scheme.secondaryContainer)})
    retArray.push({name: `on-secondary-container${dark?'-dark' : ''}`, color: hexFromArgb(scheme.onSecondaryContainer)})
    retArray.push({name: `tertiary${dark?'-dark' : ''}`, color: hexFromArgb(scheme.tertiary)})
    retArray.push({name: `on-tertiary${dark?'-dark' : ''}`, color: hexFromArgb(scheme.onTertiary)})
    retArray.push({name: `tertiary-container${dark?'-dark' : ''}`, color: hexFromArgb(scheme.tertiaryContainer)})
    retArray.push({name: `on-tertiary-container${dark?'-dark' : ''}`, color: hexFromArgb(scheme.onTertiaryContainer)})
    retArray.push({name: `error${dark?'-dark' : ''}`, color: hexFromArgb(scheme.error)})
    retArray.push({name: `on-error${dark?'-dark' : ''}`, color: hexFromArgb(scheme.onError)})
    retArray.push({name: `error-container${dark?'-dark' : ''}`, color: hexFromArgb(scheme.errorContainer)})
    retArray.push({name: `on-error-container${dark?'-dark' : ''}`, color: hexFromArgb(scheme.onErrorContainer)})
    retArray.push({name: `background${dark?'-dark' : ''}`, color: hexFromArgb(scheme.background)})
    retArray.push({name: `on-background${dark?'-dark' : ''}`, color: hexFromArgb(scheme.onBackground)})
    retArray.push({name: `surface${dark?'-dark' : ''}`, color: hexFromArgb(scheme.surface)})
    retArray.push({name: `on-surface${dark?'-dark' : ''}`, color: hexFromArgb(scheme.onSurface)})
    retArray.push({name: `surface-variant${dark?'-dark' : ''}`, color: hexFromArgb(scheme.surfaceVariant)})
    retArray.push({name: `on-surface-variant${dark?'-dark' : ''}`, color: hexFromArgb(scheme.onSurfaceVariant)})
    retArray.push({name: `outline${dark?'-dark' : ''}`, color: hexFromArgb(scheme.outline)})
    retArray.push({name: `outline-variant${dark?'-dark' : ''}`, color: hexFromArgb(scheme.outlineVariant)})
    retArray.push({name: `shadow${dark?'-dark' : ''}`, color: hexFromArgb(scheme.shadow)})
    retArray.push({name: `scrim${dark?'-dark' : ''}`, color: hexFromArgb(scheme.scrim)})
    retArray.push({name: `inverse-surface${dark?'-dark' : ''}`, color: hexFromArgb(scheme.inverseSurface)})
    retArray.push({name: `inverse-on-surface${dark?'-dark' : ''}`, color: hexFromArgb(scheme.inverseOnSurface)})
    retArray.push({name: `inverse-primary${dark?'-dark' : ''}`, color: hexFromArgb(scheme.inversePrimary)})



    return retArray;

}

export function getTailwindColors(schemes: {light: Scheme, dark: Scheme}) {
    //let colors: {[key: string]: string} = {};
    let colors = {} as any;
    
    let colorArray: any[] = [];

    colorArray.push(...getSchemeArray(schemes.dark, true))
    colorArray.push(...getSchemeArray(schemes.light, false))


    colorArray.forEach(color => {
        colors[color.name] = color.color;
    });

    return colors;
}