import React from 'react';
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

export default () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
  });
  return (
    <div>
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
          <Header />
          <Switch>
            <Route path="/auth" component={AuthApp} />
            <Route path="/" component={MarketingApp} />
          </Switch>
        </StylesProvider>
      </BrowserRouter>
    </div>
  );
};
