import { generateColors } from "$lib/generation";
import {config} from "$lib/stores"
import { get } from "svelte/store";

export async function load() {
    console.log(get(config))
    return {
        colors: await generateColors(get(config))
    }
}