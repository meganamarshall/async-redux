import reducer from './characterDetailReducer';
import { FETCH_CHARACTER, FETCH_CHARACTER_LOADING, FETCH_CHARACTER_ERROR } from '../actions/characterDetailActions';
import { exportAllDeclaration } from '@babel/types';

describe('character detail reducer', () => {
  it('handles the fetch character action', () => {
    const initialState = {
      loading: false,
      character: {},
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_CHARACTER,
      payload: { name: 'megan', affiliation: 'acl' }
    });

    expect(newState).toEqual({
      loading: false,
      character: { name: 'megan', affiliation: 'acl' },
      error: null
    });
  });
});
