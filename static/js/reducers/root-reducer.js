import { combineReducers } from 'redux';
import textReducer from './reducer-textStructure';
import sequenceReducer from './reducer-sequence';


const rootReducer = combineReducers({
  text: textReducer,
  sequence: sequenceReducer
});

export default rootReducer;
