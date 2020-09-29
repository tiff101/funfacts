import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import history from './Components/AppHistory';
import LandingPage from './Components/LandingPage';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header> */}
      <Router history={history}>
        <Navbar>
          <Navbar.Brand>THE PAGE</Navbar.Brand>
          <Navbar.Collapse>
          <Navbar.Text>Option 1</Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        
        <Switch>
          <Route exact path='/' component={LandingPage} />
        </Switch>
        
        </Router>
    </div>
  );
}

export default App;
