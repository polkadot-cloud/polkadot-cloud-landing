// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GithubRepoUrl } from 'consts';
import IconSvg from 'svg/Icon.svg?react';
import { HeaderWrapper } from './Wrapper';
import { Link } from 'react-router-dom';

export const Header = () => (
  <HeaderWrapper>
    <div>
      <span style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }}>
        <IconSvg />
      </span>
      <h1>
        <Link to="/">Polkadot Cloud Portal</Link>
      </h1>
    </div>
    <div>
      <button type="button" onClick={() => window.open(GithubRepoUrl)}>
        <FontAwesomeIcon icon={faGithub} transform="grow-4" />
      </button>
    </div>
  </HeaderWrapper>
);
