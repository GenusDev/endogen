import React, {Component} from "react";
import {findDataBasedOnSequence} from '../../generalFunctions'
import  * as displayComponents from './displayComponents/index.js';  // figure out a way to only import the modules as needed to improve performance

class Display extends Component {

  constructor(props){
    super(props)

    this.findDisplayTextBasedOnSequence = this.findDisplayTextBasedOnSequence.bind(this);
    this.figureOutWhatToDisplay = this.figureOutWhatToDisplay.bind(this);
  }


  findDisplayTextBasedOnSequence(sequence){
    var dataToInput = findDataBasedOnSequence(sequence,this.props.text) //input text directly instead of argument
    var displayText = dataToInput['displayComp']
    return displayText
  }


  figureOutWhatToDisplay(){
    var displayDescription = this.findDisplayTextBasedOnSequence(this.props.sequence)

    var displayComponent = displayComponents[displayDescription]
    return displayComponent

  }




  render(){
    // const currentSequence = this.props.sequence
    // const newOptionsWithValuesForDisplay = findDataBasedOnSequence(currentSequence,this.props.text)
    // debugger
    return (
      <div>
        {this.figureOutWhatToDisplay()}
      </div>
    )
  }

}


export default Display;



// try direct way, try factory way and then try setting components to global and using window
