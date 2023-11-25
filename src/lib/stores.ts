import { writable } from "svelte/store";
import type { IConfig } from "./types";
import type { IPalette } from "./generation";
import type { Scheme } from "@material/material-color-utilities";

export const config = writable<IConfig>({
    primary: "#082dff",
})
export const shades = writable<IPalette>(undefined);
export const scheme = writable<{dark: Scheme, light: Scheme}>(undefined);

export const canPreview = writable(false);
export const canExport = writable(false);