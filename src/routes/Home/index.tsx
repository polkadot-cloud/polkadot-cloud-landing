// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { CardWrapper, PageContentWrapper } from 'Wrappers';
import IconSVG from 'svg/cloud.svg?react';
import { HeadingWrapper, HomeWrapper } from './Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/pro-solid-svg-icons';

export const Home = () => (
  <PageContentWrapper className="thin">
    <HomeWrapper>
      <div className="head">
        <a href="https://polkadot.cloud">
          <IconSVG className="logo" />
        </a>
        <h1>Polkadot Cloud</h1>
        <h2>
          Decentralised services for interacting with the Polkadot blockchain
        </h2>
      </div>

      <div style={{ marginBottom: '2.5rem' }}>
        <CardWrapper>
          <h3 style={{ marginBottom: 0, opacity: 0.5 }}>
            A New Polkadot Developer Experience
          </h3>
          <h4 style={{ opacity: 0.5 }}>
            Coming Soon
            <FontAwesomeIcon icon={faExternalLinkAlt} transform="shrink-3" />
          </h4>
        </CardWrapper>

        <CardWrapper>
          <h3>Staking Dashboard</h3>
          <p>
            Start staking on Polkadot with the fully-featured staking dashboard.
          </p>
          <h4>
            <a
              href="https://staking.polkadot.network"
              target="_blank"
              rel="noreferrer"
            >
              https://staking.polkadot.network
              <FontAwesomeIcon icon={faExternalLinkAlt} transform="shrink-3" />
            </a>
          </h4>
        </CardWrapper>
      </div>

      <HeadingWrapper>
        <h3>Documentation</h3>
      </HeadingWrapper>

      <span>
        <CardWrapper className="transparent">
          <h3>Polkadot Cloud Docs</h3>
          <p>Documentation for using and contributing to Polkadot Cloud.</p>
          <h4>Coming Soon</h4>
        </CardWrapper>
      </span>

      <HeadingWrapper>
        <h3>Other Resources</h3>
      </HeadingWrapper>

      <span>
        <CardWrapper className="transparent">
          <h3>w3ux Library</h3>
          <p>
            A modular library for Polkadot dapps hosted under the @w3ux scope.
          </p>
          <h4>
            <a
              href="https://github.com/w3ux/w3ux-library"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/w3ux/w3ux-library
              <FontAwesomeIcon icon={faExternalLinkAlt} transform="shrink-3" />
            </a>
          </h4>
        </CardWrapper>

        <CardWrapper className="transparent">
          <h3>Github</h3>
          <p>Find all Polkadot Cloud projects on Github.</p>
          <h4>
            <a
              href="https://github.com/polkadot-cloud"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/polkadot-cloud
              <FontAwesomeIcon icon={faExternalLinkAlt} transform="shrink-3" />
            </a>
          </h4>
        </CardWrapper>
      </span>
    </HomeWrapper>
  </PageContentWrapper>
);
