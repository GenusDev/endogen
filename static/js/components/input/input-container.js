import { connect } from 'react-redux';
import Input from './input'


function mapStateToProps (state){

  return {
    text: state.text
  };
}


export default connect(mapStateToProps)(Input);
