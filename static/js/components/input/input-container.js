import { connect } from 'react-redux';
import PromptInput from './input'


function mapStateToProps (state){

  return {
    text: state.text
  };
}


export default connect(mapStateToProps)(PromptInput);
