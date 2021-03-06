import React from 'react';
import { render, screen } from '@testing-library/react';

import About from './about';

describe('About component', () => {
  test('test to render the about component', () => {
    render(<About />);
    screen.getByText(/About Page/);
  });

  test('test to render negative case', () => {
    render(<About />);
    screen.getByText('This is a page about cats', { exact: false });
  });
});
