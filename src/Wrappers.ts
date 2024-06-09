// Copyright 2024 @polkadot-cloud/landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import styled from "styled-components";

export const AppWrapper = styled.div`
  max-width: 1280px;
  margin: 0  auto;
  padding: 2rem;
  text-align: center;

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;

    &:hover {
      filter: drop-shadow(0 0 2em rgba(193, 14, 125, 0.15));
    }
  }

  .card {
    padding: 2em;
  }

  .read-the-docs {
    color: #888;
  }
`;