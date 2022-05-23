import React from 'react';
import '../css/Post.css'

//MUI Icons
import AccountCircle from '@mui/icons-material/AccountCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import UploadIcon from '@mui/icons-material/Upload';
import { ChatBubbleOutline, FavoriteBorder, Repeat } from '@mui/icons-material';


function Post({
    displayName,
    username,
    verified,
    timestamp,
    text,
    image, 
    avatar,
    retweets,
    likes,
 }) {
    return (
        <div className="post__container">
            <div className="post__avatar">
                <AccountCircle /*src={avatar}*//>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__header--text">
                        <h3>{displayName}</h3>
                        <h3>message tweet
                        <span className="post__header--span">
                            {verified && <CheckCircleOutlineIcon className="post__header--badge"/>} @{username}
                        </span>
                        </h3>
                    </div>
                    <div className="post__header--description">
                        <p>{text}</p>
                    </div>
                </div>
                <img 
                src={image} 
                alt="" 
                />
                <div className="post__footer">
                    <ChatBubbleOutline fontSize="small" />
                    <Repeat fontSize="small" />
                    <FavoriteBorder fontSize="small" />
                    <UploadIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
 }

// const Post = () => {
//     return (
//         <div className="post__container">
//             <div className="post__avatar">
//                 <AccountCircle /*{avatar}*//>
//             </div>
//             <div className="post__body">
//                 <div className="post__header">
//                     <div className="post__header--text">
//                         <h3>{/* {text} */}</h3>
//                         <h3>message tweet
//                         <span className="post__header--span">
//                             <CheckCircleOutlineIcon className="post__header--badge"/>
//                         </span>
//                         </h3>
//                     </div>
//                     <div className="post__header--description">
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea?</p>
//                     </div>
//                 </div>
//                 <img 
//                 src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" 
//                 alt="" 
//                 />
//                 <div className="post__footer">
//                     <ChatBubbleOutline fontSize="small" />
//                     <Repeat fontSize="small" />
//                     <FavoriteBorder fontSize="small" />
//                     <UploadIcon fontSize="small" />
//                 </div>
//             </div>
//         </div>
//     );
// }

export default Post;
