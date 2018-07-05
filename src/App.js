import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from "./components/Editor";
import Preview from './components/Preview'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Editor/>
        <Preview/>
      </div>
    );
  }
}

export default App;
