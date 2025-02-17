import React from "react";
import Tag from "../Tag/Tag";
import tags from "../../data/tags.json";
import "./FilterDrawer.scss";

function FilterDrawer({ drawerOpen, selectedTag, setSelectedTag }) {
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
        <ul className="filter__list">
          {tags.map((tag) => (
            <li key={tag}>
              <Tag
                tag={tag}
                isClickable={true}
                selectedTag={selectedTag}
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
