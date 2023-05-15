import { useState } from 'react';
import Modal from './Modal';
import CommentSection from './CommentSection';

const CommentButton = ({films, title}) => {     //the comment button and functions to open up modal when clicked

    return (
        <>
            <button type="button" class="Commentbtn" data-bs-toggle="modal" data-bs-target="#myModal">
                Reviews
            </button>
        
        <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                        {films.map((film) => (
                            <div>
                            <h5 class="modal-title">Reviews and Comments</h5>
                            </div>
                            ))}
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        <div class="modal-body">
                            <CommentSection currentUserId='1' />
                        </div>
                    </div>
                </div>
            </div>
        </div></>
    )
}

export default CommentButton;