import merge from 'lodash/merge';
import NEXTSEQUENCE from '../actions/sequence-actions';


const sequenceReducer = (state="0",action) =>{
  Object.freeze(state);
  switch(action.type){
    case "NEXTSEQUENCE":
      const sequence = action.payload;
      console.log(action)
      return sequence
      // return merge({}, state, sequence);
    default:
      return state;
  }
};


export default sequenceReducer;
