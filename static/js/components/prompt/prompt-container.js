import { connect } from 'react-redux';
import Prompt from './prompt'


function mapStateToProps (state){

  return {
    text: state.text
  };
}


export default connect(mapStateToProps)(Prompt);
