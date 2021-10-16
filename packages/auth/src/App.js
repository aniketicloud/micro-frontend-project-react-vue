import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

// import Landing from './components/Landing';
// import Pricing from './components/Pricing';
import Signin from './components/Signin';
import Signup from './components/Signup';

export default ({ history }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
  });
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin" component={Signin}/>
            <Route path="/auth/signup" component={Signup}/>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};