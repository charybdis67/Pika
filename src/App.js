import React from 'react';

import { PokemonProvider } from './pokemons/PokemonContext';
import PokemonsList from './pokemons/PokemonList';
import Pokedex from './pokemons/Pokedex';
import PokemonForm from './pokemons/pokemonForm';

const App = () => (
  <PokemonProvider>
    <div className="main">
      <PokemonsList />
      <Pokedex />
    </div>
    <div className='form-wrapper'>
      <PokemonForm />
    </div>
  </PokemonProvider>
);

export default App;