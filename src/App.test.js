import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeTruthy();
});

test('renders hello message', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello from React App!/i);
  expect(linkElement).toBeTruthy();
});
