import React from "react";
import Tag from "../Tag/Tag";
import "./FilterDrawer.scss";
import axios from "axios";
import { useState, useEffect } from "react";

function FilterDrawer({ drawerOpen, selectedTag, setSelectedTag }) {
  const [tags, setTags] = useState([]);
  const handleTagClick = (tag) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  async function fetchTags() {
    try {
      const { data } = await axios.get(`http://localhost:8080/tags`);
      setTags(data);
    } catch (error) {
      console.error("Error fetching tags:", error);
    }
  }

  return (
    <div className={`drawer ${drawerOpen ? "drawer--open" : ""}`}>
      <h2 className="filter__title">Filters</h2>
      <ul className="filter__list">
        {tags.map((tag) => (
          <li key={tag}>
            <Tag
              tag={tag}
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
  );
}

export default FilterDrawer;
