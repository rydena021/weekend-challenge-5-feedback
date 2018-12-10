import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux'

const feedback = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_NAME':
      return {
        ...state,
        name: action.payload
      };
    case 'ADD_BREWERY':
      return {
        ...state,
        brewery: action.payload
      };
    case 'ADD_STYLE':
      return {
        ...state,
        style: action.payload
      };
    case 'ADD_COMMENTS':
      return {
        ...state,
        comments: action.payload
      };
    case 'CLEAR_FEEDBACK':
      return {};
    default:
      return state;
  }
}

const storeInstance = createStore(
  combineReducers({
    feedback
  }),
  applyMiddleware(logger)
);

export default storeInstance;
