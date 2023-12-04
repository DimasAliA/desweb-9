import React, { useState } from "react";
import { FaHeart, FaComment, FaSave } from "react-icons/fa";
import "./beranda.css";

const SocialMediaCard = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const [newComment, setNewComment] = useState("");
  const [userProfile, setUserProfile] = useState({
    imageUrl: "https://placekitten.com/50/50",
    username: "Felix",
  });

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleToggleComments = () => {
    setShowComments(!showComments);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const updatedComments = [
        ...comments,
        { text: newComment, user: userProfile },
      ];
      setComments(updatedComments);
      setNewComment("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddComment();
    }
  };

  return (
    <div className="post">
      <div className="user-profile">
        <img
          src={userProfile.imageUrl}
          alt="Profile"
          className="profile-image"
        />
        <span className="username">{userProfile.username}</span>
      </div>
      <img
        src="https://placekitten.com/300/200"
        alt="Post"
        className="post-image"
      />
      <div className="post-icons">
        <span className={`icon ${isLiked ? "liked" : ""}`} onClick={handleLike}>
          <FaHeart />
        </span>
        <span className="icon" onClick={handleToggleComments}>
          <FaComment />
        </span>
        <span className="icon">
          <FaSave />
        </span>
      </div>
      {showComments && (
        <div className="comments">
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>
                <div className="comment-user-profile">
                  <img
                    src={comment.user.imageUrl}
                    alt="Profile"
                    className="comment-profile-image"
                  />
                  <span className="comment-username">
                    {comment.user.username}
                  </span>
                </div>
                <p>{comment.text}</p>
              </li>
            ))}
          </ul>
          <div className="comment-input-container">
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleAddComment}></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialMediaCard;
