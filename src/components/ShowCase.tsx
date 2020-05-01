import React, { Component } from 'react';

import intro from '../assets/intro.mp4';

import './ShowCase.scss';

export class ShowCase extends Component {
  render() {
    return (
      <div className="showcase">
        <div className="video-container">
          <video autoPlay muted loop>
            <source src={intro} type="video/mp4" />
          </video>
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
