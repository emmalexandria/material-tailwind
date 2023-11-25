import type { IConfig } from "./types";

import { CorePalette, Scheme, argbFromHex, hexFromArgb } from "@material/material-color-utilities";
import type { CorePaletteColors, Hct, TonalPalette } from "@material/material-color-utilities";

export interface IPalette {
    primary: string[],
    secondary?: string[]
}


export function generateColors(config: IConfig) {
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

export function getShades(config: IConfig) {
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

    return generatePalette(genPalette, secondary != undefined)
}

function generateScheme(corePalette: CorePalette) {
    const schemeLight = Scheme.lightFromCorePalette(corePalette);
    const schemeDark = Scheme.darkFromCorePalette(corePalette);

    return {
        light: schemeLight,
        dark: schemeDark,
    }
}

function generatePalette(corePalette: CorePalette, secondary: boolean) {
    const primaryPalette = getHexTones(corePalette.a1);

    let secondaryPalette = undefined;
    if (secondary) secondaryPalette = getHexTones(corePalette.a2);

    const palette: IPalette = {
        primary: primaryPalette,
        secondary: secondaryPalette,
    }

    return palette; 
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