import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from '../ReactRouter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReactRouter />, div);
  ReactDOM.unmountComponentAtNode(div);
});


