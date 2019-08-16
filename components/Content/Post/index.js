import React, { useContext, useState } from 'react';
import { SubredditContext } from '../ducks/SubredditContext';
import * as Styled from './Post.styles';

const Post = () => {
  const { author, permalink, num_comments, selftext, title, created_utc, ups } = useContext(SubredditContext);

  const [counter, updateCounter] = useState(ups)

  return (
    <Styled.PostOuterWrapper>
      <Styled.ContentWrapper>
        <h2>
          <a
            href={`http://reddit.com/${permalink}`}
            className="title-wrapper"
            target="_blank"
          >
            {title}
          </a>
        </h2>
        <div className="text-wrapper">
          <p>{selftext}</p>
        </div>
        <div className="credits">
          <span className="author">
            {author === "[deleted]" ? "Unknown" : author}
          </span>
          <span className="created-on">
            Posted:&nbsp;
            {new Intl.DateTimeFormat("en-US", {
              hour: "numeric",
              minute: "numeric",
              second: "numeric"
            }).format(created_utc)}
          </span>
        </div>
      </Styled.ContentWrapper>
      <Styled.CounterComments>
        <div className="up-votes-wrapper">
          <span
            className="fa fa-caret-up"
            onClick={() => updateCounter(counter + 1)}
          />
          <span>{counter}</span>
          <span
            className="fa fa-caret-down"
            onClick={() => updateCounter(counter - 1)}
          />
        </div>
        <div className="comment-counter">
          <span className="far fa-comment-alt" />
          <span>{num_comments}</span>
        </div>
      </Styled.CounterComments>
    </Styled.PostOuterWrapper>
  );
}

export default Post;
