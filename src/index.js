import {
  createStore,
  applyMiddleware
} from 'redux';

// const logger = store => next => action


function reducer(state = {}, action) {
  switch(action.type) {
    case 'WHAT':
      return 'whatever';
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  applyMiddleware()
)
