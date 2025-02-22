import { useState } from "react";
import "./CommentForm.scss";
import axios from "axios";

function CommentForm({fetchComments, commentsURL}) {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [error, setError] = useState(false);
  
    const handleNameChange = (event) => {
        setName(event.target.value);
        setError(false);
    };
    
    const handleCommentChange = (event) => {
        setComment(event.target.value);
        setError(false);
    };
    const handleSubmit =  async (event) => {
        event.preventDefault();
        setError(true);
        if (name.trim() === "" || comment.trim() === "") {
         return;
        }
        // alert('You must fill out both name and comment fields');
     
        // if (nameInput === "") {
        //     input.classList.add("container__potter-button-error");
        //     return;
        // }

        console.log("submit", name, comment);

        try {
        const response = await axios.post(commentsURL, { name, comment });
          fetchComments();

          setName("");
          setComment("");
          setError(false);
          return response
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
                value={name}
                // className={form__name && !name ? "error" : ""}
                className={`form__name ${error && name.trim("") === "" ? "form__name--invalid" : ""
                  }`}
                />
            </label>
            <label>
                Comment: <input 
                type="text" 
                name="comment-input" 
                onChange={handleCommentChange} 
                value={comment} 
                // className={error && !comment ? "error" : ""}
                className={`form__comment ${error && comment.trim("") === "" ? "form__comment--invalid" : ""
                }`}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default CommentForm;
