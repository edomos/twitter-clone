import { Search } from '@mui/icons-material';
import React from 'react';
import { TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';
import '../css/Widget.css'

const Widget = () => {
    return (
        <div className="widget">
            <div className="widget__input">
                <Search className="widget__input--searchicon"/>
                <input type="text" placeholder="Search Twitter" />
            </div>
            <div className="widget__container">
                <h2>What's happening?</h2>

                <TwitterTweetEmbed tweetId={"858551177860055040"} />

                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="cleverqazi"
                options={{height: 400}}
                />

                <TwitterShareButton
                url={"https://fatcebook.com/cleverprogrammer"}
                options={{text:"reactjs is awesome", via: "cleverqazi"}}
                />
            </div>
        </div>
    );
}

export default Widget;
