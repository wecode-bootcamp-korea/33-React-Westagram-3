import React from 'react';

const Story = ({ story }) => {
  return (
    <li className="storyList">
      <img src={story.profileImg} alt="" />
      <div className="userInfo">
        <span>{story.accountName}</span>
        <span>{story.time}</span>
      </div>
    </li>
  );
};

export default Story;
