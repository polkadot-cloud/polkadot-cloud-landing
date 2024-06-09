// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import styled from 'styled-components';

export const AppWrapper = styled.div`
  padding: 2rem 0;
  text-align: center;

  .logo {
    height: 12rem;
    padding: 1.5rem;
    will-change: filter;
    transition: filter 300ms;

    &:hover {
      filter: drop-shadow(0 0 2em rgba(193, 14, 125, 0.15));
    }
  }
`;

export const PageContentWrapper = styled.div`
  margin-top: 0.5rem;
  width: 100%;

  &.thin {
    max-width: 750px;
  }
  &.wide {
    max-width: 1300px;
  }

  > h2 {
    color: var(--text-color-primary);
    margin-bottom: 0.6rem;
  }
`;
