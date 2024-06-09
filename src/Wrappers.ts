// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import styled from 'styled-components';

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
