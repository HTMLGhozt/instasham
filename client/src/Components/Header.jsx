// @flow
import React, { Component } from 'react';

type Props = {
  searchHandler: (search: string) => void,
};

type State = {
  smallHeader: boolean,
};

export default class extends Component<Props, State> {
  static displayName = 'Header';

  state = {
    smallHeader: false,
  };

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { smallHeader } = this.state;
    const shouldBeSmall = window.scrollY > 100;
    if (shouldBeSmall && !smallHeader) {
      this.setState({ smallHeader: true });
    } else if (!shouldBeSmall && smallHeader) {
      this.setState({ smallHeader: false });
    }
  };

  render() {
    const { searchHandler } = this.props;
    const { smallHeader } = this.state;
    return (
      <header className="navigation-wrapper">
        <nav
          className={`main-navigation ${
            smallHeader ? 'main-navigation--small' : ''
          }`}
        >
          <a href="#" className="logo-container">
            <i className="fab fa-instagram" />
            <div className="vertical-rule" />
            <h1 className="logo-container__title">Instasham</h1>
          </a>
          <div className="search">
            <input
              className="search__input"
              onChange={e => searchHandler(e.target.value)}
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
}
