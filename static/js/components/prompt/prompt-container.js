import { connect } from 'react-redux';
import Prompt from './prompt';


function mapStateToProps (state){

  return {
    text: state.text,
    sequence: state.sequence,
    isWriting: state.isWriting
  };
}



export default connect(mapStateToProps)(Prompt);
