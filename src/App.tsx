// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import IconSVG from 'svg/cloud.svg?react';
import { Header } from 'library/Header';
import { Entry } from 'library/Entry';
import { AppWrapper, PageContentWrapper } from 'Wrappers';
import { Body } from 'library/Body';

const App = () => (
  <Entry mode="light" accent="cloud">
    <Header />
    <Body>
      <PageContentWrapper className="thin">
        <AppWrapper>
          <div>
            <a href="https://polkadot.cloud" target="_blank" rel="noreferrer">
              <IconSVG className="logo" />
            </a>
          </div>
        </AppWrapper>
      </PageContentWrapper>
    </Body>
  </Entry>
);

export default App;
