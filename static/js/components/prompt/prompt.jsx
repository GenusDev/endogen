import React, {Component} from "react";
import {findDataBasedOnSequence} from '../../generalFunctions'

class Prompt extends Component {

  constructor(props){
    super(props)

    this.findPromptTextBasedOnSequence = this.findPromptTextBasedOnSequence.bind(this);
  }


  findPromptTextBasedOnSequence(sequence){
    var dataToInput = findDataBasedOnSequence(sequence,this.props.text) //input text directly instead of argument
    var promptText = dataToInput['promptComp']
    return promptText
  }


  render(){
    return (
      <div>
        <h3> {this.findPromptTextBasedOnSequence(this.props.sequence)}</h3>
      </div>
    )
  }

}


export default Prompt;
