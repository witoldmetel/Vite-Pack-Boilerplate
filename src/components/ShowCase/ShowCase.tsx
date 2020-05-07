import React, { Component } from 'react';
import p5 from 'p5';

import particle from '../../assets/particle';

import './ShowCase.scss';

export class ShowCase extends Component {
  private particleRef: React.RefObject<HTMLInputElement>;

  public constructor(props: any) {
    super(props);

    this.particleRef = React.createRef();
  }

  public componentDidMount() {
    new p5(particle, this.particleRef.current as HTMLInputElement);
  }

  render() {
    return (
      <div className="showcase">
        <div className="particles-container">
          <div className="particle" ref={this.particleRef}></div>
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
