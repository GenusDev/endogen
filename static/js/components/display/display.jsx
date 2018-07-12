import React, {Component} from "react";


class Display extends Component {


  render(){
    return (

      <div>
        <h1> {this.props.text[0]["displayComp"]}  </h1>
        <h3> investment co-op </h3>
      </div>
    )
  }

}

export default Display;
