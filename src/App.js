import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react-v1'

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
        <Route path="index" render={() => {window.location.href="index.html"}} />

      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
