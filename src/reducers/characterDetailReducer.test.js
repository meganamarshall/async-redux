import reducer from './characterDetailReducer';
import { FETCH_CHARACTER, FETCH_CHARACTER_LOADING } from '../actions/characterDetailActions';

describe('character detail reducer', () => {
  it('handles the fetch character action', () => {
    const initialState = {
      loading: false,
      character: {}
    };

    const newState = reducer(initialState, {
      type: FETCH_CHARACTER,
      payload: { name: 'megan', affiliation: 'acl' }
    });

    expect(newState).toEqual({
      loading: false,
      character: { name: 'megan', affiliation: 'acl' }
    });
  });

  it('handles the fetch character loading action', () => {
    const initialState = {
      loading: false,
      character: {}
    };
    const newState = reducer(initialState, {
      type: FETCH_CHARACTER_LOADING
    });
    expect(newState).toEqual({
      loading: true,
      character: {}
    });
  });
});
