import { connect } from 'react-redux';
import PromptInput from './input';
import {shiftToNextSequence} from '../../actions/sequence-actions';


function mapStateToProps (state){

  return {
    text: state.text,
    sequence: state.sequence
  };
}


function mapDispatchToProps (dispatch){

  return {
    shiftToNextSequence: (nextsequence) => dispatch(shiftToNextSequence(nextsequence))
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(PromptInput);
