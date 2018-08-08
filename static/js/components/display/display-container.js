import { connect } from 'react-redux';
import Display from './display'


function mapStateToProps (state){

  return {
    text: state.text,
    sequence: state.sequence
  };
}


export default connect(mapStateToProps)(Display);
