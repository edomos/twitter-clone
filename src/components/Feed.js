import React, { useState, useEffect } from "react";
import "../css/Feed.css";
import Header from "./Header";
import TweetBox from "./TweetBox";
import Post from "./Post";

//Firebase
import { db } from "../firebase-config";
import { collection, doc, getDocs } from "firebase/firestore";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // collection(db, "posts").onSnapshot(snapshot => (
    // setPosts(snapshot.docs.map(doc => doc.data()))

    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      setPosts(data.docs.map((doc) => ({ ...doc.data() })));
      console.log(data.docs);
    };
    getPosts();
  }, []);

  return (
    <div className="feed__container">
      <div className="feed__header">
        <Header />
      </div>
      <TweetBox />

    {posts.map(post => (
      <Post
      displayName={post.displayName}
      username={post.username}
      verified={post.verified}
      text={post.text}
      avatar={post.avatar}
      image={post.image}
      retweets={post.retweets}
      likes={post.likes}
    />
    ))}
    
      <Post />
    </div>
  );
};

export default Feed;
