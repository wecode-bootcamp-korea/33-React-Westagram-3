import React from 'react';

function Comment({ index, item }) {
  return (
    <li key={index}>
      <strong>byul____e</strong> {item}
    </li>
  );
}

export default Comment;
