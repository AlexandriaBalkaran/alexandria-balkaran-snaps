// import { useState } from "react";
// import Tag from "/src/components/Tag/Tag.jsx";
// import tags from "/src/data/tags.json"; // Import tags here
// import "/src/components/Filter/Filter.scss";

// function FilterDrawer({ selectedTag, setSelectedTag }) {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   return (
//     <div>
//       <div className="filter__button">
//         <button
//           onClick={() => {
//             setDrawerOpen(!drawerOpen);
//           }}
//         >
//           {drawerOpen ? "Close Filters" : "Filters"}
//         </button>
//       </div>

//       <div className={`drawer ${drawerOpen ? "drawer--open" : ""}`}>
//         <h2>Filters</h2>

//         <ul className="filter__list">
//           {tags.map((tag) => (
//             <li
//               key={tag}
//               onClick={() => {
//                 setSelectedTag((prev) => (prev === tag ? null : tag));
//               }}
//             >
//               <Tag tag={tag} isClickable selectedTag={selectedTag} />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default FilterDrawer;