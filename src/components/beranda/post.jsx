import React, { useState } from "react";
import { FaHeart, FaComment, FaSave, FaTrash } from "react-icons/fa";
import "./post.css";

const Posting = () => {
  const [postImage, setPostImage] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [posts, setPosts] = useState([]);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setPostImage(imageUrl);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleToggleComments = (postId) => {
    setShowComments((prevShowComments) => ({
      ...prevShowComments,
      [postId]: !prevShowComments[postId],
    }));
  };

  const handleDeleteComment = (postId, commentId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        const updatedComments = post.comments.filter(
          (comment) => comment.id !== commentId
        );
        return {
          ...post,
          comments: updatedComments,
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handlePost = () => {
    if (postImage.trim() !== "") {
      const newPost = {
        id: `${Date.now()}-${posts.length}`,
        postImage,
        comments: [],
      };
      setPosts([newPost, ...posts]);
      setPostImage("");
    }
  };

  const handleDeletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  const handleAddCommentToPost = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        const newCommentObj = {
          id: `${Date.now()}-${post.comments.length}`,
          user: {
            imageUrl: "https://placekitten.com/50/50",
            username: "Felix",
          },
          text: newComment,
        };
        return {
          ...post,
          comments: [...post.comments, newCommentObj],
        };
      }
      return post;
    });
    setPosts(updatedPosts);
    setNewComment("");
  };

  return (
    <div>
      <div className="post-actions">
        <input type="file" onChange={handleUpload} />
        <button onClick={handlePost}>Post</button>
      </div>

      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.postImage} alt="Post" className="post-image" />

          <div className="post-icons">
            <span className={`icon ${isLiked ? "liked" : ""}`} onClick={handleLike}>
              <FaHeart />
            </span>
            <span className="icon" onClick={() => handleToggleComments(post.id)}>
              <FaComment />
            </span>
            <span className="icon">
              <FaSave />
            </span>
            <span className="icon" onClick={() => handleDeletePost(post.id)}>
              <FaTrash />
            </span>
          </div>

          {showComments[post.id] && (
            <div className="comments">
              <ul>
                {post.comments.map((comment) => (
                  <li key={comment.id}>
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
                    <span
                      className="delete-comment"
                      onClick={() => handleDeleteComment(post.id, comment.id)}
                    >
                      <FaTrash />
                    </span>
                  </li>
                ))}
              </ul>
              <div className="comment-input-container">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleAddCommentToPost(post.id)
                  }
                />
                <button onClick={() => handleAddCommentToPost(post.id)}>
                  
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Posting;
