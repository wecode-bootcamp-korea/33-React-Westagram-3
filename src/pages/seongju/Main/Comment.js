import './Comment.scss';
import React from 'react';

function Comment(props) {
  return (
    <>
      {props.comment.map(function (a, i) {
        return (
          <div key="0">
            <p className="inputComment" key="0">
              <b>wkddn1359</b> {props.comment[i]}
              <span className="countLike">👍{props.like[i]}</span>
              <button
                onClick={e => {
                  e.stopPropagation();
                  let copy = [...props.like];
                  copy[i] += 1;
                  props.setLike(copy);
                }}
                className="commentLike"
              >
                👍
              </button>
              <button
                onClick={() => {
                  let copy = [...props.comment];
                  copy.splice(i, 1);
                  props.setComment(copy);
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
