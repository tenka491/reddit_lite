import React from 'react';

const SubReddit = ({subreddit}) => {
  return <div>{subreddit.data.author}</div>;
};

export default SubReddit;
