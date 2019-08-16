import React from 'react';
import { Provider } from './ducks/SubredditContext';
import Post from './Post';

const SubReddit = ({subreddit}) => {
  return (
    <Provider
      value={{
        ...subreddit.data
      }}
    >
      <Post />
    </Provider>
  );
};

export default SubReddit;
