import { FETCH_CHARACTERS, FETCH_CHARACTERS_LOADING, fetchCharacters } from './characterActions';

jest.mock('../services/airbenderApi.js', () => ({
  getCharacters: () => Promise.resolve([])
}));

describe('Character actions', () => {
  it('it dispatches loading action and fetching action', () => {
    const thunk = fetchCharacters();
    const dispatch = jest.fn();

    return thunk(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_CHARACTERS_LOADING
        });

        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_CHARACTERS,
          payload: []
        });
      });
  });
});
