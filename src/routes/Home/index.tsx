// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { AppWrapper, PageContentWrapper } from 'Wrappers';
import IconSVG from 'svg/cloud.svg?react';

export const Home = () => (
  <PageContentWrapper className="thin">
    <AppWrapper>
      <div>
        <a href="https://polkadot.cloud" target="_blank" rel="noreferrer">
          <IconSVG className="logo" />
        </a>
      </div>
    </AppWrapper>
  </PageContentWrapper>
);
