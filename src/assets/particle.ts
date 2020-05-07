import p5 from 'p5';

export default function particle(particle: p5) {
  particle.setup = () => {
    particle.createCanvas(window.innerWidth, window.innerHeight);
  };

  // Circles position
  const position = particle.createVector(particle.random(0, window.innerWidth), particle.random(0, window.innerHeight));

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
}
