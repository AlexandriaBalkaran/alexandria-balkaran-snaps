import { useEffect, useState } from "react";
import { useParams , Link } from "react-router-dom";
import axios from "axios";
import Tag from "../../components/Tag/Tag";
import "./CommentsPage.scss";
import CommentsDisplay from "../../components/CommentsDisplay/CommentsDisplay";
import CommentForm from "../../components/CommentForm/CommentForm"
// import "/src/data/tags.json"

function CommentsPage() {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState([]);
  // const [tags, setTags] = useState([]);
  const commentsURL = `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=09e18504-4f04-4e40-b721-d3462e1162a8`

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString()
    };

  useEffect(() => {
    fetchPhoto();
    fetchComments();
  }, [id]);

  async function fetchPhoto() {
    const { data } = await axios.get(
      `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}?api_key=09e18504-4f04-4e40-b721-d3462e1162a8`
    );
    setPhoto(data);
  }
  async function fetchComments() {
    const { data } = await axios.get(commentsURL);
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
        <div className="tags-container">
          {photo.tags.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
            {/* {tags.map((tag) => (
              <Tag tag={tag} key={tag} />
            ))} */}
        </div>
        <p>Photo by {photo.photographer}</p>
        <p>Likes: {photo.likes}</p>
        <p>{formatDate(photo.timestamp)}</p>
      </div>
        
    </div>
      <div>
          <CommentForm commentsURL={commentsURL} fetchComments={fetchComments}/>
      </div>
      <div>
        <CommentsDisplay comments={comments} />
      </div>
      <div>
        <Link to="/">Back</Link>
      </div>
    </>
  );
}

export default CommentsPage;


// import { useEffect, useState } from "react";
// import { useParams , Link } from "react-router-dom";
// import axios from "axios";
// import Tag from "../../components/Tag/Tag";
// import "./CommentsPage.scss";
// import CommentsDisplay from "../../components/CommentsDisplay/CommentsDisplay";
// import CommentForm from "../../components/CommentForm/CommentForm"

// function CommentsPage() {
//   const { id } = useParams();
//   const [photo, setPhoto] = useState(null);
//   const [comments, setComments] = useState([]);
//   const commentsURL = `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=09e18504-4f04-4e40-b721-d3462e1162a8`

//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleDateString()
//     };

//   useEffect(() => {
//     fetchPhoto();
//     fetchComments();
//   }, [id]);

//   async function fetchPhoto() {
//     const { data } = await axios.get(
//       `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}?api_key=09e18504-4f04-4e40-b721-d3462e1162a8`
//     );
//     setPhoto(data);
//   }

//   async function fetchComments() {
//     const { data } = await axios.get(commentsURL);
//     setComments(data);
//   }

//   if (!photo) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//     <div className="comments-page__container">
//       <div className="photo-section">
//         <img className="comments-page__image" src={photo.photo} alt={photo.photoDescription} />
//         <div className="tags-container">
//           {photo.tags.map((tag) => (
//             <Tag tag={tag} key={tag} />
//           ))}
//         </div>
//         <p>Photo by {photo.photographer}</p>
//         <p>Likes: {photo.likes}</p>
//         <p>{formatDate(photo.timestamp)}</p>
//       </div>
        
//     </div>
//       <div>
//           <CommentForm commentsURL={commentsURL} fetchComments={fetchComments}/>
//       </div>
//       <div>
//         <CommentsDisplay comments={comments} />
//       </div>
//       <div>
//         <Link to="/">Back</Link>
//       </div>
//     </>
//   );
// }

// export default CommentsPage;