import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from 'reducers';

// eslint-disable-next-line react/prop-types
const WithRedux = ({children}) => {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
      reducers,
      // eslint-disable-next-line max-len
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  /* eslint-enable */

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default WithRedux;
