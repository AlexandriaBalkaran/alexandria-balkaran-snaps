import React from 'react';

function CommentsDisplay({ comments }) {

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString(timestamp)
        };
    
  return (
    <div className="comments-display">
      <h3>Comments ({comments.length})</h3>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <p className="comment-author">{comment.name}</p>
          <p className="comment-text">{comment.comment}</p>
          <p className="comment-date">{formatDate(comment.timestamp)}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentsDisplay;