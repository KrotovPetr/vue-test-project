type TPoke = { name: string, url: string}

export type TPokemon = {
    "base_happiness" : number,
    "capture_rate" : number,
    "color" : TPoke | {} ,
    "egg_groups" ?: TPoke[] | [],
    "evolution_chain" ?: {url: string} | {},
    "evolves_from_species" ?: TPoke | {},
    "flavor_text_entries" : any,
    "form_descriptions" : [] | any,
    "forms_switchable" : boolean,
    "gender_rate" : number,
    "generation" ?: TPoke | {},
    "genera" ?: [] | {genus: string, language: TPoke}[],
    "growth_rate" ?: { } | TPoke,
    "has_gender_differences": boolean,
    "hatch_counter": number,
    "id": number,
    "is_baby": boolean,
    "is_legendary": boolean,
    "is_mythical": boolean,
    "name": string,
    "names"?: [] | {language: TPoke, name: string},
    "pal_park_encounters": any,
    "pokedex_numbers": any,
    "shape": TPoke,
    varietes: {} | {"is_default": boolean, pokemon: TPoke}[]

}