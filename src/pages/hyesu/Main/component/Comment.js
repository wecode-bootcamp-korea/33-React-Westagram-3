import React from 'react';

const Comment = props => {
  return (
    <div>
      {props.comments.map((comment, idx) => {
        return (
          <div key={comment} className="userDesc">
            <b>follower3</b>
            <span>{comment}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;

// typing, onchange inputvalue state
// input value state => input element value property
