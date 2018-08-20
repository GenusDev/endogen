import React, {Component} from "react";
import {findDataBasedOnSequence} from '../../generalFunctions'

class Prompt extends Component {

  constructor(props){
    super(props)
    this.state = {
      promptText: "",
      inputText: ""
    }


  }


  // findPromptTextBasedOnSequence(sequence){
  //   var dataToInput = findDataBasedOnSequence(sequence,this.props.text) //input text directly instead of argument
  //   var promptText = dataToInput['promptComp']
  //   var inputText = Object.keys(dataToInput['inputComp'])[0]
  //
  //   return promptText
  // }

  componentDidMount(){

    this.setState({
      promptText: findDataBasedOnSequence(this.props.sequence,this.props.text)['promptComp']
      }
    )

  }

  componentDidUpdate(prevProps){
    var dataToInput = findDataBasedOnSequence(this.props.sequence,this.props.text)

    if (prevProps.sequence !== this.props.sequence) {
      this.setState({
        promptText: findDataBasedOnSequence(this.props.sequence,this.props.text)['promptComp']
        }
      )
    }

    if (this.props.isWriting === "isWriting" && prevProps.isWriting !== "isWriting"){
        this.setState({
          promptText: Object.keys(dataToInput['inputComp'])[0]
          }
        )
    }
    else if(this.props.isWriting === "notWriting" && prevProps.isWriting !== "notWriting"){
      this.setState({
        promptText: findDataBasedOnSequence(this.props.sequence,this.props.text)['promptComp']
      })

    }

  }




  render(){

    return (
      <div className='promptText'>
        <h3> { this.state.promptText }</h3>
      </div>
    )
  }

}


export default Prompt;
