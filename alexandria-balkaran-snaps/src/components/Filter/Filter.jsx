import { useState } from "react";
import photos from "/src/data/photos.json";
import "/src/components/Filter/Filter.scss";
import FilterButton from "../FilterButton/FilterButton";
import FilterDrawer from "../FilterDrawer/FilterDrawer";
import FilteredPhotos from "../FilteredPhotos/FilteredPhotos";

function Filter() {
  const [selectedTag, setSelectedTag] = useState(null);
  const filteredPhotos = selectedTag ? photos.filter((photo) => photo.tags.includes(selectedTag)) : photos;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setDrawerOpen(!drawerOpen);
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="header--fixed">
        <FilterButton 
          isActive={isActive}
          drawerOpen={drawerOpen}
          handleButtonClick={handleButtonClick}/>
      </div>

      <FilterDrawer 
        drawerOpen={drawerOpen}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}/>

      <FilteredPhotos filteredPhotos={filteredPhotos} />
    </>
  );
}

export default Filter;