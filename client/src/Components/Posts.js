import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import CommentContainer from './CommentContainer';
import SocialBar from './SocialBar';

function Post({
  username,
  thumbnailUrl,
  imageUrl,
  likes,
  timestamp,
  comments: refComments = [],
}) {
  const input = useRef(null);
  const [comments, setComments] = useState(refComments);

  const handleSubmit = event => {
    event.preventDefault();
    const comment = {
      username: 'Thomas',
      text: input.current.value,
    };
    input.current.value = '';

    setComments([...comments, comment]);
  };

  return (
    <article className="post">
      <header className="post__header">
        <div className="post__thumbnail">
          <img className="post__thumbnail__image" src={thumbnailUrl} />
        </div>
        <h4 className="post__username">{username}</h4>
      </header>
      <img className="post__image" src={imageUrl} />
      <SocialBar {...{ likes, input }} />
      <CommentContainer {...{ comments, timestamp }} />
      <form onSubmit={handleSubmit}>
        <input
          className="comment__input"
          ref={input}
          placeholder="Add a comment..."
          autoComplete="off"
        />
      </form>
    </article>
  );
}

Post.propTypes = {
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

export default Post;
