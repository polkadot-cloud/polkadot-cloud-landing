// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: var(--background-default);
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  padding: 1rem 1.35rem 0.25rem 1.25rem;
  width: 100%;
  height: 2.4rem;
  z-index: 10;

  > div {
    display: flex;
    align-items: center;
    flex-grow: 1;

    &:first-child {
      > button {
        position: relative;

        > svg {
          height: 0.8rem;
          margin-right: 0.5rem;
        }
      }
    }

    &:last-child {
      justify-content: flex-end;

      > button {
        color: var(--text-color-secondary);
        opacity: 0.75;
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
        margin-left: 1rem;
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
