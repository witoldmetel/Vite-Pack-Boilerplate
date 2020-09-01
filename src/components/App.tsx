import React, { Component } from 'react';
import * as firebase from 'firebase/app';

import { MainPage } from './MainPage/MainPage';
import firebaseConfig from '../config/firebase';

import './App.scss';

class App extends Component {
  public constructor(props) {
    super(props);

    firebase.initializeApp(firebaseConfig);
  }

  public render() {
    return <MainPage />;
  }
}

export default App;
