import React from 'react';

const handleClick = e => {
  e.preventDefault();
}

const Footer = () => (
  <footer className="footer">
    <ul className="links">
      <li><a href="#" onClick={handleClick}>About Genius</a></li>
      <li><a href="#" onClick={handleClick}>Contributor Guidelines</a></li>
      <li><a href="#" onClick={handleClick}>Press</a></li>
      <li><a href="#" onClick={handleClick}>News Genius</a></li>
      <li><a href="#" onClick={handleClick}>Annotate the Web</a></li>
      <li><a href="#" onClick={handleClick}>Advertise</a></li>
      <li><a href="#" onClick={handleClick}>Event Space</a></li>
      <li><a href="#" onClick={handleClick}>Privacy Policy</a></li>
      <li><a href="#" onClick={handleClick}>Licensing</a></li>
      <li><a href="#" onClick={handleClick}>Jobs</a></li>
      <li><a href="#" onClick={handleClick}>Developers</a></li>
      <li><a href="#" onClick={handleClick}>Terms of Use</a></li>
      <li><a href="#" onClick={handleClick}>Copyright Policy</a></li>
      <li><a href="#" onClick={handleClick}>Contact us</a></li>
    </ul>
    <p className="copyright">© 2017 Matthew Sperry</p>
  </footer>
);

export default Footer;
