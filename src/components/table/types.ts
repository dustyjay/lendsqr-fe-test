import type { CSSProperties } from 'react';

export type TableDataType<T extends string, K = string> = Record<T, K>;

export type TableHeaderType<T = string> = {
  label: string;
  key: T;
  canSort?: boolean;
  style?: CSSProperties;
};
