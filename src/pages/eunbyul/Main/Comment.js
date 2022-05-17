import React from 'react';
import './Comment.scss';

function Comment({ index, item }) {
  return <li key={index}>{item}</li>;
}

export default Comment;
