import React from 'react';
import moment from 'moment';

const stories = [
  {
    username: 'bob',
    timestamp: 'July 17th 2017, 12:42:40 pm',
    thumbnailUrl:
      'https://tk-assets.lambdaschool.com/ce601fdf-7cb0-4098-83d3-1a1584a72513_30841289_342445456281079_112845064497004544_n.jpg',
  },
  {
    username: 'joe',
    timestamp: 'July 17th 2017, 12:42:40 pm',
    thumbnailUrl:
      'https://tk-assets.lambdaschool.com/ce601fdf-7cb0-4098-83d3-1a1584a72513_30841289_342445456281079_112845064497004544_n.jpg',
  },
  {
    username: 'jeff',
    timestamp: 'July 17th 2017, 12:42:40 pm',
    thumbnailUrl:
      'https://tk-assets.lambdaschool.com/ce601fdf-7cb0-4098-83d3-1a1584a72513_30841289_342445456281079_112845064497004544_n.jpg',
  },
  {
    username: 'josh',
    timestamp: 'July 17th 2017, 12:42:40 pm',
    thumbnailUrl:
      'https://tk-assets.lambdaschool.com/ce601fdf-7cb0-4098-83d3-1a1584a72513_30841289_342445456281079_112845064497004544_n.jpg',
  },
  {
    username: 'bob',
    timestamp: 'July 17th 2017, 12:42:40 pm',
    thumbnailUrl:
      'https://tk-assets.lambdaschool.com/ce601fdf-7cb0-4098-83d3-1a1584a72513_30841289_342445456281079_112845064497004544_n.jpg',
  },
  {
    username: 'joe',
    timestamp: 'July 17th 2017, 12:42:40 pm',
    thumbnailUrl:
      'https://tk-assets.lambdaschool.com/ce601fdf-7cb0-4098-83d3-1a1584a72513_30841289_342445456281079_112845064497004544_n.jpg',
  },
  {
    username: 'jeff',
    timestamp: 'July 17th 2017, 12:42:40 pm',
    thumbnailUrl:
      'https://tk-assets.lambdaschool.com/ce601fdf-7cb0-4098-83d3-1a1584a72513_30841289_342445456281079_112845064497004544_n.jpg',
  },
  {
    username: 'josh',
    timestamp: 'July 17th 2017, 12:42:40 pm',
    thumbnailUrl:
      'https://tk-assets.lambdaschool.com/ce601fdf-7cb0-4098-83d3-1a1584a72513_30841289_342445456281079_112845064497004544_n.jpg',
  },
];

const nostalgicTimestamp = timestamp =>
  moment(timestamp, 'MMMDD YYYY HH:mm:ss a', 'en').fromNow();

function Aside() {
  return (
    <aside className="sidebar-wrapper">
      <div className="profile">
        <img
          className="profile__thumbnail"
          src="https://tk-assets.lambdaschool.com/ce601fdf-7cb0-4098-83d3-1a1584a72513_30841289_342445456281079_112845064497004544_n.jpg"
          alt="profile"
        />
        <div className="profile__info">
          <span className="profile__username">username</span>
          <span className="profile__legal-name">John Smith</span>
        </div>
      </div>
      <section className="sidebar__card sidebar__card--stories">
        <header className="sidebar__card__header">
          <h3 className="sidebar__card__title">Stories</h3>
          <span className="sidebar__card__action">Watch All</span>
        </header>
        <div className="sidebar__card--stories__container">
          {stories.map(({ username, timestamp, thumbnailUrl }) => (
            <div key={username + timestamp} className="story">
              <div className="story__thumbnail">
                <img className="story__thumbnail__image" src={thumbnailUrl} />
              </div>
              <div className="story__info">
                <h3 className="story__username">{username}</h3>
                <time className="story__timestamp">
                  {nostalgicTimestamp(timestamp)}
                </time>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="sidebar__card sidebar__card--suggestions">
        <header className="sidebar__card__header">
          <h4 className="sidebar__card__title">Suggestions For You</h4>
          <span className="sidebar__card__action">See All</span>
        </header>
        <div className="sidebar__card--suggestions__container">
          {stories
            .filter((_, i) => i < 3)
            .map(({ username, thumbnailUrl }) => (
              <div key={Math.random() * Math.random()} className="suggestion">
                <div className="suggestion__thumbnail">
                  <img
                    className="suggestion__thumbnail__image"
                    src={thumbnailUrl}
                  />
                </div>
                <div className="suggestion__info">
                  <h3 className="suggestion__username">{username}</h3>
                  <time className="suggestion__reason">you know eachother</time>
                </div>
              </div>
            ))}
        </div>
      </section>
      <footer className="sidebar__footer">
        <nav className="sidebar__footer__navigation">
          <a href="#">About Us</a>
          <a href="#">Support</a>
          <a href="#">Press</a>
          <a href="#">API</a>
          <a href="#">Jobs</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Directory</a>
          <a href="#">Profiles</a>
          <a href="#">Hashtags</a>
          <a href="#">Language</a>
        </nav>
      </footer>
    </aside>
  );
}

export default Aside;
