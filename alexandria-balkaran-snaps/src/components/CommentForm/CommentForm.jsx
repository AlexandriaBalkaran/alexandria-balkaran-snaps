// Maaybe we shouldn't use on change 

import { useState } from "react";
import ".CommentForm.scss";

function CommentForm() {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
  
    const handleNameChange = (event) => {
        setName(event.target.value);
      };
    
      const handleCommentChange = (event) => {
        setComment(event.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();

return (
    <form onSubmit={handleSubmit}>
      <label>
        Name: <input 
        type="name" 
        name="name-input" 
        onChange={handleChangeName} 
        value={name}/>
      </label>
      <label>
        Comment: <input 
        type="comment" 
        name="comment-input" 
        onChange={handleChangeComment} 
        value={comment}
        className={`form__input ${isPasswordValid() ? "" : "form__input--invalid"}`} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;
