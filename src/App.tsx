// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { useState } from 'react';
import { AppWrapper } from './Wrappers';
import logo from 'svg/cloud.svg';
import { Header } from 'library/Header';
import { Entry } from 'library/Entry';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Entry mode="light" accent="cloud">
      <Header />
      <AppWrapper>
        <div>
          <a href="https://polkadot.cloud" target="_blank" rel="noreferrer">
            <img src={logo} className="logo" alt="Polkadot Cloud logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((c) => c + 1)}>
            count is {count}
          </button>
        </div>
        <p className="read-the-docs">Learn More</p>
      </AppWrapper>
    </Entry>
  );
};

export default App;
