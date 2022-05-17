import React from 'react';

const Comment = props => {
  return (
    <div>
      {props.comment.map((user, idx) => {
        return <p key={idx}>{user}</p>;
      })}
    </div>
  );
};

export default Comment;
