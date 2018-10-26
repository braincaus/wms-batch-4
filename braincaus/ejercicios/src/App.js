import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import Navigation from './components/navigation';
import LandingPage from './components/landing';
import SignUpPage from './components/signup';
import SignInPage from './components/signin';
import PasswordForgetPage from './components/passwordforget';
import HomePage from './components/home';
import AccountPage from './components/account';

import * as routes from './constants/routes';
import withAuthentication from './components/withAuthentication';

const App = () => (
    <Router>
        <div>
            <Navigation />

            <hr/>

            <Route exact path={routes.LANDING} component={LandingPage} />
            <Route exact path={routes.SIGN_UP} component={SignUpPage} />
            <Route exact path={routes.SIGN_IN} component={SignInPage} />
            <Route exact path={routes.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route exact path={routes.HOME} component={HomePage} />
            <Route exact path={routes.ACCOUNT} component={AccountPage} />
        </div>
    </Router>
);

export default withAuthentication(App);
