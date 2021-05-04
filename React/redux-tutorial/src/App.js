import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { startAction } from './actions/startAction';
import { stopAction } from './actions/stopAction';


class App extends Component {
  render() {
    console.log("props:", this.props)
    const { rotating, stopAction, startAction } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo ${rotating ? "" : "App-logo-paused"}`} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
          <button onClick={rotating ? stopAction : startAction}>{rotating ? "STOP" : "START"}</button>
        </header>
      </div>
    )
  }
}
/**
 mapStateToProps: this is used to retrieve the store state
 mapDispatchToProps (mapActionToProps): this is used to retrieve the actions and dispatch them to store
 */
const mapStateToProps = (state) => {
  console.log("state---:", state);
  return { ...state }
}

const mapDispatchToProps = (dispatch) => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)    //IIMF (self calling function)