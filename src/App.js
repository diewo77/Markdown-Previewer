import React, {Component} from 'react';
import Preview from './components/Preview'
import logo from './logo.svg';
import './App.css';
import Editor from "./components/Editor";
import {Provider} from "react-redux";
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Editor/>
          <Preview/>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome to this</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;
