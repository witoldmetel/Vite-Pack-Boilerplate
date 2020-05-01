import React, { Component } from 'react';

import { ShowCase } from './ShowCase';
import { Aboat } from './Aboat';

import './App.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ShowCase />
        <Aboat />
      </React.Fragment>
    );
  }
}

export default App;
