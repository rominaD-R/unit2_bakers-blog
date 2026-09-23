import React from 'react'
import { useStateContext } from '../ContextProvider'
import Comment from './Comment';

export default function CommentSection( { comments, onAdd, refreshData } ) {

  const { token, setToken, user, setUser } = useStateContext();

  // Function to edit comment content
  const editComment = async (comment) => {
    const url = `http://localhost:8080/comments/edit/${comment.id}`;
    const newComment = document.getElementById(comment.id).value;
    try {
      console.log("This URL is:  " + url);
      const data = await fetch(url, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          content: newComment
        })
      })
      .then((res) => res.json());
      console.log(data);
      refreshData();
    } catch (error) {
      console.log("Error:");
      console.error(error.message);
    }
  }

  // Function to delete comment
  const deleteComment = async (commentId) => {
    const url = `http://localhost:8080/comments/comment/${commentId}`;
    try {
      console.log("This URL is:  " + url);
      await fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })
      refreshData();
    } catch (error) {
      console.log("Error:");
      console.error(error.message);
    }
  }
  
  return (
    <div className='comments-section'>
        <hr />
        <h4>Comments</h4>
        {comments.map((comment) => <Comment key={comment.id} comment={comment} ownerId={comment.userId} onEdit={() => editComment(comment)} onDelete={() => deleteComment(comment.id)}/>)}
        {user && token ? 
          <form id='commentForm' action="">
              <b>Add your comment!</b>
              <div>
                  <textarea name="comment" id="commentText"></textarea>
                  <button onClick={onAdd} id='submitComment'>Post Comment</button>
              </div>                    
          </form> :
          <div>
            <p><b>Please log in to leave a comment.</b></p>
          </div>
        }
    </div>
  )
}
