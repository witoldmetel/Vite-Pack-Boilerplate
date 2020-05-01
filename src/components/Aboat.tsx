import React, { Component } from 'react';

import './Aboat.scss';

export class Aboat extends Component {
  render() {
    return (
      <div id="about">
        <h1>About</h1>
        <p>
          This is a minimal boilerplate example using React, TypeScript and Parcel along with Sass support. It also
          includes UIkit.
        </p>
        <h2>Follow Me On Social Media</h2>
        <div className="social">
          <a href="https://github.com/witoldmetel" uk-icon="github" target="_blank"></a>
          <a href="https://www.linkedin.com/in/witoldmetel" uk-icon="linkedin" target="_blank"></a>
        </div>
      </div>
    );
  }
}
