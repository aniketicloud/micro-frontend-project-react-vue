import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import { createBrowserHistory } from 'history';

import Progress from './components/Progress';
import Header from './components/Header';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

// ! accsing history from <BrowserHistory /> is giving so many challenges, specifically for this component
// ? read how <BrowserHistory / works and how <Router/> creates history
// Thats' why I am creating history manually, bringing that into generic <Router/>
// So, This is more related to 'react-router-dom', and nothing to micro frontend
const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  // with useEffect, whenever second argument changes i.e. 'isSignedIn' changes,
  // first argument i.e. arrow function will be run
  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);

  return (
    <div>
      <Router history={history}>
        <StylesProvider generateClassName={generateClassName}>
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/dashboard">
                {!isSignedIn && <Redirect to="/" />}
                <DashboardLazy />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </StylesProvider>
      </Router>
    </div>
  );
};
