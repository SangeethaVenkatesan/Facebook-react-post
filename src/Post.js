import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Post({ key, profilePic, image, username, timestamp, message }) {
    return (
        <div className="post">

            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar"></Avatar>
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>


            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">

                <img src={image} alt=""></img>
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon></ThumbUpIcon>
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <CommentIcon></CommentIcon>
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <ShareIcon></ShareIcon>
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon></AccountCircleIcon>
                    <ExpandMoreOutlinedIcon></ExpandMoreOutlinedIcon>
                </div>
            </div>
        </div>

    )
}

export default Post
