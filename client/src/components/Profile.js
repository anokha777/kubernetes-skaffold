import React from "react";
import Avatar from "./Avatar";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__avatar">
        <Avatar />
      </div>
      <div className="profile__info"></div>
      <hr />
      <div className="profile__stats">
        <div className="profile__feeds">
          <h3>Feeds</h3>
          <ul>
            <li>
              <button type="button" className="profile__questions">
                Questions
              </button>
            </li>
            <li>
              <button type="button" className="profile__answers">
                Answers
              </button>
            </li>
          </ul>
        </div>
        <div className="profile__questions_answers">
          <h3>Question</h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
