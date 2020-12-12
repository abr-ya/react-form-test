import React, {useState} from 'react';

const CommentBox = () => {
  const [comment, setComment] = useState('');

  const formHandler = (e) => {
    e.preventDefault();
    console.log('send', comment);
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

export default CommentBox;

