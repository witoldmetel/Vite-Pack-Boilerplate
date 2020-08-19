/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';

import { GitHubIcon, LinkedinIcon } from '../../assets';

import './ShowCase.scss';

export class ShowCase extends Component {
  render() {
    return (
      <div className="showcase">
        <section className="section section-top">
          <div className="content rellax" data-rellax-speed="5">
            <h1>React + TypeScript + Parcel</h1>
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </section>

        <section className="section section-stream">
          <img
            className="play rellax"
            src="https://i.ibb.co/TvdbMhQ/play-button.png"
            alt=""
            data-rellax-speed="-1"
            data-rellax-xs-speed="-5"
          />
          <div className="content rellax" data-rellax-speed="10">
            <div>
              <h2 className="secondary-text">About</h2>
              <p>
                This is a minimal boilerplate using React and TypeScript along with Sass support. It&lsquo;s also
                possible to config firebase. Good for small projects and prototyping.
              </p>
            </div>
            <div>
              <h2 className="secondary-text">Questions</h2>
              <p>
                In case of issues and questions, feel free to add the question in
                <a href="https://github.com/witoldmetel/TS-Parcel-Boilerplate/issues" target="_blank">
                  Issues
                </a>
                page or write me directly on GitHub
              </p>
            </div>
          </div>
        </section>

        <section className="section section-grid">
          <div className="rellax" data-rellax-speed="1" data-rellax-xs-speed="3">
            <i className="fas fa-video fa-3x secondary-text"></i>
            <h2>
              React<span className="secondary-text dot">.</span>
            </h2>
            <p>React is a library for building composable user interfaces.</p>
          </div>
          <div className="rellax" data-rellax-speed="4" data-rellax-xs-speed="3">
            <i className="fas fa-users fa-3x secondary-text"></i>
            <h2>
              TypeScript<span className="secondary-text dot">.</span>
            </h2>
            <p>TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.</p>
          </div>
          <div className="rellax" data-rellax-speed="7" data-rellax-xs-speed="3">
            <i className="fas fa-book fa-3x secondary-text"></i>
            <h2>
              Parcel<span className="secondary-text dot">.</span>
            </h2>
            <p>Parcel is a blazing fast, zero configuration web application bundler</p>
          </div>
        </section>

        <footer className="footer" />
        <ul>
          <li>
            <a href="https://github.com/witoldmetel" target="_blank">
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/witoldmetel" target="_blank">
              <LinkedinIcon />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
