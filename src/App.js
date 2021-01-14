import React from 'react';

import { PokemonProvider } from './PokemonContext';
import PokemonList from './PokemonList';
import Pokedex from './Pokedex';

const App = () => (
  <PokemonProvider>
    <div className="main">
      <PokemonList />
      <Pokedex />
    </div>
    
  </PokemonProvider>
);

export default App;