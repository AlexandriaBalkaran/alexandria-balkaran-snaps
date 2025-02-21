// Jujuans way but i'm confused
// import { useState } from "react";
// import ".CommentForm.scss";

// function CommentForm() {
//     const [name, setName] = useState("");
//     const [comment, setComment] = useState("");
  
//     const handleNameChange = (event) => {
//         setName(event.target.value);
//       };
    
//       const handleCommentChange = (event) => {
//         setComment(event.target.value);
//       };

//       const handleSubmit = (event) => {
//         event.preventDefault();

// return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name: <input 
//         type="name" 
//         name="name-input" 
//         onChange={handleChangeName} 
//         value={name}/>
//       </label>
//       <label>
//         Comment: <input 
//         type="comment" 
//         name="comment-input" 
//         onChange={handleChangeComment} 
//         value={comment} />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// export default CommentForm;



import { useState } from "react";
import "./CommentForm.scss";
import axios from "axios";

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

        if (!name || !comment) {
        alert('You must fill out both name and comment fields');
        return;
        }

    //     console.log("submit", name, comment);
    //     try {
    //       await axios.post(URL, { name, comment });
    //       fetchComments();
    //     } catch (e) {
    //       console.error(e);
    //     }
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







// JONS WAY BELOW

// import React, { useState } from 'react';
// import axios from 'axios';

// export default function Form() {
//   const [comments, setComments] = useState(null);

//   const [name, setName] = useState("");
//   const [comment, setComment] = useState("");

//   console.log(name, comment);

//   useEffect(() => {
//     fetchComments();
//   }, []);

//   async function fetchComments() {
//     const { data } = await axios.get(URL);
//     console.log(data);
//     setComments(data);
//   }

//   if (!comments) {
//     return <div>loading comments...</div>;
//   }

//   return (
//     <>
//       <form
//         onSubmit={async (e) => {
//           e.preventDefault();
//           console.log("submit", name, comment);
//           try {
//             await axios.post(URL, { name, comment });
//             fetchComments();
//           } catch (e) {
//             console.error(e);
//           }
//         }}
//       >
//         <label>
//           name:
//           <input
//             value={name}
//             onChange={(e) => {
//               setName(e.target.value);
//             }}
//           />
//         </label>

//         <label>
//           comment:
//           <textarea
//             value={comment}
//             onChange={(e) => {
//               setComment(e.target.value);
//             }}
//           />
//         </label>
//         <button disabled={!name || !comment}>submit</button>
//       </form>
//       <div>no: comments: {comments.length}</div>
//     </>
//   );
// }
