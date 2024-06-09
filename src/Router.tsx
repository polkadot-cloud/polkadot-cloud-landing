// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from 'routes/Home';

export const Router = () => (
  <Routes>
    <Route key={`route_home`} path={'/'} element={<Home />} />
    {/* Fallback route to landing page */}
    <Route key="route_fallback" path="*" element={<Navigate to="/" />} />
  </Routes>
);
