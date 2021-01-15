import {
  CATCH_POKEMON,
  RELEASE_POKEMON,
  RELEASE_ALL_POKEMON,
  FAVOR_POKEMON,
} from '../type/type.ownedPoke';

export const catchPokemon = data => {
  return {
    type: CATCH_POKEMON,
    payload: data,
  };
};

export const releasePokemon = data => {
  return {
    type: RELEASE_POKEMON,
    payload: data,
  };
};

export const favorPokemon = data => {
  return {
    type: FAVOR_POKEMON,
    payload: data,
  };
};

export const releaseAllPokemon = () => {
  return {
    type: RELEASE_ALL_POKEMON,
    payload: {},
  };
};
