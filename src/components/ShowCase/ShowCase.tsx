import React, { Component } from 'react';

import './ShowCase.scss';

export class ShowCase extends Component {
  render() {
    return (
      <div className="showcase">
        <div className="content">
          <h1>React + TypeScript + Parcel</h1>
          <h2>Simple Boilerplate</h2>
          <a href="#about" className="btn">
            <p>CHECK IT OUT!</p>
          </a>
        </div>
      </div>
    );
  }
}
