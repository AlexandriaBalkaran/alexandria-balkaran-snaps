import { useState } from "react";
import "./CommentForm.scss";
import axios from "axios";

function CommentForm({fetchComments, commentsURL}) {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
  
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    
    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit =  async (event) => {
        event.preventDefault();

        if (!name || !comment) {
        alert('You must fill out both name and comment fields');
        return;
        }

        console.log("submit", name, comment);
        try {
          await axios.post(commentsURL, { name, comment });
          fetchComments();
        } catch (e) {
          console.error(e);
        }
    };

    

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name: <input 
                type="text" 
                name="name-input" 
                onChange={handleNameChange} 
                value={name}/>
            </label>
            <label>
                Comment: <input 
                type="text" 
                name="comment-input" 
                onChange={handleCommentChange} 
                value={comment} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}


export default CommentForm;
