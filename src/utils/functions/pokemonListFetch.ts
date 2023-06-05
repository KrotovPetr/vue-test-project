export const fetchPokemons = async (pageSize: any, current: any) => {
    try {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };
        // @ts-ignore
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${current}`, requestOptions)
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('error', error));
        console.log(result);
        return {data: result.results.map((pokemon: any) => {
            return {id: Date.now(), ...pokemon};
        }), count: result.count};

    } catch (e) {
        console.error("Unexpected error! Please, try later.")
    }
};
