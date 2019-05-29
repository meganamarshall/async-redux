import {
  createStore,
  applyMiddleware
} from 'redux';

const logger = store => next => action => {
  console.log('before action', store.getState());
  next(action);
  console.log('after action', store.getState());
};


function reducer(state = {}, action) {
  switch(action.type) {
    case 'WHAT':
      return 'whatever this is the new state';
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

store.dispatch({
  type: 'WHAT'
});
