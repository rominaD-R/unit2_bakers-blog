import React from 'react'

export default function CommentSection( { comments, onAdd } ) {
  return (
    <div className='comments-section'>
        <hr />
        <h4>Comments</h4>
        {comments.map((comment) => <div className='comment'>{comment}</div>)}
        <form id='commentForm' action="">
            <b>Add your comment!</b>
            <div>
                <textarea name="comment" id="commentText"></textarea>
                <button onClick={onAdd} id='submitComment'>Post Comment</button>
            </div>                    
        </form>
    </div>
  )
}
