import { createAction } from 'promise-middleware-redux';
import { getCharacters } from '../services/airbenderApi';

export const [
  fetchCharacters,
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_LOADING,
  FETCH_CHARACTERS_ERROR
] = createAction('FETCH_CHARACTERS', getCharacters);
