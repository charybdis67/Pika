import React from 'react';

import { PokemonProvider } from './PokemonContext';
import PokemonsList from './PokemonList';
import Pokedex from './Pokedex';
import PokemonForm from './pokemonForm';

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