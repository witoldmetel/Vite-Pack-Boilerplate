import React, { Component } from 'react';

import { Particle } from '../Particle/Particle';

import './ShowCase.scss';

export class ShowCase extends Component {
  render() {
    return (
      <div className="showcase">
        <div className="particles-container">
          <Particle />
        </div>
        <div className="content">
          <h1>React + TypeScript + Parcel</h1>
          <h3>Simple Boilerplate</h3>
          <a href="#about" className="btn">
            Read More
          </a>
        </div>
      </div>
    );
  }
}
