import React from 'react';

const Recommendation = ({ recommendationItem }) => {
  return (
    <li className="rcmndList">
      <div className="account">
        <img src="images/haeun/main-img/user2.jpg" alt="" />
        <div className="accountId">
          <strong>{recommendationItem.accountName}</strong>
          <span>{recommendationItem.followedBy}</span>
        </div>
      </div>
      <button>팔로우</button>
    </li>
  );
};

export default Recommendation;
