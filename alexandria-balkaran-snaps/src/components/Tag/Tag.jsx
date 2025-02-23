import React from "react";
import "./Tag.scss";

function Tag({ tag, isClickable = false, selectedTag, onClick, isCommentsPage = false }) {
  return (
    <button
      className={`tag 
        ${isClickable ? "tag--clickable" : ""} 
        ${selectedTag === tag ? "tag--selected" : ""}
        ${isCommentsPage ? "tag--comments-page" : ""}`}
      onClick={() => isClickable && onClick(tag)}
    >
      {tag}
    </button>
  );
}

export default Tag;
