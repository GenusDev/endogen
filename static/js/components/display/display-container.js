import { connect } from 'react-redux';
import Display from './display'


function mapStateToProps (state){

  return {
    text: state.text
  };
}


export default connect(mapStateToProps)(Display);
