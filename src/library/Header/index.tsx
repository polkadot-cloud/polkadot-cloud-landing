// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBooks } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DocsUrl, GithubRepoUrl } from 'consts';
import IconSvg from 'svg/cloud.svg?react';
import { HeaderWrapper } from './Wrapper';
import { version } from '../../../package.json';

export const Header = () => (
  <HeaderWrapper>
    <div>
      <span
        style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.4rem' }}
      >
        <IconSvg />
      </span>
      <h1>Polkadot Cloud</h1>
      <span>{version}</span>
    </div>
    <div>
      <button onClick={() => window.open(DocsUrl)}>
        <FontAwesomeIcon icon={faBooks} transform="grow-2" />
      </button>

      <button onClick={() => window.open(GithubRepoUrl)}>
        <FontAwesomeIcon icon={faGithub} transform="grow-4" />
      </button>
    </div>
  </HeaderWrapper>
);
