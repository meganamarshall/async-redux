import reducer from './charactersReducers';
import { FETCH_CHARACTERS, FETCH_CHARACTERS_LOADING, FETCH_CHARACTERS_ERROR } from '../actions/characterActions';

describe('characters reducer', () => {
  it('handles the fetch characters action', () => {
    const initialState = {
      loading: false,
      list: [],
      error: null
    };
    const newState = reducer(initialState, {
      type: FETCH_CHARACTERS,
      payload: ['megan', 'other']
    });
    expect(newState).toEqual({
      loading: false,
      list: ['megan', 'other'],
      error: null
    });
  });
});
