import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import UnauthRoute from '../unauth-route';
import { ROUTE_KEYS, STORAGE_KEYS } from '../../util';
import type { ReactNode } from 'react';

// Helper wrapper component for children
const Child = ({ children }: { children?: ReactNode }) => (
  <div data-testid='child'>{children ?? 'child'}</div>
);

// Mock react-router-dom Navigate to observe redirect target
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    Navigate: ({ to }: { to: string }) => <div data-testid='navigate'>{to}</div>
  };
});

// Utility to set/get/clear localStorage
const setToken = (val: string | null) => {
  if (val === null) {
    window.localStorage.removeItem(STORAGE_KEYS.TOKEN);
  } else {
    window.localStorage.setItem(STORAGE_KEYS.TOKEN, val);
  }
};

describe('UnauthRoute', () => {
  beforeEach(() => {
    // Ensure clean storage before each test
    window.localStorage.clear();
    vi.clearAllMocks();
  });

  it('renders children when no token exists', () => {
    setToken(null);
    const { queryByTestId, getByTestId } = render(
      <UnauthRoute>
        <Child />
      </UnauthRoute>
    );

    expect(getByTestId('child')).toBeInTheDocument();
    expect(queryByTestId('navigate')).toBeNull();
  });

  it('redirects to USERS_LIST when token exists', () => {
    setToken('abc');

    const { getByTestId, queryByTestId } = render(
      <UnauthRoute>
        <Child />
      </UnauthRoute>
    );

    expect(getByTestId('navigate')).toHaveTextContent(ROUTE_KEYS.USERS_LIST);
    expect(queryByTestId('child')).toBeNull();
  });

  it('uses STORAGE_KEYS.TOKEN to read from localStorage', () => {
    // Put a sentinel token key; ensure exact key is used
    const spy = vi.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem');
    setToken('token-123');

    render(
      <UnauthRoute>
        <Child />
      </UnauthRoute>
    );

    expect(spy).toHaveBeenCalledWith(STORAGE_KEYS.TOKEN);
  });

  it('does not attempt to navigate when token is an empty string', () => {
    // Simulate an empty token value in storage
    setToken('');

    const { queryByTestId, getByTestId } = render(
      <UnauthRoute>
        <Child />
      </UnauthRoute>
    );

    // Empty string is truthy? In JS it's falsy, so it should render children
    expect(getByTestId('child')).toBeInTheDocument();
    expect(queryByTestId('navigate')).toBeNull();
  });

  it('is a pure component based on storage state (rerender reacts to token add/remove)', async () => {
    const { queryByTestId, getByTestId, rerender } = render(
      <UnauthRoute>
        <Child />
      </UnauthRoute>
    );

    // Initially no token -> children
    expect(getByTestId('child')).toBeInTheDocument();

    // Add token and re-render -> navigate
    setToken('new-token');
    rerender(
      <UnauthRoute>
        <Child />
      </UnauthRoute>
    );
    expect(getByTestId('navigate')).toHaveTextContent(ROUTE_KEYS.USERS_LIST);

    // Remove token and re-render -> children again
    setToken(null);
    rerender(
      <UnauthRoute>
        <Child />
      </UnauthRoute>
    );
    expect(getByTestId('child')).toBeInTheDocument();
    expect(queryByTestId('navigate')).toBeNull();
  });
});
