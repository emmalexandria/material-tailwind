import { writable } from "svelte/store";
import type { IConfig } from "./types";

export const config = writable<IConfig>(undefined)