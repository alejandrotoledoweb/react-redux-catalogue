import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Photo from './photo';

let container = null;

beforeEach(() => {
  container = document.createElement('section');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('it test to render a photo component with id and url of the photo', () => {
  act(() => {
    render(
      <Photo
        id="ZCHj_2lJP00"
        url="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixid=MnwyMjE4NTV8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8fHx8MTYxODIzNjY2Nw&ixlib=rb-1.2.1"
        photoStyle="photo"
        photoContainer="photo-container"
      />,
      container,
    );
  });

  expect(
    container.innerHTML,
  ).toMatchSnapshot();
});
