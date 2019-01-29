import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import './App.css';
import Home from './components/home';
import About from './components/about';
import Topics from './components/topics';
import NoMatch from './components/no-match';

class App extends Component {


  render() {

    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/viejo">Viejo</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Redirect from="/viejo" to="/topics" />
            <Route path="/topics" component={Topics} />
            <Route component={NoMatch} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;