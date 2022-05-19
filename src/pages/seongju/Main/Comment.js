import React, { useState } from 'react';
import './Comment.scss';
import heartImg from '../../../assets/images/commentHeart.png';
import emptyHeartImg from '../../../assets/images/commentEmptyHeart.png';

function Comment({ feedComment, setComment, userComment, id }) {
  const [heartLike, setHeartLike] = useState(false);
  const toggleLike = () => {
    setHeartLike(!heartLike);
  };
  const deleteComment = () => {
    const copy = [...feedComment];
    copy.splice(id, 1);
    setComment(copy);
  };
  return (
    <div className="inputComment">
      <span>
        <b>wkddn1359</b> {userComment}
      </span>
      <button className="commentLike" onClick={toggleLike}>
        <img
          src={heartLike ? heartImg : emptyHeartImg}
          alt="heartImg"
          className="heartLike"
          width={18}
        />
      </button>
      <button onClick={deleteComment} className="commentDelete">
        ❌
      </button>
    </div>
  );
}

export default Comment;
