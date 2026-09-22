import React from 'react'
import { useStateContext } from '../ContextProvider'

export default function CommentSection( { comments, onAdd } ) {

  const { token, setToken, user, setUser } = useStateContext();
  
  return (
    <div className='comments-section'>
        <hr />
        <h4>Comments</h4>
        {comments.map((comment) => <div className='comment'>{comment.content}</div>)}
        {user && token ? 
          <form id='commentForm' action="">
              <b>Add your comment!</b>
              <div>
                  <textarea name="comment" id="commentText"></textarea>
                  <button onClick={onAdd} id='submitComment'>Post Comment</button>
              </div>                    
          </form> :
          <div>
            <p>Please log in to leave a comment.</p>
          </div>
        }
    </div>
  )
}
