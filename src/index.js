import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from 'reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducers,
    // eslint-disable-next-line max-len
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
    document.getElementById('root'),
);
