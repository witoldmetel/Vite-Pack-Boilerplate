import React, { Component } from 'react';

import { Aboat, ShowCase } from './index';

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
