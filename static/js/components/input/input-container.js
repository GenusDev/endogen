import { connect } from 'react-redux';
import Input from './input';
import {shiftToNextSequence} from '../../actions/sequence-actions';
import {shiftToWriting} from '../../actions/writingState-actions';

function mapStateToProps (state){

  return {
    text: state.text,
    sequence: state.sequence,
    isWriting: state.isWriting
  };
}


function mapDispatchToProps (dispatch){

  return {
    shiftToNextSequence: (nextsequence) => dispatch(shiftToNextSequence(nextsequence)),
    shiftToWriting: (writingState) => dispatch(shiftToWriting(writingState)),
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(Input);
