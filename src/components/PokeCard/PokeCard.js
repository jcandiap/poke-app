import React, { useEffect, useState } from 'react'
import { getPokemonInfoAPI } from '../../services/PokeApi';
import './poke-card.scss';

export const PokeCard = ({ pokemonName, url }) => {

    const [pokemon, setPokemon] = useState()

    const toPascalCase = (string) => {
        return string.replace(/(\w)(\w*)/g,
        function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();});
    }

    useEffect(() => {
        const getPokeInfo = async () => {
            const data = await getPokemonInfoAPI(url);
            setPokemon(data);
        }
        getPokeInfo();
    }, [pokemonName]);

    return (
        Boolean(pokemon) &&
        <div className={ `card ${ pokemon?.types[0].type.name }` }>
            <div className='card-header'>
                <span className='title'>{ toPascalCase(pokemonName) }</span>
                <img loading="lazy" className='poke-image' src={ pokemon?.sprites.front_default } alt={ `${ pokemonName } icon` }/>
            </div>
            <div className='card-content'>
                <div className='card-section'>
                    <div className='title-content'>
                        <span className='subtitle'>Type:</span>
                    </div>
                    {
                        pokemon?.types.map((type, index) => {
                            return <span key={ index } className='abilities'>{ toPascalCase(type.type.name) }{ index < pokemon?.types.length - 1 && '-'}</span>
                        })
                    }
                </div>
                <div className='card-section'>
                    <div className='title-content'>
                        <span className='subtitle'>Abilities:</span>
                    </div>
                    {
                        pokemon?.abilities.map((ability, index) => {
                            return <span key={ index } className='abilities'>{ toPascalCase(ability.ability.name) }{ index < pokemon?.abilities.length - 1 && '-'}</span>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
