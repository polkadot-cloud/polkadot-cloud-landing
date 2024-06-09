// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { useState } from 'react'
import { AppWrapper } from './Wrappers'
import logo from 'svg/cloud.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppWrapper>
      <div>
        <a href="https://polkadot.cloud" target="_blank">
          <img src={logo} className="logo" alt="Polkadot Cloud logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </AppWrapper>
  )
}

export default App
