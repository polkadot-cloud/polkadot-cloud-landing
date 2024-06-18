// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { Navigate, Route, Routes } from 'react-router-dom';
import { Disclaimer } from 'routes/Disclaimer';
import { Home } from 'routes/Home';
import { Privacy } from 'routes/Privacy';

export const Router = () => (
  <Routes>
    <Route key={`route_home`} path={'/'} element={<Home />} />
    <Route key={`route_home`} path={'/privacy'} element={<Privacy />} />
    <Route key={`route_home`} path={'/disclaimer'} element={<Disclaimer />} />

    {/* Fallback route to landing page */}
    <Route key="route_fallback" path="*" element={<Navigate to="/" />} />
  </Routes>
);
