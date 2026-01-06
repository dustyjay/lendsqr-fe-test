import type { CSSProperties } from 'react';

export type TableHeaderType<T = string> = {
  label: string;
  key: T;
  canSort?: boolean;
  style?: CSSProperties;
};
