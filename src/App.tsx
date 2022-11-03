import { useState } from 'react';

import { Link } from 'components';

import postcssLogo from './assets/svgs/postcss.svg';
import reactLogo from './assets/svgs/react.svg';
import typescriptLogo from './assets/svgs/typescript.svg';
import viteLogo from './assets/svgs/vite.svg';
import vitestLogo from './assets/svgs/vitest.svg';

import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <div>
        <Link page="https://vitejs.dev">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Link>
        <Link page="https://reactjs.org">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
        <Link page="https://www.typescriptlang.org/docs/">
          <img src={typescriptLogo} className="logo typescript" alt="Typescript logo" />
        </Link>
      </div>
      <h1>Vite + React + Typescript</h1>
      <div>
        <Link page="https://vitest.dev/">
          <img src={vitestLogo} className="logo vitest" alt="Vitest logo" />
        </Link>
        <Link page="https://postcss.org/">
          <img src={postcssLogo} className="logo postcss" alt="PostCSS logo" />
        </Link>
      </div>
      <h1>Vitest | PostCSS</h1>
      <div className="card">
        <div className="motto" />
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
      <p className="read-the-docs">Click on the logos to learn more</p>
    </div>
  );
}

export default App;
