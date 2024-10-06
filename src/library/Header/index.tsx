// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { HeaderWrapper } from './Wrapper';
import LogoSVG from 'svg/Logo.svg?react';

export const Header = () => (
  <HeaderWrapper>
    <div>
      <button type="button" onClick={() => (window.location.href = '/')}>
        <LogoSVG />
      </button>
    </div>
    <div>{/* Right side of the header currently empty. */}</div>
  </HeaderWrapper>
);
