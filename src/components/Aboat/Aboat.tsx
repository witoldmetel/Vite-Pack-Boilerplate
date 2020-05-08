import React, { Component } from 'react';

import { GitHubIcon, LinkedinIcon } from '../../assets';

import './Aboat.scss';

export class Aboat extends Component {
  render() {
    return (
      <div id="about">
        <h1>About</h1>
        <p>This is a minimal boilerplate example using React, TypeScript and Parcel along with Sass support</p>
        <h2>Follow Me On Social Media</h2>
        <div className="social">
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
