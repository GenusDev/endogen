import React, {Component} from "react";


class Input extends Component {

  render(){
    return (
      <div>
        <h3> text {this.props.text[0]["inputComp"][0]}  </h3>
      </div>
    )
  }

}


export default Input;
