import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Filter from './filter';

const handleClick = () => true;

describe('Filter', () => {
  test('test to renders filter component with the first caterogy', () => {
    render(<Filter handleOnClick={() => handleClick()} />, { wrapper: MemoryRouter });
    screen.getByText(/Cats blacks/);
  });

  test('test to renders filter component with the second caterogy', () => {
    render(<Filter handleOnClick={() => handleClick()} />, { wrapper: MemoryRouter });
    screen.getByText(/Cats sleeping/);
  });

  test('test to renders filter component with the third caterogy', () => {
    render(<Filter handleOnClick={() => handleClick()} />, { wrapper: MemoryRouter });
    screen.getByText(/Cats and animals/);
  });

  test('test to renders filter component with the fourth caterogy', () => {
    render(<Filter handleOnClick={() => handleClick()} />, { wrapper: MemoryRouter });
    screen.getByText(/Cats and girls/);
  });

  test('test to renders filter component with the fifth caterogy', () => {
    render(<Filter handleOnClick={() => handleClick()} />, { wrapper: MemoryRouter });
    screen.getByText(/Cats adorable/);
  });
});
