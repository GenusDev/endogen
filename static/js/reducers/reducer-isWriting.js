import merge from 'lodash/merge';
import ISWRITING from '../actions/writingState-actions';


const isWritingReducer = (state='notWriting',action) =>{
  Object.freeze(state);
  switch(action.type){
    case "ISWRITING":
      
      const writingState = action.payload;
      console.log(action)
      return writingState
      // return merge({}, state, sequence);
    default:
      return state;
  }
};


export default isWritingReducer;
