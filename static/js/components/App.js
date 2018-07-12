import React, { Component } from 'react';
import Input from "./input/input-container"
import Display from "./display/display-container"
import Prompt from "./prompt/prompt-container"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display/>
        <Prompt/>
        <Input/>
      </div>
    );
  }
}

export default App;
