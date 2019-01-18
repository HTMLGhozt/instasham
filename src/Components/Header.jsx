import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ searchHandler }) => (
  <header className="navigation-wrapper">
    <nav className="main-navigation">
      <a href="#" className="logo-container">
        <i className="fab fa-instagram" />
        <div className="vertical-rule" />
        <h1 className="logo-container__title">Instasham</h1>
      </a>
      <div className="search">
        <i className="search__icon fas fa-search" />
        <input
          className="search__input"
          onChange={e => searchHandler(e.target.value)}
          placeholder="Search"
        />
      </div>
      <div className="main-navigation__icons">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  searchHandler: PropTypes.func,
};
Header.defaultProps = {
  searchHandler: () => {},
};

export default Header;
