import React from 'react';

import Pokemon from './Pokemon';
import classes from './PokemonList.module.css';

const PokemonList = (props) => {
  return (
    <ul className={classes['pokemon-list']}>
      {props.pokemon.map((pokemon) => (
        <Pokemon
          key={pokemon.name}
          name={pokemon.name}
        />
      ))}
    </ul>
  );
};

export default PokemonList;
