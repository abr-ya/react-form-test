/* eslint-disable require-jsdoc */
import {SAVE_COMMENT} from 'actions/types';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}
