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

  handleSubmit = event => {
    event.preventDefault();
    const comment = {
      username: 'Thomas',
      text: this.input.value,
    };
    this.input.value = '';

    this.setState(({ comments }) => ({
      comments: [...comments, comment],
    }));
  };

  render() {
    const { username, thumbnailUrl, imageUrl, likes, timestamp } = this.props;
    const { comments } = this.state;
    return (
      <article className="post">
        <header className="post__header">
          <div className="post__thumbnail">
            <img className="post__thumbnail__image" src={thumbnailUrl} />
          </div>
          <h4 className="post__username">{username}</h4>
        </header>
        <img className="post__image" src={imageUrl} />
        <SocialBar {...{ likes, input: this.input }} />
        <CommentContainer comments={comments} timestamp={timestamp} />
        <form onSubmit={this.handleSubmit}>
          <input
            className="comment__input"
            ref={r => (this.input = r)}
            placeholder="Add a comment..."
            autoComplete="off"
          />
        </form>
      </article>
    );
  }
}
