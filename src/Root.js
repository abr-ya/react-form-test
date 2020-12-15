// альтернативный файл - для проверки
/* eslint-disable react/prop-types */
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from 'reducers';

// eslint-disable-next-line react/display-name
export default ({children}) => {
  return (
    <Provider store={createStore(reducers)}>
      {children}
    </Provider>
  );
};
