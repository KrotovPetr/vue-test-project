import {TPokeCard} from "@/utils/types/pokeCardType";

export const fetchPokemonsFunc = async (pageSize: number, current: number) =>{
    const idArea: number = (current-1)*pageSize;
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${idArea}`,  {
        method: 'GET',
        redirect: 'follow',
    })
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));

    const pokemonArr: TPokeCard[] = result.results.map((pokemon: {url: string, name: string}) => {
        return { id: Date.now(), ...pokemon };
    });

    return {arr: pokemonArr, count: result.count};
}