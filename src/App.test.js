import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App name', () => {
  render(<App />);
  const linkElement = screen.getByText(/App/i);
  expect(linkElement).toBeInTheDocument();
});
