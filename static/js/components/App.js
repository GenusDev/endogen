 import React, { Component } from 'react';
import Input from "./input/input-container";
import Display from "./display/display-container";
import Prompt from "./prompt/prompt-container";
import Divider from "./divider/divider.jsx";
import './App.css';
import 'semantic-ui-css/semantic.min.css'



class App extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Display/>
        <div className="promptInputContainer">
          <Prompt />
          <Divider/>
          <Input/>
        </div>
      </div>
    );
  }
}

export default App;
