// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: var(--background-default);
  border-bottom: 1px solid var(--border-secondary-color);
  border-image: var(--border-gradient) 50;
  display: flex;
  align-items: center;
  padding: 0.4rem 1.25rem 0.4rem 0.55rem;
  width: 100%;
  height: 2.4rem;

  > div {
    display: flex;
    align-items: center;
    flex-grow: 1;

    &:first-child {
      > h1 {
        font-family: Inter, sans-serif;
        font-size: 0.72rem;
        text-transform: uppercase;
        /* NOTE: Text gradients not yet standardised. Falls back to color on non-webkit compatible
        browsers. */
        background: linear-gradient(
          90deg,
          var(--accent-color-secondary) 0%,
          var(--accent-color-secondary) 20%,
          var(--accent-color-primary) 100%
        );
        color: var(--accent-color-primary);
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      > .version {
        color: var(--text-color-primary);
        font-family: InterSemiBold, sans-serif;
        margin-left: 0.35rem;
        margin-right: 0.5rem;
        font-size: 0.7rem;
        opacity: 0.75;

        > svg {
          fill: var(--accent-color-primary);
          width: 100%;
          height: 100%;
        }
      }
    }

    &:last-child {
      justify-content: flex-end;

      > button {
        opacity: 0.4;
        transition: opacity 0.2s;
        margin-left: 1.25rem;

        &:hover {
          opacity: 1;
        }
      }
    }

    > span {
      display: flex;
      align-items: center;

      > button {
        color: var(--text-color-secondary);
        font-family: InterSemiBold, sans-serif;
        margin-left: 1.25rem;
        transition: color 0.15s;

        > svg {
          margin-left: 0.2rem;
        }

        &:hover {
          color: var(--accent-color-primary);
        }
        &:disabled {
          opacity: 0.5;

          &:hover {
            color: var(--text-color-secondary);
          }
        }

        &:first-child {
          margin-left: 0.5rem;
        }
      }
    }
  }
`;
