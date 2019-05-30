import { combineReducers } from 'redux';
import characters from './charactersReducers';
import characterDetail from './characterDetailReducer';

export default combineReducers({
  characters,
  characterDetail
});
