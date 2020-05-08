import React, { Component } from 'react';

import { ParticleComponent } from '../ParticleComponent/ParticleComponent';

import './ShowCase.scss';

export class ShowCase extends Component {
  render() {
    return (
      <div className="showcase">
        <div className="particles-container">
          <ParticleComponent />
        </div>
        <div className="content">
          <h1>React + TypeScript + Parcel</h1>
          <h2>Simple Boilerplate</h2>
          <a href="#about" className="btn">
            <p>Check it out!</p>
          </a>
        </div>
      </div>
    );
  }
}
