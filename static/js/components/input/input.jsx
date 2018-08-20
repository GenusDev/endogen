import React, {Component} from "react";
import { Dropdown, Input } from "semantic-ui-react"
import {structureTextDataForDropDown, findDataBasedOnSequence } from '../../generalFunctions'
import {caretCreator} from "./carot.js";

class PromptInput extends Component {

  constructor(props){
    super(props)

    this.state = {
      initialOptionsArray: [
        {
          "text":""
        }
      ],
      displayOptionsArray: [
        {
          "text":""
        }
      ],
      currentTextValue: "",
      sequence: "",
      sequenceToChangeTo: this.props.sequence,
      divText : "",
      optionNumb: 0,
      placeholderText: ""
    }

    this.findDataBasedOnSequenceAndChangeState = this.findDataBasedOnSequenceAndChangeState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleListTextOnChange = this.handleListTextOnChange.bind(this);
  }


  findDataBasedOnSequenceAndChangeState(sequence){
    var dataToInput = findDataBasedOnSequence(sequence,this.props.text) //input text directly instead of argument
    var newOptionsWithValuesForDropdown = structureTextDataForDropDown(dataToInput)

    this.setState({
      initialOptionsArray: newOptionsWithValuesForDropdown,
      placeholderText: newOptionsWithValuesForDropdown[0].text
    })

  }


  componentDidMount(){

    this.findDataBasedOnSequenceAndChangeState(this.props.sequence)

    this.setState({
      displayOptionsArray: this.state.initialOptionsArray,
    });

  }


  async handleSubmit(e){
    console.log('trying to set state directly with Async simple')
    e.preventDefault()
    e.target.reset();


    await this.props.shiftToNextSequence(
      this.state.sequenceToChangeTo
    );

    this.findDataBasedOnSequenceAndChangeState(this.props.sequence)

    this.props.shiftToWriting(
      "notWriting"
    );

    this.setState({
      displayOptionsArray: this.state.initialOptionsArray,
      divText: "",
      optionNumb: this.state.initialOptionsArray.length
    });
  }



  handleListTextOnChange(e){
    var self = this
    var inputText = e.target.value
    var options = this.state.initialOptionsArray

    if (inputText.length > 0 && this.state.optionNumb == 1) {
      singleRequestMode();
    }

    else if (inputText == ""){
      defaultState();
    }
    else if(inputText.length == 1) {
      whatToDoInMenuMode();
    }


    function whatToDoInMenuMode() {
      self.setState({
        displayOptionsArray: options
      });

      for (var eachOption in options) {
        if(inputText == options[eachOption].text[2] ) {
            self.setState({
              displayOptionsArray: [options[eachOption]],
              divText: options[eachOption].text,
              sequenceToChangeTo: options[eachOption].value
            });
        }

      }
    }

    function defaultState () {
      self.props.shiftToWriting(
        "notWriting"
      );
      self.setState({
        displayOptionsArray: options,
        divText: ""
      });
    }

    function singleRequestMode () {
      self.props.shiftToWriting(
        "isWriting"
      );
      self.setState(
        {
          displayOptionsArray: options,
          sequenceToChangeTo: options[0].value
        }
      )
    }

  }


  render(){

    caretCreator();

    return (
      <div className="inputContainer">
        <div className="FormDivContainer">
          <div className="FormDiv">
            <form onSubmit={this.handleSubmit} method='POST' action='/'>
                <input id="inputData" name="inputData" type="text" onChange={(e) => this.handleListTextOnChange(e)}
                ref={input => input && input.focus()}
                placeholder={"          " + this.state.placeholderText } />
            </form>
          </div>
          <div className="autoCompDiv"> <h1 className="autoCompText">{this.state.divText}</h1></div>
        </div>
        <div className="listDiv">
          <ul className="userChoices">
            {this.state.displayOptionsArray.slice(1).map(option => (
              <li value={option.value} id={option.text[2]} key={option.text}>{option.text}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

}


export default PromptInput;
