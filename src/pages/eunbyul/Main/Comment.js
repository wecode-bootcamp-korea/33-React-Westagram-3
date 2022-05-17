import React from 'react';
import './Comment.scss';

const Comment = props => {
  return <li key={props.index}>{props.item}</li>;
};

export default Comment;
