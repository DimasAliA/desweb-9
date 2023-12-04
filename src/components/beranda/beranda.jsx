import React, { useState } from "react";
import "./beranda.css";

const SocialMediaCard = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleToggleComments = () => {
    setShowComments(!showComments);
  };

  const handleAddComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="post">
      <img
        src="https://placekitten.com/300/200" // Ganti dengan URL gambar post
        alt="Post"
        className="post-image"
      />
      <div className="post-icons">
        <span className={`icon ${isLiked ? "liked" : ""}`} onClick={handleLike}>
          ❤️
        </span>
        <span className="icon" onClick={handleToggleComments}>
          💬
        </span>
        <span className="icon">💾</span>
      </div>
      {showComments && (
        <div className="comments">
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Add a comment..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddComment(e.target.value);
                e.target.value = "";
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

export default SocialMediaCard;
