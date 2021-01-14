import React from 'react';

import { PokemonProvider } from './pokemons/PokemonContext';
import PokemonsList from './pokemons/PokemonList';
import Pokedex from './pokemons/Pokedex';
import './layout/Header.css';

const App = () => (
  <PokemonProvider>
    <header>
				<h1 className='title'>
		      Poke՛mon Cards
		    </h1>
    </header>
    <div className="main">
      <PokemonsList />
      <Pokedex />
    </div>
  </PokemonProvider>
);

export default App;