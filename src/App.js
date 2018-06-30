import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT_COUNT': return { count: state.count + 1}
    case 'DECREMENT_COUNT': return { count: state.count - 1}
    default: return state
  }
}

const store  = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter />
      </div>
      </Provider>
    );
  }
}

export default App;
