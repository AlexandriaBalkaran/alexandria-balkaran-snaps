import React from 'react';
import "./Tag.scss";

function Tag({ tag, isClickable = false, selectedTag, onClick }) {
  return (
    <button 
      className={`tag 
        ${isClickable ? "tag--clickable" : ""} 
        ${selectedTag === tag ? "tag--selected" : ""}`
      }
      onClick={() => isClickable && onClick(tag)}
    >
      {tag}
    </button>
  );
}

export default Tag;