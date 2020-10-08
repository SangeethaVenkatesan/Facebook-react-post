import React, { useState } from 'react'
import "./MessageSender.css"
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { red } from '@material-ui/core/colors';

import db from './firebase'
import firebase from 'firebase'
import { useStateValue } from './StateProvider';

function MessageSender() {

    const [{ user }, dispatch] = useStateValue();

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        // some clever DB stuff
        // reset values 

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        setInput("")
        setImageUrl("")
    }
    return (
        <div className="messageSender">

            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} className="messageSener__input" placeholder={`What's on your mind,${user.displayName}`}></input>
                    <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="" placeholder="ImageUrl(optional)"></input>

                    <button type="submit" onClick={handleSubmit} >Hidden Submit</button>

                </form>

            </div>

            <div className="messageSender__bottom">

                <div className="messageSender__option">
                    <VideocamIcon style={{ color: "red" }}></VideocamIcon>
                    <h3 className="">Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }}></PhotoLibraryIcon>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: "orange" }}></InsertEmoticonIcon>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>

        </div>
    )
}

export default MessageSender
