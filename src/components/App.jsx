import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

// eslint-disable-next-line react/display-name
export default () => {
  console.log('App');

  return (
    <div className="App">
      <p>Hello, World!)</p>
      <p>Простое приложение для тестов!</p>
      <CommentBox />
      <CommentList />
    </div>
  );
};
