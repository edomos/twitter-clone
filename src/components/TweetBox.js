import React, { useState, useEffect } from "react";
import "../css/TweetBox.css";

//MUI icons
import { Button } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

//Firebase
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const postsCollectionRef = collection(db, "posts")
  
  const sendTweet = (e) => {
    e.preventDefault();

    addDoc(postsCollectionRef, {
        displayName: "Al Ram",
        username: "alllllram",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar:
          "https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_960_720.png",
        // retweets: 100,
        // likes: 50,
      });
  
    setTweetMessage(""); 
    setTweetImage("");
  };
 
  return (
    <div className="tweetbox__container">
      <form action="" className="tweetbox__form">
        <div className="tweetbox__form--input">
          <AccountCircle className="tweetbox__form--icon" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type="text"
            placeholder="What's happening?"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetbox__form--image"
          type="text"
          placeholder="Optional: Enter image URL"
        />
        <Button
          onClick={sendTweet}
          variant="contained"
          className="tweetbox__form--button"
          type="submit"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
