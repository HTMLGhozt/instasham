import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Header({ searchHandler }) {
  const [smallHeader, setSmallHeader] = useState(false);

  const handleScroll = () => {
    const shouldBeSmall = window.scrollY > 100;

    if (shouldBeSmall && !smallHeader) {
      setSmallHeader(true);
    } else if (!shouldBeSmall && smallHeader) {
      setSmallHeader(false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  });

  return (
    <header className="navigation-wrapper">
      <nav
        className={classNames('main-navigation', {
          ['main-navigation--small']: smallHeader,
        })}
      >
        <a href="#" className="logo-container">
          <i className="fab fa-instagram" />
          <div className="vertical-rule" />
          <h1 className="logo-container__title">Instasham</h1>
        </a>
        <div className="search">
          <input
            className="search__input"
            onChange={({ target }) => searchHandler(target.value)}
            placeholder="Search"
          />
          <i className="search__icon fas fa-search" />
        </div>
        <div className="main-navigation__icons">
          <i className="far fa-compass" />
          <i className="far fa-heart" />
          <i className="far fa-user" />
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  searchHandler: PropTypes.func.isRequired,
};

export default Header;
