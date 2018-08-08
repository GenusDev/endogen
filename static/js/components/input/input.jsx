import React, {Component} from "react";
import { Dropdown } from "semantic-ui-react"
import {appStringify, structureTextDataForDropDown, findDataBasedOnSequence } from '../../generalFunctions'

class PromptInput extends Component {

  constructor(props){
    super(props)

    this.state = {
      optionsArray: [],
      currentValue: [],
      sequence: ""
    }

    this.findDataBasedOnSequenceAndChangeState = this.findDataBasedOnSequenceAndChangeState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  findDataBasedOnSequenceAndChangeState(sequence){
    var dataToInput = findDataBasedOnSequence(sequence,this.props.text) //input text directly instead of argument
    var newOptionsWithValuesForDropdown = structureTextDataForDropDown(dataToInput)
    this.setState({
      optionsArray: newOptionsWithValuesForDropdown
    })
  }



  componentDidMount(){
    console.log("has mounted")
    this.findDataBasedOnSequenceAndChangeState(this.props.sequence)
  }



  handleChange(e,{value}){
    this.setState({
      sequenceToChangeTo:value
    })

  }


  async handleSubmit(e){
    console.log('trying to set state directly with Async simple')
    e.preventDefault()
    await this.props.shiftToNextSequence(
      this.state.sequenceToChangeTo
    );

    this.findDataBasedOnSequenceAndChangeState(this.props.sequence)

  }


  render(){
    return (
      <form onSubmit={this.handleSubmit}>
          <Dropdown fluid search selection options={this.state.optionsArray} onChange={this.handleChange} />
          <input type="submit"></input>
      </form>
    )
  }

}


export default PromptInput;
