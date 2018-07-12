import { combineReducers } from 'redux';
import textReducer from './reducer-textStructure';

const rootReducer = combineReducers({
  text: textReducer,
});

export default rootReducer;
