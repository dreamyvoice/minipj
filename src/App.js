import React from 'react';
import './style.css';
import React, { useState } from 'react';
import Home from './Home';
import About from './About';

export default function App() {
  const [comp, setComp] = useState(Home);
  return (
    <>
      <header>
        <button onClick={() => setComp(Home)}>Home</button>
        <button onClick={() => setComp(About)}>reservation</button>
      </header>
      <hr />

      <main children={comp} />
    </>
  );
}
