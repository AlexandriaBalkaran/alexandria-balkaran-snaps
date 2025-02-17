import React from 'react';
import "/src/components/Filter/Filter.scss";

function FilterButton({ isActive, drawerOpen, handleButtonClick }) {
  return (
    <div className="filter__button">
      <button 
        className={`filter__button--color ${isActive ? 'active' : ''}`}
        onClick={handleButtonClick}
      >
        {drawerOpen ? "" : ""} Filters
        <img className="filter__image" src="/src/assets/images/Filter.svg" alt="filter icon" />
      </button>
    </div>
  );
}

export default FilterButton;