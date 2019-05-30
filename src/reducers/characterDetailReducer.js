import { FETCH_CHARACTER, FETCH_CHARACTER_LOADING } from '../actions/characterDetailActions';

const initialState = {
  loading: true,
  character: null,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTER_LOADING:
      return { ...state, loading: true };
    case FETCH_CHARACTER:
      return { ...initialState, error: null, loading: false, character: action.payload };
    default: 
      return state;
  }
}
