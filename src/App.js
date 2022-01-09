import React, { useState } from "react";

import "./App.css";
import PokemonList from"./components/PokemonList"
function App() {
  const [pokemon,setPokemon] = useState([])
  function fetchPokeHandler() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((respense) => {
        return respense.json();
      })
      .then((data) => {
        console.log(data)
        setPokemon(data.results)
      });
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchPokeHandler}>Fetch Pokemon</button>
      </section>
      <section>
      <PokemonList pokemon={pokemon} />

      </section>
    </React.Fragment>
  );
}

export default App;
