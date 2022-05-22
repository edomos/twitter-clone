import React from "react";
import "../css/Feed.css";
import Header from "./Header";
import TweetBox from './TweetBox'
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed__container">
      <div className="feed__header">
        <Header />
      </div>
      <TweetBox />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
