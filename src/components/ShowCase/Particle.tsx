import React, { Component } from 'react';
import p5 from 'p5';

import './Particle.scss';

export class Particle extends Component {
  private particlesRef: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props);

    this.particlesRef = React.createRef();
  }

  componentDidMount() {
    new p5((particle) => {
      // Init playground for P5 circles
      particle.setup = () => {
        particle.createCanvas(window.innerWidth, window.innerHeight).parent(this.particlesRef.current);
      };

      // Circles position
      const position = particle.createVector(
        particle.random(0, window.innerWidth),
        particle.random(0, window.innerHeight),
      );

      // Circles size
      const size = 10;

      particle.draw = () => {
        // Draw particle
        particle.noStroke();
        particle.background(55, 100, 145);
        particle.fill('rgba(255,255,255,0.5');
        particle.circle(position.x, position.y, size);

        // Circles velocity
        const velocity = particle.createVector(particle.random(-2, 2), particle.random(-2, 2));

        position.x += velocity.x;
        position.y += velocity.y;

        // Detect edges
        if (position.x < 0 || position.x > particle.width) {
          velocity.x *= -1;
        }

        if (position.y < 0 || position.y > particle.height) {
          velocity.y *= -1;
        }
      };
    });
  }

  render() {
    return <div className="particles-container" ref={this.particlesRef}></div>;
  }
}
