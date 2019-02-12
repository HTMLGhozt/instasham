// @flow
import React from 'react';
import moment from 'moment';
import type { Comment } from './defaultFlow';

type Props = {|
  timestamp: string,
  comments: Array<Comment>,
|};

const getNostalgicTimestamp = (timestamp: string) =>
  moment(timestamp, 'MMMDD YYYY HH:mm:ss a', 'en').fromNow();

const CommentContainer = ({ timestamp, comments }: Props) => (
  <footer className="comment-wrapper">
    {comments.map(({ username, text }) => (
      <div key={username + text} className="comment">
        <h4 className="comment__username">{username}</h4>
        <span>{text}</span>
      </div>
    ))}
    <time className="post__timestamp">{getNostalgicTimestamp(timestamp)}</time>
  </footer>
);

export default CommentContainer;
