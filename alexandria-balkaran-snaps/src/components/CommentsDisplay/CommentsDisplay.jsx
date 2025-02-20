import React from 'react';

function CommentsDisplay({ comments }) {
  return (
    <div className="comments-display">
      <h3>Comments ({comments.length})</h3>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <p className="comment-author">{comment.name}</p>
          <p className="comment-text">{comment.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentsDisplay;