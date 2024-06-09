// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { PageContentWrapper } from 'Wrappers';
import IconSVG from 'svg/cloud.svg?react';
import { HomeWrapper } from './Wrapper';

export const Home = () => (
  <PageContentWrapper className="thin">
    <HomeWrapper>
      <div>
        <a href="https://polkadot.cloud">
          <IconSVG className="logo" />
        </a>
      </div>
    </HomeWrapper>
  </PageContentWrapper>
);
