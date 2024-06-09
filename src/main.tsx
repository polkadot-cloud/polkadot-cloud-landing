// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

// Theme colors.
import 'styles/accents/cloud.css';

// Default template fonts.

import 'styles/fonts.css';

// Default template theme.
import 'styles/theme.css';

// Core styles.
import 'styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
