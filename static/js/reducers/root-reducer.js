import { combineReducers } from 'redux';
import textReducer from './reducer-textStructure';
import sequenceReducer from './reducer-sequence';
import isWritingReducer from './reducer-isWriting';

const rootReducer = combineReducers({
  text: textReducer,
  sequence: sequenceReducer,
  isWriting: isWritingReducer,
});

export default rootReducer;
