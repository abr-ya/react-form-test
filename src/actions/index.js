/* eslint-disable require-jsdoc */
import axios from 'axios';
import {SAVE_COMMENT, FETCH_COMMENTS} from 'actions/types';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
};

// request to API
export function fetchComments() {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');
  // console.log(response); // здесь промис - ридакс с reduxPromise разберется!

  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
};
