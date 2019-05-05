import React from 'react';
import PropType from 'prop-types';
import moment from 'moment';

function CommentContainer({ timestamp, comments = [] }) {
  const nostalgicTimestamp = moment(
    timestamp,
    'MMMDD YYYY HH:mm:ss a',
    'en',
  ).fromNow();

  return (
    <footer className="comment-wrapper">
      {comments.map(({ username, text }) => (
        <div key={username + text} className="comment">
          <h4 className="comment__username">{username}</h4>
          <span>{text}</span>
        </div>
      ))}
      <time className="post__timestamp">{nostalgicTimestamp}</time>
    </footer>
  );
}

CommentContainer.propTypes = {
  timestamp: PropType.string.isRequired,
  comments: PropType.arrayOf(
    PropType.shape({
      username: PropType.string,
      text: PropType.string,
    }),
  ),
};

export default CommentContainer;
