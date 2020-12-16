import React from 'react';
import ReactDOM from 'react-dom';
import WithRedux from 'WithRedux';
import App from 'components/App';

const initialState = {
  comments: ['comment #1', 'comment #2'],
};

ReactDOM.render(
    <WithRedux initialState={initialState}>
      <App />
    </WithRedux>,
    document.getElementById('root'),
);
