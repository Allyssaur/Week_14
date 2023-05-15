import { 
  getComments as getCommentsApi, 
  createComment as createCommentApi,
  deleteComment as deleteCommentApi,
  updateComment as updateCommentApi
} from './api';
import { useState, useEffect } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

const CommentSection = ({ currentUserId }) => {   //Pulls Comments from FE and BE together
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(backendComment => backendComment.parentId === null);

    const getReplies = commendId => {   //Pulls Replies and sets the time attributes
      return backendComments.filter(backendComment => backendComment.parentId === commendId).sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    };
    const addComment = (text, parentId) => {    //Sets text and parent Id to log a comment to the 'BE' and posts when clicking 'submit'
      console.log('addComment', text, parentId);
      createCommentApi(text, parentId).then(comment => {
        setBackendComments([comment, ...backendComments]);
        setActiveComment(null);           //Makes form disappear after clicking submit
      });
    }
    const deleteComment = (commentId) => {    //Deletes chosen comment and deletes from temp 'BE'
        if (window.confirm('Are you sure you wish to delete this comment?')) {
          deleteCommentApi(commentId).then(() => {
            const updatedBackendComments = backendComments.filter(
              (backendComment) => backendComment.id !== commentId
            );
            setBackendComments(updatedBackendComments);
          });
        }
    }
    const updateComment = (text, commentId) => {    //Sets a comment and the comment's Id to be updated with the temp 'BE'
      updateCommentApi(text, commentId).then(() => {
        const updatedBackendComments = backendComments.map(backendComment => {
          if (backendComment.id === commentId) {
            return { ...backendComment, body: text };
          }
          return backendComment
        });
        setBackendComments(updatedBackendComments);
        setActiveComment(null);
      });
    };
    

  useEffect(() => {     //Sets up the temp 'BE' api array
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  return (    //the React HTML for the comments section - comments can only be edited and deleted after 5 minutes due to BE being temporary array jsx file.
    <div className="comment-section">   
      <div className="comment-form-title">Write Your Own Review</div>
      <CommentForm submitLabel="Write" handleSubmit={ addComment } />
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment 
          key={rootComment.id} 
          comment={rootComment} 
          replies={getReplies(rootComment.id)}
          currentUserId={currentUserId} 
          deleteComment={deleteComment} 
          updateComment={updateComment}
          activeComment={activeComment}
          setActiveComment={setActiveComment}
          addComment={addComment}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;