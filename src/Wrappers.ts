// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import styled from 'styled-components';

export const PageContentWrapper = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  padding: 0 1.5rem;

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

export const CardWrapper = styled.div`
  border: 1px solid var(--border-secondary-color);
  box-shadow: var(--shadow-floating-menu);
  border-radius: 0.6rem;
  flex: 1;
  padding: 0.85rem 1rem;
  margin-bottom: 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    color: var(--text-color-primary);
    font-family: InterBold, sans-serif;
    margin-top: 0.3rem;
    margin-bottom: 0.8rem;
  }

  h4 {
    color: var(--text-color-tertiary);
    font-family: InterSemiBold, sans-serif;
    margin: 0.4rem 0 0 0;

    svg {
      margin-left: 0.35rem;
    }
  }

  p {
    color: var(--text-color-secondary);
    font-family: InterSemiBold, sans-serif;
    margin: 0;
  }

  &.transparent {
    border: none;
    box-shadow: none;
    padding: 0.5rem 0.5rem;
    margin-bottom: 0;
    border-radius: 0;

    > h3 {
      margin-bottom: 0.5rem;
    }
  }
`;
