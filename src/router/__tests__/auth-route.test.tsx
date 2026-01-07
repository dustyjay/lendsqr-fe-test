import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import AuthRoute from '../auth-route';
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

describe('AuthRoute', () => {
  beforeEach(() => {
    // Ensure clean storage before each test
    window.localStorage.clear();
    vi.clearAllMocks();
  });

  it('renders children when token exists', () => {
    setToken('abc');
    const { queryByTestId, getByTestId } = render(
      <AuthRoute>
        <Child />
      </AuthRoute>
    );

    expect(getByTestId('child')).toBeInTheDocument();
    expect(queryByTestId('navigate')).toBeNull();
  });

  it('clears storage and redirects to LOGIN when no token exists', () => {
    const clearSpy = vi.spyOn(Object.getPrototypeOf(window.localStorage), 'clear');
    setToken(null);

    const { getByTestId, queryByTestId } = render(
      <AuthRoute>
        <Child />
      </AuthRoute>
    );

    expect(clearSpy).toHaveBeenCalled();
    expect(getByTestId('navigate')).toHaveTextContent(ROUTE_KEYS.LOGIN);
    expect(queryByTestId('child')).toBeNull();
  });

  it('uses STORAGE_KEYS.TOKEN to read from localStorage', () => {
    const spy = vi.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem');
    setToken('token-123');

    render(
      <AuthRoute>
        <Child />
      </AuthRoute>
    );

    expect(spy).toHaveBeenCalledWith(STORAGE_KEYS.TOKEN);
  });

  it('treats empty string token as absent and redirects', () => {
    setToken('');

    const { getByTestId, queryByTestId } = render(
      <AuthRoute>
        <Child />
      </AuthRoute>
    );

    expect(getByTestId('navigate')).toHaveTextContent(ROUTE_KEYS.LOGIN);
    expect(queryByTestId('child')).toBeNull();
  });

  it('reacts to token changes across rerenders (purity w.r.t storage)', async () => {
    const { getByTestId, queryByTestId, rerender } = render(
      <AuthRoute>
        <Child />
      </AuthRoute>
    );

    // Initially no token -> navigate to login
    expect(getByTestId('navigate')).toHaveTextContent(ROUTE_KEYS.LOGIN);

    // Add token and re-render -> children
    setToken('new-token');
    rerender(
      <AuthRoute>
        <Child />
      </AuthRoute>
    );
    expect(getByTestId('child')).toBeInTheDocument();
    expect(queryByTestId('navigate')).toBeNull();

    // Remove token and re-render -> navigate again
    setToken(null);
    rerender(
      <AuthRoute>
        <Child />
      </AuthRoute>
    );
    expect(getByTestId('navigate')).toHaveTextContent(ROUTE_KEYS.LOGIN);
    expect(queryByTestId('child')).toBeNull();
  });
});
