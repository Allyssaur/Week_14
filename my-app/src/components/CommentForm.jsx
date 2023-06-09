import { useState } from 'react';

const CommentForm = ({          //The form and functions involved with creating a comment
    handleSubmit, 
    submitLabel, 
    hasCancelButton = false, 
    initialText = '', 
    handleCancel 
}) => {
    const [text, setText] = useState(initialText);
    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(text);
        setText("");
    };

    return (
        <form onSubmit={onSubmit}>
            <textarea 
            className="comment-form-textarea" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            />
        <button className="comment-form-button">{submitLabel}
        </button>
        {hasCancelButton && (
            <button 
            type="button" 
            className="comment-form-button comment-form-cancel-button" 
            onClick={handleCancel} 
            >Cancel</button>
        )}
        </form>
    );
  };
  
  export default CommentForm;