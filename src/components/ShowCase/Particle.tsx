import React, { Component } from 'react';
import p5 from 'p5';

import './Particle.scss';

export class Particle extends Component {
  private particlesRef: React.RefObject<HTMLInputElement>;

  public constructor(props: any) {
    super(props);
    this.p5 = new p5();

    console.log(this.p5);

    this.position = this.p5.createVector(this.p5.random(this.p5.width), this.p5.random(this.p5.height));
  }

  // public componentDidMount() {
  //   const node = this.particlesRef.current;

  //   new p5(this.sketch, node as HTMLInputElement);
  // }

  // private sketch = (sketch: p5) => {
  //   // Init playground for P5 circles
  //   sketch.setup = () => {
  //     sketch.createCanvas(window.innerWidth, window.innerHeight);
  //   };

  //   // Circles position
  //   const position = sketch.createVector(sketch.random(sketch.width), sketch.random(sketch.height));

  //   // Circles size
  //   const size = 10;

  //   sketch.draw = () => {
  //     sketch.noStroke();
  //     sketch.fill('rgba(255,255,255,0.5');
  //     sketch.circle(position.x, position.y, size);
  //   };
  // };

  // ref={this.particlesRef}

  render() {
    return <div className="particles-container"></div>;
  }
}
