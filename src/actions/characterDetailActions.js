import { createAction } from 'promise-middleware-redux';
import { getOneCharacter } from '../services/airbenderApi';

export const [
  fetchCharacter,
  FETCH_CHARACTER,
  FETCH_CHARACTER_LOADING
] = createAction('FETCH_CHARACTER', getOneCharacter);
