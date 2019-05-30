import reducer from './characterDetailReducer';
import { FETCH_CHARACTER, FETCH_CHARACTER_LOADING, FETCH_CHARACTER_ERROR } from '../actions/characterDetailActions';

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

  it('handles the fetch character loading action', () => {
    const initialState = {
      loading: false,
      character: {},
      error: null
    };
    const newState = reducer(initialState, {
      type: FETCH_CHARACTER_LOADING
    });
    expect(newState).toEqual({
      loading: true,
      character: {},
      error: null
    });
  });

  it('handles the fetch error action', () => {
    const initialState = {
      loading: false,
      character: {},
      error: null
    };
    const newState = reducer(initialState, {
      type: FETCH_CHARACTER_ERROR,
      payload: 'error 404'
    });
    expect(newState).toEqual({
      loading: false,
      character: {},
      error: 'error 404'
    });
  });
});
