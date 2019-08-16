import React, { useContext } from 'react';
import { SubredditContext } from '../ducks/SubredditContext';

const Comments = () => {
  const { num_comments } = useContext(SubredditContext) 
  return (
    <div className="comment-counter">
      <span className="far fa-comment-alt" />
      <span>{num_comments}</span>
    </div>
  );
}

export default Comments;
