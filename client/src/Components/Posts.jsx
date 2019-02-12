// @flow
import React, { PureComponent } from 'react';

import CommentContainer from './CommentContainer';
import SocialBar from './SocialBar';

import type { Comment, PostObj } from './defaultFlow';

type Props = PostObj;

type State = {
  comments: Array<Comment>,
  text: string,
};

export default class extends PureComponent<Props, State> {
  static displayName = 'Post';

  state = {
    comments: [],
    text: '',
  };

  input: React$ElementRef<any> | React$ElementRef<'input'> = React.createRef();

  componentDidMount() {
    const { comments } = this.props;
    this.setState({ comments });
  }

  handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState(({ comments }) => ({
      comments: [
        ...comments,
        {
          username: 'Thomas',
          text: this.input.value,
        },
      ],
    }));
    this.input.value = '';
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
