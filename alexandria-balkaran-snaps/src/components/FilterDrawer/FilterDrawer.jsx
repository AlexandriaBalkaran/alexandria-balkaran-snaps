import React from 'react';
import Tag from "/src/components/Tag/Tag.jsx";
import tags from "/src/data/tags.json";

function FilterDrawer({ drawerOpen, selectedTag, setSelectedTag }) {
  return (
    <div className="filter__content">
      <div className={`drawer ${drawerOpen ? "drawer--open" : ""}`}>
        <h2 className="filter__title">Filters</h2>
        <ul className="filter__list">
          {tags.map((tag) => (
            <li
              key={tag}
              onClick={() => {
                if (selectedTag === tag) {
                  setSelectedTag(null);
                } else {
                  setSelectedTag(tag);
                }
              }}
            >
              <Tag tag={tag} isClickable selectedTag={selectedTag} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilterDrawer;