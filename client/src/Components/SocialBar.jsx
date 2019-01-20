import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class extends Component {
  static displayName = 'SocialBar';

  static propTypes = {
    likes: PropTypes.number.isRequired,
    input: PropTypes.object,
  };

  state = {
    likes: 0,
    liked: false,
  };

  componentDidMount() {
    const { likes } = this.props;
    this.setState({ likes });
  }

  toggleLike = () => {
    this.setState(({ likes, liked }) =>
      liked
        ? { likes: likes - 1, liked: false }
        : { likes: likes + 1, liked: true },
    );
  };

  render() {
    const { likes, liked } = this.state;
    const { input } = this.props;
    const likeClass = `
      fa${liked ? 's' : 'r'} fa-heart${' '}
      ${liked && 'social-bar__icons--red'}
    `;
    return (
      <section className="social-bar">
        <div className="social-bar__icons">
          <i onClick={this.toggleLike} className={likeClass} />
          <i
            onClick={() => input.focus()}
            className="far fa-comment social-bar__icons--inversed"
          />
        </div>
        <span>{likes.toLocaleString()} likes</span>
      </section>
    );
  }
}
