import React from 'react';
import { render, screen } from '@testing-library/react';

import Shop from './shop';

describe('Shop component', () => {
  test('test to render the shop component', () => {
    render(<Shop />);
    screen.getByText(/Shop Clothes for Cats/);
  });

  test('test to render negative case', () => {
    render(<Shop />);
    screen.getByText('The page for shopping', { exact: false });
  });
});
