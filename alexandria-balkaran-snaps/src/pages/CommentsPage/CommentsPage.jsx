import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./CommentsPage.scss";
import CommentsDisplay from "../../components/CommentsDisplay/CommentsDisplay";
import CommentForm from "../../components/CommentForm/CommentForm";
import HeaderCommentsPage from "../../components/HeaderCommentsPage/HeaderCommentsPage";
import CommentsPhotoCard from "../../components/CommentsPhotoCard/CommentsPhotoCard";

function CommentsPage() {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState([]);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  useEffect(() => {
    fetchPhoto();
    fetchComments();
  }, [id]);

  async function fetchPhoto() {
    try {
      const { data } = await axios.get(`http://localhost:8080/photos/${id}`);
      setPhoto(data);
    } catch (error) {
      console.error("Error fetching photo:", error);
    }
  }

  async function fetchComments() {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/photos/${id}/comments`
      );
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HeaderCommentsPage />
      <div className="comments-photocard__container-desktop">
        <CommentsPhotoCard photo={photo} formatDate={formatDate} />
      </div>
      <div className="comments-form__container-desktop">
        <CommentForm
          commentsURL={`http://localhost:8080/photos/${id}/comments`}
          fetchComments={fetchComments}
          id={id}
        />
      </div>
      <div className="comments-display__container-desktop">
        <CommentsDisplay comments={comments} />
      </div>
    </>
  );
}

export default CommentsPage;
