import { FETCH_CHARACTER, FETCH_CHARACTER_ERROR, FETCH_CHARACTER_LOADING } from '../actions/characterDetailActions';

const initialState = {
  loading: false,
  character: {},
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTER_LOADING:
      return { ...state, loading: true };
    case FETCH_CHARACTER:
      return { ...state, error: null, loading: false, character: action.payload };
    case FETCH_CHARACTER_ERROR:
      return { ...state, error: action.payload, loading: false };
    default: 
      return state;
  }
}
