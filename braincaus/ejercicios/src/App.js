import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

import './App.css';

import * as routes from './constants/routes';

import HomePage from "./components/home";
import Navigation from "./components/navigation";
import LandingPage from "./components/landing";
import PasswordForgetPage from "./components/passwordforget";
import SignUpPage from "./components/signup";
import SignInPage from "./components/signin";
import AccountPage from "./components/account";

import { firebase } from './firebase';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
        };
    }

    componentDidMount() {
        firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? this.setState({ authUser })
                : this.setState({ authUser: null });
        });
    }

    render() {
      return (
        <Router>
          <div>
            <Navigation authUser={this.state.authUser} />

            <hr/>

              <Route
                exact path={routes.LANDING}
                component={LandingPage}
              />
              <Route
                exact path={routes.SIGN_UP}
                component={SignUpPage}
              />
              <Route
                exact path={routes.SIGN_IN}
                component={SignInPage}
              />
              <Route
                exact path={routes.PASSWORD_FORGET}
                component={PasswordForgetPage}
              />
              <Route
                exact path={routes.HOME}
                component={HomePage}
              />
              <Route
                exact path={routes.ACCOUNT}
                component={AccountPage}
              />
          </div>
        </Router>
      );
    }
}

export default App;
