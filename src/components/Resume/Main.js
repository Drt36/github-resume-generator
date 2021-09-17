import React, { useState } from "react";
import "./main.css";
import arrow from "./left-arrow.png";
import { useHistory } from "react-router-dom";
export const Main = (props) => {
  const { userDetail } = props;
  const history = useHistory();

  const back = () => {
    history.goBack();
  };

  return (
    <div className="main-wrapper">
      <section className="top-section">
        <button className="back-arrow" onClick={back}>
          <img src={arrow} />
        </button>
        {userDetail.hireable === null ? (
          <button className="hire-btn">Hire Me</button>
        ) : (
          " "
        )}
      </section>
      <section className="bottom-section">
        <img src={userDetail.avatar_url} />
        <h1 className="user-name">{userDetail.name}</h1>
        <h3 className="user-username">{userDetail.login}</h3>
        <section className="bottom-section__top">
          <p className="user-followers">{userDetail.followers}</p>
          <p className="user-following">{userDetail.following}</p>
          <p className="user-repo">{userDetail.public_repos}</p>
          <div className="followers-div">Followers</div>
          <div className="following-div">Following</div>
          <div className="repo-div">Repositories</div>
        </section>
        <section className="bottom-section__bottom">
          <section className="left-section">
            <div className="left-div1">
              <i class="far fa-envelope"></i>
              <label>Email</label>
              <p>{userDetail.email}</p>
            </div>

            <div className="left-div2">
              <i class="fas fa-map-marker-alt"></i> <label>Location</label>
              <p>{userDetail.location}</p>
            </div>

            <div className="left-div3">
              <i class="fab fa-twitter"></i> <label>Twitter</label>
              <p>{userDetail.twitter_username}</p>
            </div>

            <div className="right-div1">
              <i class="fas fa-building"></i>
              <label>Organization</label>
              <p>{userDetail.company}</p>
            </div>
            <div className="right-div2">
              <i class="fas fa-calendar-day"></i>
              <label>Joined Date</label>
              <p>{userDetail.created_at}</p>
            </div>
            <div className="right-div3">
              <i class="fas fa-globe"></i>
              <label>Website</label>
              <p>{userDetail.blog}</p>
            </div>
          </section>
          <section className="right-section">
            <h3>Bio</h3>
            <p>{userDetail.bio}</p>
          </section>
        </section>
      </section>
    </div>
  );
};
