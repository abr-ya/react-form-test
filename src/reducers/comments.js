import {SAVE_COMMENT} from 'actions/types';

const initialState = ['Первый комментарий', 'Второй комментарий'];

// eslint-disable-next-line require-jsdoc
export default function(state = initialState, action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  };
};
