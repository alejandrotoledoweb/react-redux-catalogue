import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from './testUtils';
import Detail from './details';

it('Renders the connected app with initialState and test the output text', () => {
  const history = createMemoryHistory();
  const route = '/photos/ZCHj_2lJP00';
  history.push(route);

  render(
    <Router>
      <Route>
        <Detail />
      </Route>
    </Router>,
    {
      initialState:
      {
        list: [],
        loading: false,
        filter: 'cats-blacks',
        page: 1,
        message: '',
        detail: '',
      },
    },
  );
  screen.getByText(/Photo description/i);
});
