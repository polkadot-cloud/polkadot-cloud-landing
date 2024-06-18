// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { Link } from 'react-router-dom';
import { FooterWrapper } from './Wrapper';

export const Footer = () => (
  <FooterWrapper>
    <div>
      <h4>&copy; Polkadot Cloud Authors and Contributors</h4>
    </div>
    <div>
      <h5>
        <Link to="/privacy">Privacy</Link>
      </h5>
      <h5>
        <Link to="/disclaimer">Disclaimer</Link>
      </h5>
    </div>
  </FooterWrapper>
);
