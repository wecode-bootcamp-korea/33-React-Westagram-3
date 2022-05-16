import './Comment.scss';
import React from 'react';

function Comment({ comment, like, setLike, setComment }) {
  return (
    <>
      {comment.map(function (a, i) {
        return (
          <div key={i}>
            <p className="inputComment">
              <b>wkddn1359</b> {comment[i]}
              <span className="countLike">👍{like[i]}</span>
              <button
                onClick={e => {
                  e.stopPropagation();
                  let copy = [...like];
                  copy[i] += 1;
                  setLike(copy);
                }}
                className="commentLike"
              >
                👍
              </button>
              <button
                onClick={() => {
                  let copy = [...comment];
                  copy.splice(i, 1);
                  setComment(copy);
                }}
                className="commentDelete"
              >
                ❌
              </button>
            </p>
          </div>
        );
      })}
    </>
  );
}
export default Comment;
