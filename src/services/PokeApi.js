export const getPokemonsAPI = async( offset ) => {

    const url = `https://pokeapi.co/api/v2/pokemon/?limit=50&offset=${ offset }`;
    const resp = await fetch( url );
    const response = await resp.json();

    return response;
}


export const getPokemonInfoAPI = async( url ) => {
    
    const resp = await fetch( url );
    const response = await resp.json();

    return response;
}