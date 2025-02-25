import React from "react";
import Tag from "../Tag/Tag";
import "./FilterDrawer.scss";
// import tags from "../../data/tags.json";
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
      const { data } = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/tags?api_key=09e18504-4f04-4e40-b721-d3462e1162a8`
      );
      setTags(data);
    } catch (error) {
      console.error("Error fetching tags:", error);
    }
  }

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
