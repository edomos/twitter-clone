import React from "react";
import "../css/TweetBox.css";

import { Button } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

const TweetBox = () => {
  return (
    <div className="tweetbox__container">
      <form action="" className="tweetbox__form">
        <div className="tweetbox__form--input">
            <AccountCircle className="tweetbox__form--icon"/>
            <input type="text" placeholder="What's happening?" />
        </div>
            <input 
            className="tweetbox__form--image" 
            type="text" 
            placeholder="Enter image URL" 
            />
        <Button variant="contained" className="tweetbox__form--button">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
