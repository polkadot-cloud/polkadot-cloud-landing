// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import styled from 'styled-components';

export const HomeWrapper = styled.div`
  padding: 1rem 0;
  text-align: center;

  .head {
    margin-bottom: 1.25rem;

    .logo {
      height: 7rem;
      padding: 1rem;
      will-change: filter;
      transition: filter 300ms;
      filter: drop-shadow(0 0 2em rgba(193, 14, 125, 0.15));
    }

    h1 {
      color: var(--text-color-primary);
    }

    h2 {
      color: var(--text-color-secondary);
      margin-top: 0.55rem;
    }
  }
`;

export const HeadingWrapper = styled.div`
  margin: 1.25rem 0 0.3rem 0;
  padding: 0 0.6rem;

  > h3 {
    border-bottom: 1px solid var(--border-secondary-color);
    color: var(--text-color-secondary);
    padding-bottom: 0.5rem;
    text-align: left;
    font-size: 0.9rem;
  }
`;
