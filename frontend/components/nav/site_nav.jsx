import React from 'react';
import HeaderActionsContainer from '../header_actions/header_actions_container';

const SiteNav = () => (
  <header className="site-header">
    <nav className="top-nav">
      <div className="logo">90s GENIUS</div>
      <HeaderActionsContainer />
    </nav>
    <nav className="secondary-nav">
        <ul className="links">
          <li><a className="text-link" href="#">FEATURED STORIES</a></li>
          <li><a className="text-link" href="#">TOP SONGS</a></li>
          <li><a className="text-link" href="#">VIDEOS</a></li>
          <li><a className="text-link" href="#">COMMUNITY</a></li>
        </ul>
        <span className="divider">|</span>
        <ul className="links">
          <li><a className="text-link" href="#">SHOP</a></li>
        </ul>
        <span className="divider">|</span>
        <ul className="links">
          <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
        </ul>
    </nav>
  </header>
);

export default SiteNav;
