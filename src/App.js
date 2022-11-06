import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react-v1'

//para el geo
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
//para el geo

import { Route } from 'react-router-dom';

Amplify.configure(awsconfig);//para el geo

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
        <a href="index.html">Redirect to Html page</a>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
