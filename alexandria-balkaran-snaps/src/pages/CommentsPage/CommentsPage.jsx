import { useEffect, useState } from "react";
import { useParams , Link } from "react-router-dom";
import axios from "axios";
import Tag from "../../components/Tag/Tag";

function CommentsPage() {
    const { id } = useParams();
    const [photo, setPhoto] = useState(null);
    const [comments, setComments] = useState(null);
  
    useEffect(() => {
      fetchPhoto();
    }, []);
  
    useEffect(() => {
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
  
    if (!photo || !comments) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        photo -- {id}
        <div>title: {photo.photoDescription}</div>
        <div>num comments: {comments.length}</div>
        <Tag>{photo.photographer}</Tag>
        <div>
          <Link to="/">Back</Link>
        </div>
      </div>
    );
  }
  
  export default CommentsPage;