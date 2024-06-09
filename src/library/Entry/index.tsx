// Copyright 2024 @polkadot-cloud/polkadot-developer-console authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { Wrapper } from './Wrapper';
import type { ComponentBase } from '@w3ux/types';

export type EntryProps = ComponentBase & {
  mode: 'light' | 'dark';
  accent: string;
};

export const Entry = ({ children, style, mode, accent }: EntryProps) => (
  <Wrapper className={`theme-${mode} accent-${accent}`} style={style}>
    {children}
  </Wrapper>
);
