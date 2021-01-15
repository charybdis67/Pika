import {
  releasePokemon,
  releaseAllPokemon,
  favorPokemon,
} from '../../redux/action/action.ownedPoke';

export const mapState = state => {
  return { pokemons: state.ownedPokemon.pokemons };
};

export const mapDispatch = dispatch => {
  return {
    releasePokemon: data => dispatch(releasePokemon(data)),
    releaseAllPokemon: () => dispatch(releaseAllPokemon()),
    favorPokemon: () => dispatch(favorPokemon()),
  };
};
