import { FETCH_CHARACTERS, FETCH_CHARACTERS_ERROR, FETCH_CHARACTERS_LOADING } from '../actions/characterActions';

const initialState = {
  loading: false,
  list: [],
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTERS_LOADING:
      return { ...state, loading: true };
    case FETCH_CHARACTERS:
      return { ...state, error: null, loading: false, list: action.payload };
    case FETCH_CHARACTERS_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
