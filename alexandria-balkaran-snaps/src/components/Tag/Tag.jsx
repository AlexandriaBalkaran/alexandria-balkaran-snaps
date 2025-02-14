import "./Tag.scss";

function Tag({ tag, isClickable = false, selectedTag }) {
  return (
    <button className={`tag ${isClickable ? "tag--clickable" : ""} ${selectedTag === tag ? "tag--selected" : ""}`}>
      {tag}
    </button>
  );
}

export default Tag;