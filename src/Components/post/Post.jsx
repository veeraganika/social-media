
import React, { useState } from 'react';
import { MdMoreVert } from 'react-icons/md';
import { FcLike } from 'react-icons/fc';
import tajmahal from '../../../public/asset/tajmahal.jpg';
import like from '../../../public/asset/like.png';
import heart from '../../../public/asset/heart.png';
import flowers from'../../../public/asset/flowers.webp';
import './post.css';

const Post = () => {
  const [likeCount, setLikeCount] = useState(50); 
  const [comments, setComments] = useState([
    "Great post!",
    
  ]); 

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1); 
  };

  const handleAddComment = (event) => {
    event.preventDefault();
    const newComment = event.target.comment.value.trim();
    if (newComment) {
      setComments([...comments, newComment]); 
      event.target.comment.value = ''; 
    }
  };

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src='https://th.bing.com/th?id=OIP.24UnjsufqszR2pryS4PCIAHaJQ&w=223&h=279&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' alt='' className="topbarImg" />
            <span className='postUsername'>Honey</span>
            <span className='postDate'>5 minutes ago</span>
           
          </div>
         
          <div className="postTopRight">
            <MdMoreVert size={20} />
          </div>
        </div>
      </div>
      <div className="postCenter">
        <span className="postText">Hey, this is my first post</span>
        <img className="postImage" src={tajmahal} alt='' />
        
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <img
            className="likeIcon"
            src={like}
            alt='Like'
            onClick={handleLikeClick}
          />
          <img className="heartIcon" src={heart} alt='Heart' />
          <span className="postLikeCounter">{likeCount} People Liked this Post</span>
        </div>
        <div className="postBottomRight">
          <span className="postCommentList">{comments.length} comments</span>
        </div>
      </div>
      <div className="postComments">
        <ul className="commentsList">
          {comments.map((comment, index) => (
            <li key={index} className="commentItem">{comment}</li>
          ))}
        </ul>
        <form onSubmit={handleAddComment} className="commentForm">
          <input
            type="text"
            name="comment"
            placeholder="Add a comment..."
            className="commentInput"
          />
          <button type="submit" className="commentButton">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Post;
