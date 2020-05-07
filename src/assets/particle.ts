import p5 from 'p5';

export default function particle(particle: p5) {
  class Particle {
    private position: { x: number; y: number; add: (velocity: any) => void };
    private size: number;
    private velocity: { x: number; y: number };

    constructor() {
      this.position = particle.createVector(particle.random(0, particle.width), particle.random(0, particle.height));
      this.size = particle.random(10, 50);
      this.velocity = particle.createVector(particle.random(-2, 2), particle.random(-2, 2));
    }

    move() {
      this.position.add(this.velocity);
      this.detectEdges();
    }

    display() {
      particle.noStroke();
      particle.fill('rgba(255,255,255,0.5');
      particle.circle(this.position.x, this.position.y, this.size);
      // particle.ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
    }

    detectEdges() {
      if (this.position.x < 0 || this.position.x > particle.width) {
        this.velocity.x *= -1;
      }

      if (this.position.y < 0 || this.position.y > particle.height) {
        this.velocity.y *= -1;
      }
    }
  }

  const particles: Particle[] = [];

  particle.setup = () => {
    particle.createCanvas(window.innerWidth, window.innerHeight);

    const particlesLength = Math.floor(window.innerWidth / 10);

    for (let i = 0; i < particlesLength; i++) {
      particles.push(new Particle());
    }
  };

  particle.draw = () => {
    particle.background(55, 100, 145);

    for (let i = 0; i < particles.length; i++) {
      particles[i].move();
      particles[i].display();
    }
  };
}
