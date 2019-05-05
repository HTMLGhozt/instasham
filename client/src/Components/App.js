import React, { Fragment, useState } from 'react';

import Header from './Header';
import Post from './Posts';
import Aside from './Sidebar';
import tempPosts from '../tempPostData.json';

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

export default App;
