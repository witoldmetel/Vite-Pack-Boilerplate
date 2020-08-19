import React, { Component } from 'react';
import * as firebase from 'firebase/app';

import { Aboat, ShowCase } from './index';
import firebaseConfig from '../config/firebase';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <React.Fragment>
        <ShowCase />
        {/* <Aboat /> */}
      </React.Fragment>
    );
  }
}

export default App;
