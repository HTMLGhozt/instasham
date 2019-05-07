import { hot } from 'react-hot-loader/root';
import React, { Fragment, useState } from 'react';

import Header from './Components/Header';
import Post from './Components/Posts';
import Aside from './Components/Sidebar';
import tempPosts from './tempPostData.json';

const getPosts = (posts, search) =>
  posts.filter(({ username }) => username.includes(search));

function App() {
  const [posts] = useState(tempPosts);
  const [search, setSearch] = useState('');

  return (
    <Fragment>
      <Header searchHandler={setSearch} />
      <main className="content-wrapper">
        <div className="posts-wrapper">
          {getPosts(posts, search).map(post => (
            <Post key={post.timestamp} {...post} />
          ))}
        </div>
        <Aside />
      </main>
    </Fragment>
  );
}

export default hot(App);
