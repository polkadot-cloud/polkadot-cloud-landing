// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GithubRepoUrl } from 'consts';
import IconSvg from 'svg/Cloud.svg?react';
import { HeaderWrapper } from './Wrapper';
import { version } from '../../../package.json';
import { Link } from 'react-router-dom';

export const Header = () => (
  <HeaderWrapper>
    <div>
      <span
        style={{ width: '1.3rem', height: '1.3rem', marginRight: '0.4rem' }}
      >
        <IconSvg />
      </span>
      <h1>
        <Link to="/">Polkadot Cloud</Link>
      </h1>
      <span className="version">{version}</span>
    </div>
    <div>
      <span>
        <button type="button" disabled>
          Coming Soon
          <FontAwesomeIcon icon={faExternalLinkAlt} transform="shrink-5" />
        </button>
      </span>

      <button type="button" onClick={() => window.open(GithubRepoUrl)}>
        <FontAwesomeIcon icon={faGithub} transform="grow-4" />
      </button>
    </div>
  </HeaderWrapper>
);
