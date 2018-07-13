import React, {Component} from "react";
import { Dropdown } from "semantic-ui-react"


class PromptInput extends Component {

  render(){
    const inputOptions  = this.props.text[0]["inputComp"]
    var optionsArray = [];
    for (const key in inputOptions) {
      var keyObject = {"text": key, "value": this.props.text[0]["inputComp"][key][state]}
      optionsArray.push(keyObject);
    }
    console.log(optionsArray);
    return (
      <div>
        <Dropdown fluid search selection options={optionsArray}/>
      </div>
    )
  }

}


export default PromptInput;
