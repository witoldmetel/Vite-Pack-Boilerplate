import React, { Component } from 'react';

import Pexels from './Pexels.mp4';

import './App.scss';

class App extends Component {
	render() {
		return (
			<>
				<section className="showcase">
					<div className="video-container">
						<video autoPlay muted loop>
							<source src={Pexels} type="video/mp4" />
						</video>
					</div>
					<div className="content">
						<h1>React + TypeScript + Parcel</h1>
						<h3>Simple Boilerplate</h3>
						<a href="#about" className="btn">
							Read More
						</a>
					</div>
				</section>

				<section id="about">
					<h1>About</h1>
					<p>
						This is a minimal boilerplate example using React, TypeScript and
						Parcel along with Sass support. It also includes UIkit.
					</p>

					<h2>Follow Me On Social Media</h2>

					<div className="social">
						<a
							href="https://github.com/witoldmetel"
							uk-icon="github"
							target="_blank"
						></a>
						<a
							href="https://www.linkedin.com/in/witoldmetel"
							uk-icon="linkedin"
							target="_blank"
						></a>
					</div>
				</section>
			</>
		);
	}
}

export default App;
