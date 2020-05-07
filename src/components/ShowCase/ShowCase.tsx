import React, { Component } from 'react';
import p5 from 'p5';

import './ShowCase.scss';

export class ShowCase extends Component {
  private particlesRef: React.RefObject<HTMLInputElement>;

  public constructor(props: any) {
    super(props);

    this.particlesRef = React.createRef();
  }

  public componentDidMount() {
    const node = this.particlesRef.current;

    new p5(this.sketch, node as HTMLInputElement);
  }

  private sketch = (sketch: p5) => {
    const x = 100;
    const y = 100;

    sketch.setup = () => {
      sketch.createCanvas(200, 200);
    };

    sketch.draw = () => {
      sketch.background(0);
      sketch.fill(255);
      sketch.rect(x, y, 50, 50);
    };
  };

  render() {
    return (
      <div className="showcase">
        <div className="particles-container" ref={this.particlesRef}></div>
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
