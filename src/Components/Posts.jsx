import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import CommentContainer from './CommentContainer';
import SocialBar from './SocialBar';

export default class extends PureComponent {
  static displayName = 'Post';

  static propTypes = {
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
      }),
    ),
  };

  static defaultProps = {
    comments: [],
  };

  state = {
    comments: [],
    text: '',
  };

  componentDidMount() {
    const { comments } = this.props;
    this.setState({ comments });
  }

  handleInput = text => {
    this.setState({ text });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState(({ comments, text }) => ({
      comments: [...comments, { username: 'Thomas', text }],
      text: '',
    }));
  };

  render() {
    const { username, thumbnailUrl, imageUrl, likes, timestamp } = this.props;
    const { comments } = this.state;
    return (
      <article className="post">
        <header className="post__header">
          <img className="post__thumbnail" src={thumbnailUrl} />
          <h4 className="post__username">{username}</h4>
        </header>
        <img className="post__image" src={imageUrl} />
        <SocialBar {...{ likes, input: this.input }} />
        <CommentContainer comments={comments} timestamp={timestamp} />
        <form onSubmit={this.handleSubmit}>
          <input
            ref={r => (this.input = r)}
            onChange={e => this.handleInput(e.target.value)}
            className="comment__input"
            placeholder="add a comment..."
            autoComplete="off"
          />
        </form>
      </article>
    );
  }
}
