// import React from 'react'
import Share from '../share/Share'
import './feed.css'
import Post from "../post/Post";
const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
      <Post/>
         <Post/>
         
         
      </div>
    </div>
  )
}

export default Feed
