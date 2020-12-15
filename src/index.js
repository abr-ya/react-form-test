import React from 'react';
import ReactDOM from 'react-dom';
import WithRedux from 'WithRedux';
import App from 'components/App';

ReactDOM.render(
    <WithRedux>
      <App />
    </WithRedux>,
    document.getElementById('root'),
);
