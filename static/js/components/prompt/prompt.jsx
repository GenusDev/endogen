import React, {Component} from "react";


class Prompt extends Component {

  render(){
    return (
      <div>
        <h3> {this.props.text[0]["promptComp"]}</h3>
      </div>
    )
  }

}


export default Prompt;
