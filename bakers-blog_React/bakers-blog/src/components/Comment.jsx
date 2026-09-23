import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useStateContext } from '../ContextProvider'
import './css/Comment.css'

export default function Comment( {comment, ownerId, onEdit, onDelete} ) {
    const { token, setToken, user, setUser } = useStateContext();

    const [edit, setEdit] = useState(false);                                        // If 'edit' is true, then you are able to edit the comment.

    return (
        <div>
            {edit ? 
                <div>
                    <input type="text" name="editComment" id={comment.id} />
                    <button onClick={() => {
                        setEdit(false);
                        onEdit();
                    }}>
                        Edit Comment
                    </button>
                </div>
            :
                <div className='comment' id={comment}>
                    <span>{comment.content}</span>
                    {user && user.id == ownerId ? 
                        <div className='comment-buttons'>
                            <button onClick={() => setEdit(true)}><FontAwesomeIcon icon={faPencil} /></button>
                            <button onClick={onDelete}><FontAwesomeIcon icon={faTrashCan} /></button>
                        </div>
                        :
                        <div></div>
                    }
                </div>
        }
        </div>
    )
}
