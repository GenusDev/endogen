import { connect } from 'react-redux';
import Display from './display'


function mapStateToProps (state){



  return {
    text: state.text,
    sequence: state.sequence,
    isWriting: state.isWriting
  };
}


export default connect(mapStateToProps)(Display);
