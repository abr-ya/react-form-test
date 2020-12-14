import React, {useState} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

// eslint-disable-next-line react/prop-types
const CommentBox = ({saveComment}) => {
  const [comment, setComment] = useState('');

  const formHandler = (e) => {
    e.preventDefault();
    console.log('send', comment);
    saveComment(comment);
    setComment('');
  };

  return (
    <form onSubmit={formHandler}>
      <h4>Add a Comment</h4>
      <textarea
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
  );
};

export default connect(null, actions)(CommentBox);
