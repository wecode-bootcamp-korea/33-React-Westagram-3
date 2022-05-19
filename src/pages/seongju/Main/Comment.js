import './Comment.scss';
import React, { useState } from 'react';
import heartImg from '../../../assets/images/commentHeart.png';
import emptyHeartImg from '../../../assets/images/commentEmptyHeart.png';

function Comment({ feedComment, setComment, userComment, id }) {
  const [heartLike, setHeartLike] = useState(false);
  const toggleLike = () => {
    setHeartLike(!heartLike);
  };
  return (
    <div className="inputComment">
      <b>wkddn1359</b> <span>{userComment}</span>
      <button className="commentLike" onClick={toggleLike}>
        <img
          src={heartLike ? heartImg : emptyHeartImg}
          alt="하이"
          className="heartLike"
          width={18}
        />
      </button>
      <button
        onClick={() => {
          const copy = [...feedComment];
          copy.splice(id, 1);
          setComment(copy);
        }}
        className="commentDelete"
      >
        ❌
      </button>
    </div>
  );
}

export default Comment;
