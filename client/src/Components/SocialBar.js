import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const reducer = ({ isLiked, likes }) =>
  isLiked
    ? { likes: likes - 1, isLiked: false }
    : { likes: likes + 1, isLiked: true };

function SocialBar({ input, likes: refLikes = 0 }) {
  const [{ likes, isLiked }, toggleLike] = useReducer(reducer, {
    likes: refLikes,
    isLiked: false,
  });

  const likeClass = classNames(`fa${isLiked ? 's' : 'r'}`, 'fa-heart', {
    ['social-bar__icons--red']: isLiked,
  });

  return (
    <section className="social-bar">
      <div className="social-bar__icons">
        <i onClick={toggleLike} className={likeClass} />
        <i
          onClick={() => input.current.focus()}
          className="far fa-comment social-bar__icons--inversed"
        />
      </div>
      <span>{likes.toLocaleString()} likes</span>
    </section>
  );
}

SocialBar.propTypes = {
  likes: PropTypes.number.isRequired,
  input: PropTypes.object,
};

export default SocialBar;
