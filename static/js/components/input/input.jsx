import React, {Component} from "react";
import { Dropdown } from "semantic-ui-react"


class PromptInput extends Component {

  // componentWillMount(nextProps) {
  //   sequence = this.props.sequence
  // }

  constructor(props){
    super(props)

    this.state = {
      optionsArray: [],
      inputOptions: {},
      currentValue: [],
      sequence: ""
    }

    this.findDataBasedOnSequence = this.findDataBasedOnSequence.bind(this);
    //this.updateSequence = this.updateSequence.bind(this);
    this.grabText = this.grabText.bind(this);
    this.appStringify = this.appStringify.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  appStringify(array) {
    var newString= "";
    for (const number in array) {
      newString = newString.concat(newString, array[number].toString());
    }

    return newString
  }


  findDataBasedOnSequence(sequence){
    //console.log(sequence)
    const allTextOptions = this.props.text;
    for (const eachDisplayElementObject in allTextOptions){
      if (this.appStringify(allTextOptions[eachDisplayElementObject]["sequence"]) === this.appStringify(sequence)){
            console.log(eachDisplayElementObject)
            console.log("how many times does the for looprun? ")
        const dataToInput = allTextOptions[eachDisplayElementObject]
        const newOptionsWithValuesForDropdown = this.grabText(dataToInput)
        this.setState({inputOptions:dataToInput,
                       optionsArray: newOptionsWithValuesForDropdown
                      })
      }
    }
  }

  grabText(dataToInput){
    var optionsArrayToPutInState = []
    for (const key in dataToInput["inputComp"]) {
      console.log("key :"+key)
      var keyObject = {"text": key, "value": dataToInput["inputComp"][key]["nextSequence"]}
      optionsArrayToPutInState.push(keyObject)
      console.log(optionsArrayToPutInState)
    }
      return optionsArrayToPutInState
  }



  componentDidMount(){
    this.findDataBasedOnSequence(this.props.sequence)
  }

  //
  // static getDerivedStateFromProps(props, state){
  //   console.log("state was derived from props")
  //   if (state.sequence !== props.sequence){
  //     return ({sequence: props.sequence})
  //   }
  // }



  handleChange(e,{value}){
    // console.log(value)
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

    this.findDataBasedOnSequence(this.props.sequence)

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
