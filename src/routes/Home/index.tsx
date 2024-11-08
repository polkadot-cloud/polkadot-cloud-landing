// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { CardWrapper, PageContentWrapper } from 'Wrappers';
import { HeadingWrapper, HomeWrapper } from './Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/pro-solid-svg-icons';

export const Home = () => (
  <PageContentWrapper className="thin">
    <HomeWrapper>
      <div className="head">
        <div>
          <img src="/png/CloudHero.png" className="logo" />
        </div>
      </div>

      <div style={{ marginBottom: '2.5rem' }}>
        <HeadingWrapper style={{ marginTop: '0' }}>
          <h3 style={{ border: 'none' }}>Apps</h3>
        </HeadingWrapper>

        <CardWrapper>
          <h3>Polkadot Developer Console</h3>
          <p>A next-generation Polkadot developer console.</p>
          <h4>
            <a
              href="https://console.polkadot.cloud"
              target="_blank"
              rel="noreferrer"
            >
              https://console.polkadot.cloud
              <FontAwesomeIcon icon={faExternalLinkAlt} transform="shrink-3" />
            </a>
          </h4>
        </CardWrapper>

        <CardWrapper>
          <h3>Staking Dashboard</h3>
          <p>
            Start staking on Polkadot with the fully-featured staking dashboard.
          </p>
          <h4>
            <a
              href="https://staking.polkadot.cloud"
              target="_blank"
              rel="noreferrer"
            >
              https://staking.polkadot.cloud
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
          <h4>
            <a
              href="https://docs.polkadot.cloud"
              target="_blank"
              rel="noreferrer"
            >
              https://docs.polkadot.cloud
              <FontAwesomeIcon icon={faExternalLinkAlt} transform="shrink-3" />
            </a>
          </h4>
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
            <a href="https://w3ux.org" target="_blank" rel="noreferrer">
              https://w3ux.org
              <FontAwesomeIcon icon={faExternalLinkAlt} transform="shrink-3" />
            </a>
          </h4>
        </CardWrapper>

        <CardWrapper className="transparent">
          <h3>GitHub</h3>
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
