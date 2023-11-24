import type { IConfig } from "./types";

import { CorePalette, argbFromHex, hexFromArgb } from "@material/material-color-utilities";
import type { CorePaletteColors, Hct, TonalPalette } from "@material/material-color-utilities";


export async function generateColors(config: IConfig) {
    const primary = argbFromHex(config.primary);
    let secondary = undefined;
    if(config.secondary) {
        secondary = argbFromHex(config.secondary);
    }

    const coreColors: CorePaletteColors = {
        primary: primary,
        secondary: secondary,
    }

    const genPalette = CorePalette.fromColors(coreColors);

    const primaryPalette = getHexTones(genPalette.a1);

    let secondaryPalette = undefined;
    if(coreColors.secondary) secondaryPalette = getHexTones(genPalette.a2);

    return primaryPalette;
}

export function getHexTones(palette: TonalPalette) {
    const hexPalette: string[] = [];

    hexPalette.push(hexFromArgb(palette.getHct(5).toInt()))
    for(let i = 10; i <= 90; i+=10) {
        hexPalette.push(hexFromArgb(palette.getHct(i).toInt()))
        if(i==90) hexPalette.push(hexFromArgb(palette.getHct(95).toInt()))
    }

    console.log(hexPalette);
    return hexPalette;
}