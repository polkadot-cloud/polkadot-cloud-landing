// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import styled from 'styled-components';

export const PageContentWrapper = styled.div`
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
  border: 1.25px solid var(--border-secondary-color);
  background-color: var(--background-primary);
  box-shadow: var(--shadow-floating-menu);
  border-radius: 0.8rem;
  flex: 1;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    color: var(--text-color-primary);
    font-family: InterBold, sans-serif;
    margin-top: 0.25rem;
    margin-bottom: 0.8rem;

    &.disabled {
      font-family: InterSemiBold, sans-serif;
      margin-bottom: 0;
      opacity: 0.5;
    }
  }

  h4 {
    color: var(--text-color-tertiary);
    font-family: InterSemiBold, sans-serif;
    margin: 0.35rem 0 0.2rem 0;

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
    background: none;
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
