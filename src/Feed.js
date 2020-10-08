import React, { useEffect, useState } from 'react'

import Post from './Post'

import StoryReel from './StoryReel.js'

import MessageSender from './MessageSender.js'

import db from './firebase'


import "./Feed.css"

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
                console.log(snapshot)
                setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
            });
    }, []);
    return (
        <div className="feed">
            <StoryReel />
            {/* Story Reel */},
            {/*Message Sender */}
            <MessageSender />
            {posts.map(post => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}
        </div>
    )
}

export default Feed
