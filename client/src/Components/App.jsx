import React, { PureComponent, Fragment } from 'react';

import Header from './Header';
import Post from './Posts';
import Aside from './Sidebar';
import posts from '../tempPostData.json';

export default class extends PureComponent {
  static displayName = 'App';

  state = { posts, search: '' };

  getPosts = () => {
    const { search, posts } = this.state;
    if (!search) return posts;

    return posts.filter(({ username }) => {
      return username.includes(search);
    });
  };

  searchHandler = search => {
    this.setState({ search });
  };

  render() {
    return (
      <Fragment>
        <Header searchHandler={this.searchHandler} />
        <main className="content-wrapper">
          <div className="posts-wrapper">
            {this.getPosts().map(post => (
              <Post key={post.timestamp} {...post} />
            ))}
          </div>
          <Aside />
        </main>
      </Fragment>
    );
  }
}
