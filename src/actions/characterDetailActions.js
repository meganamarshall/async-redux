import { createAction } from 'promise-middleware-redux';
import { getCharacter } from '../services/airbenderApi';

export const [
  fetchCharacters,
  FETCH_CHARACTER,
  FETCH_CHARACTER_LOADING,
  FETCH_CHARACTER_ERROR
] = createAction('FETCH_CHARACTER', getCharacter);
