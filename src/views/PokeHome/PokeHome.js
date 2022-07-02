import React, { useEffect, useState } from 'react';
import { PokeCard } from '../../components/PokeCard/PokeCard';
import { getPokemonsAPI } from '../../services/PokeApi';
import './poke-home.scss';

export const PokeHome = () => {

  const [offset, setOffset] = useState(0);

  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const { results } = await getPokemonsAPI(offset);
      setPokemonList(results);
    }

    getPokemons();
  }, [ offset ]);

  /*
    TODO:
    * Agregar paginacion a la url
    * Agregar pagina para ver toda la info
    * Cambiar color de fondo
    * Mejorar UI de los botones
    * Agregar loader
  */
  
  return (
    <div className='body'>
      <div className='cards-container'>
        {
          pokemonList.map(pokemon => {
            return <PokeCard 
              key = { pokemon.name }
              pokemonName = { pokemon.name }
              url = { pokemon.url }
            />
          })
        }
      </div>
      <div className='action-buttons'>
        { offset >= 50 && <button className='footer-button button-outline' onClick={ () => setOffset(offset - 50)}>Previous</button> }
        <button className='footer-button button-normal' onClick={ () => setOffset(offset + 50) }>Next</button>
      </div>
    </div>
  )
}
