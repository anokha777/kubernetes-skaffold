import React from "react";

const Avatar = () => {
  return (
    <div class="user-avatar">
      <div className="user-avatar__profile-image-wrapper">
        <img
          className="user-avatar__profile-image"
          src="https://via.placeholder.com/400"
          alt=""
        />
      </div>
      <div className="user-avatar__info">
        <h1>User Name: Test</h1>
        <div>Total upvote : 100</div>
        <div>Badge : Gold</div>
      </div>
    </div>
  );
};

export default Avatar;
