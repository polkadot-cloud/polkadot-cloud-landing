// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import styled from 'styled-components';

export const HomeWrapper = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 1rem;
  text-align: center;

  .head {
    margin-bottom: 1.25rem;
    display: flex;
    flex-flow: column;
    align-items: center;

    > div {
      position: relative;
      width: 100%;
      max-width: 15rem;

      .logo {
        position: relative;
        left: -1.5rem;
        padding: 1rem;
        will-change: filter;
        transition: filter 300ms;
        z-index: 0;
        width: auto;
        height: 15rem;

        @media (max-width: 700px) {
          max-height: 11rem;
          left: 0.5rem;
        }
      }
    }
    h1 {
      color: var(--text-color-primary);
      font-family: Unbounded, sans-serif;
      z-index: 1;
    }
  }

  .legal {
    margin-top: 3rem;
    margin-bottom: 3rem;

    > h1 {
      margin-bottom: 1.5rem;
    }

    h2 {
      margin-top: 1.75rem;
    }
    h2,
    li,
    p {
      text-align: left;
      &.ySpace {
        margin-top: 1.5rem;
      }
    }
  }
`;

export const HeadingWrapper = styled.div`
  margin: 1rem 0 0.3rem 0;
  padding: 0 0.6rem;

  > h3 {
    border-bottom: 1px solid var(--border-secondary-color);
    color: var(--text-color-secondary);
    padding-bottom: 0.4rem;
    text-align: left;
    font-size: 0.9rem;
  }
`;
