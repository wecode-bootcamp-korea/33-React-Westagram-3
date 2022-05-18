import React from 'react';

// function Comment({id, userName, text} => {
//   return (
//     <li key={list.id}>
//       <strong>{list.userName}</strong> {list.text}
//     </li>
//   );
// })

function Comment({ index, item }) {
  return (
    <li key={index}>
      <strong>byul____e</strong> {item}
    </li>
  );
}

export default Comment;
