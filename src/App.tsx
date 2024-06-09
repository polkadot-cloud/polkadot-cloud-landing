// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { Header } from 'library/Header';
import { Entry } from 'library/Entry';
import { Body } from 'library/Body';
import { HashRouter } from 'react-router-dom';
import { Router } from 'Router';

const App = () => (
  <Entry mode="light" accent="cloud">
    <HashRouter basename="/">
      <Header />
      <Body>
        <Router />
      </Body>
    </HashRouter>
  </Entry>
);

export default App;
