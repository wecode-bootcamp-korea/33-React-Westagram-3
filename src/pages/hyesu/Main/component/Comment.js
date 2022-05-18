import React from 'react';

const Comment = props => {
  return (
    <div>
      {props.comments.map(comment => {
        // console.log('찍혀라', comment);
        return (
          <div key={comment.id} className="userDesc">
            <b>followers</b>
            <span>{comment.text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;

// typing, onchange inputvalue state
// input value state => input element value property
