import React from 'react';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

export default () => {
  return (
    <div>
      <BrowserRouter>
        <h1>Hi Hello from Container</h1>
        <Header />
        <hr />
        <MarketingApp />
      </BrowserRouter>
    </div>
  );
};
