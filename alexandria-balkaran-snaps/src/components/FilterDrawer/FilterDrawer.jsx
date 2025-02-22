import React from "react";
import Tag from "../Tag/Tag";
import "./FilterDrawer.scss";
// import tags from "../../data/tags.json";

function FilterDrawer({ drawerOpen, selectedTag, setSelectedTag, tags }) {
  const handleTagClick = (tag) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
  };

  return (
    <div className={`filter__content ${drawerOpen ? "drawer-open" : ""}`}>
      <div className={`drawer ${drawerOpen ? "drawer--open" : ""}`}>
        <h2 className="filter__title">Filters</h2>
        {/* <ul className="filter__list">
          {tags.map((tag) => (
            <li key={tag}>
              <Tag
                tag={photo.tag}
                isClickable={true}
                drawerOpen={drawerOpen} 
                selectedTag={selectedTag}
                setSelectedTag={setSelectedTag}
                onClick={() => handleTagClick(tag)}
              />
            </li>
          ))} */}
            <ul className="filter__list">
          {tags && tags.map((tag) => (
            <li key={tag}>
              <Tag
                tag={photo.tag}
                isClickable={true}
                drawerOpen={drawerOpen} 
                selectedTag={selectedTag}
                setSelectedTag={setSelectedTag}
                onClick={() => handleTagClick(tag)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilterDrawer;
