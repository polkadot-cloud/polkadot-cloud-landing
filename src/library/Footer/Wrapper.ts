// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import styled from 'styled-components';

export const FooterWrapper = styled.div`
  border-top: 1px solid var(--border-primary-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.4rem 1rem;
  width: 100%;
  height: 5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0.22rem;
  }

  > h4,
  h5 {
    margin-right: 1rem;
  }
`;
