/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { useLax, useLaxElement } from 'use-lax';

import { GitHubIcon, LinkedinIcon } from '../../assets';

import './MainPage.scss';

export function MainPage() {
  useLax();

  const ref: React.MutableRefObject<any> = useLaxElement();

  const element = (
    <img
      className="play"
      src="https://i.ibb.co/TvdbMhQ/play-button.png"
      ref={ref}
      data-lax-preset="rightToLeft fadeIn"
      data-lax-opacity="0 1"
      data-lax-translate-x="vh 0"
    />
  );

  return (
    <div className="showcase">
      <section className="section section-top">
        <div className="content">
          <h1 className="title first">React + TypeScript + Parcel</h1>
          <h1 className="title second">Boilerplate</h1>
        </div>
        <div className="motto" />
      </section>

      <section className="section section-main">
        {element}
        <div className="content">
          <div>
            <h2 className="secondary-text">About</h2>
            <p>
              This is a minimal boilerplate using React and TypeScript along with Sass support. It&lsquo;s also possible
              to config firebase. Good for small projects and prototyping.
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
        <div>
          <i className="fas fa-video fa-3x secondary-text"></i>
          <h2>
            React<span className="secondary-text dot">.</span>
          </h2>
          <p>React is a library for building composable user interfaces.</p>
        </div>
        <div>
          <i className="fas fa-users fa-3x secondary-text"></i>
          <h2>
            TypeScript<span className="secondary-text dot">.</span>
          </h2>
          <p>TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.</p>
        </div>
        <div>
          <i className="fas fa-book fa-3x secondary-text"></i>
          <h2>
            Parcel<span className="secondary-text dot">.</span>
          </h2>
          <p>Parcel is a blazing fast, zero configuration web application bundler</p>
        </div>
      </section>

      <footer className="footer">
        <a href="https://github.com/witoldmetel" target="_blank">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/witoldmetel" target="_blank">
          <LinkedinIcon />
        </a>
      </footer>
    </div>
  );
}
