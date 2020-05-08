import React, { Component } from 'react';

import { GitHubIcon, LinkedinIcon } from '../../assets';

import './Aboat.scss';

export class Aboat extends Component {
  render() {
    return (
      <div id="about">
        <div className="about-section">
          <h1>About</h1>
          <p>This is a minimal boilerplate example using React, TypeScript and Parcel along with Sass support</p>
        </div>
        <div className="section section-grid">
          <div className="rellax" data-rellax-speed="1" data-rellax-xs-speed="3">
            <i className="fas fa-video fa-3x secondary-text"></i>
            <h2>
              Watch<span className="secondary-text dot">.</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et dicta consectetur incidunt omnis nam
              quis quidem nisi ipsa deserunt.
            </p>
          </div>
          <div className="rellax" data-rellax-speed="4" data-rellax-xs-speed="3">
            <i className="fas fa-users fa-3x secondary-text"></i>
            <h2>
              Share<span className="secondary-text dot">.</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et dicta consectetur incidunt omnis nam
              quis quidem nisi ipsa deserunt.
            </p>
          </div>
          <div className="rellax" data-rellax-speed="7" data-rellax-xs-speed="3">
            <i className="fas fa-book fa-3x secondary-text"></i>
            <h2>
              Learn<span className="secondary-text dot">.</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et dicta consectetur incidunt omnis nam
              quis quidem nisi ipsa deserunt.
            </p>
          </div>
        </div>
        <div className="social-section">
          <h1>Follow Me On Social Media</h1>
          <a href="https://github.com/witoldmetel" target="_blank">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/witoldmetel" target="_blank">
            <LinkedinIcon />
          </a>
        </div>
      </div>
    );
  }
}
