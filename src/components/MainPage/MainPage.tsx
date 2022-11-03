import { GitHubIcon, LinkedinIcon } from '../../assets';

export function MainPage() {
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
        <a
          href="https://reactjs.org/docs/getting-started.html"
          target="_blank"
          className="logo react-logo "
          rel="noreferrer"
        >
          logo
        </a>

        <div className="content">
          <div>
            <h2 className="secondary-text">About</h2>
            <p>
              This is a minimal boilerplate using React and TypeScript along with Sass support. It&lsquo;s also possible
              to config firebase and use Tailwind low-level utility classes. Good for small projects and prototyping.
            </p>
          </div>
          <div>
            <h2 className="secondary-text">Questions</h2>
            <p>
              In case of issues and questions, feel free to add the question into{' '}
              <a href="https://github.com/witoldmetel/TS-Parcel-Boilerplate/issues" target="_blank" rel="noreferrer">
                Issues
              </a>{' '}
              page or write me directly on GitHub
            </p>
          </div>
        </div>
      </section>

      <section className="section section-grid">
        <div className="lax" data-lax-translate-y="0 0, vh -50">
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
        <div className="lax" data-lax-translate-y="0 0, vh -350">
          <i className="fas fa-book fa-3x secondary-text"></i>
          <h2>
            Parcel<span className="secondary-text dot">.</span>
          </h2>
          <p>Parcel is a blazing fast, zero configuration web application bundler</p>
        </div>
      </section>

      <footer className="footer">
        <div className="icons">
          <a href="https://github.com/witoldmetel" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/witoldmetel" target="_blank" rel="noreferrer">
            <LinkedinIcon />
          </a>
        </div>
        <p className="info-text">
          Effect created thanks to{' '}
          <a href="https://github.com/alexfoxy/lax.js" target="_blank" rel="noreferrer">
            lax.js
          </a>
        </p>
      </footer>
    </div>
  );
}
