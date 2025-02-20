import { useEffect, useState } from "react";
import { useParams , Link } from "react-router-dom";
import axios from "axios";
import Tag from "../../components/Tag/Tag";
import "./CommentsPage.scss";
import CommentsDisplay from "../../components/CommentsDisplay/CommentsDisplay";

// function CommentsPage() {
//     const { id } = useParams();
//     const [photo, setPhoto] = useState(null);
//     const [comments, setComments] = useState(null);
  
//     useEffect(() => {
//       fetchPhoto();
//     }, []);
  
//     useEffect(() => {
//       fetchComments();
//     }, [id]);
  
//     async function fetchPhoto() {
//       const { data } = await axios.get(
//         `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}?api_key=1c1459ab-a5fe-4f24-a3d6-a9b6f153981e`
//       );
//       setPhoto(data);
//     }
  
//     async function fetchComments() {
//       const { data } = await axios.get(
//         `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=1c1459ab-a5fe-4f24-a3d6-a9b6f153981e`
//       );
//       setComments(data);
//     }
  
//     if (!photo || !comments) {
//       return <div>Loading...</div>;
//     }
  
//     return (
//       <div className="comments-page__container">
//         {/* photo -- {id} */}

//         <img className="comments-page__image" src={photo.photo} alt={photo.photoDescription} />
//         {/* ^^ not sure if this is right */}

//         {/* <div>title: {photo.photoDescription}</div> */}
//         <div>num comments: {comments.length}</div>
//         {/* <Tag>{photo.photographer}</Tag> */}
//         {photo.tags.map((tag) => (
//         <Tag tag={tag} key={tag} /> ))}
//         <div>
//           <Link to="/">Back</Link>
//         </div>
//       </div>
//     );
//   }
  
//   export default CommentsPage;



// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
// import Tag from "../../components/Tag/Tag";
// import CommentsDisplay from "../../components/CommentsDisplay"; // Import the new component
// import "./CommentsPage.scss";

function CommentsPage() {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchPhoto();
    fetchComments();
  }, [id]);

  async function fetchPhoto() {
    const { data } = await axios.get(
      `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}?api_key=1c1459ab-a5fe-4f24-a3d6-a9b6f153981e`
    );
    setPhoto(data);
  }

  async function fetchComments() {
    const { data } = await axios.get(
      `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=1c1459ab-a5fe-4f24-a3d6-a9b6f153981e`
    );
    setComments(data);
  }

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className="comments-page__container">
      <div className="photo-section">
        <img className="comments-page__image" src={photo.photo} alt={photo.photoDescription} />
        {/* <h2>{photo.photoDescription}</h2> */}
        <p>Photographer: {photo.photographer}</p>
        <div className="tags-container">
          {photo.tags.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
      </div>

    </div>
      <CommentsDisplay comments={comments} />
      <div>
        <Link to="/">Back</Link>
      </div>
    </>
  );
}

export default CommentsPage;