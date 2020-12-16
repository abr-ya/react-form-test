import {SAVE_COMMENT, FETCH_COMMENTS} from 'actions/types';

const initialState = ['Первый комментарий', 'Второй комментарий'];

// eslint-disable-next-line require-jsdoc
export default function(state = initialState, action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [action.payload, ...state];
    case FETCH_COMMENTS:
      const comments = action.payload.data.map((comment) => comment.name);
      return [...state, ...comments];
    default:
      return state;
  };
};
