import React from 'react';
import { NavLink } from 'react-router-dom';
import footerLogo from '../../assets/footer_logo.png.webp';
import facebookIcon from '../../assets/facebookIcon.webp';
import xIcon from '../../assets/XIcon.webp';
import instaIcon from '../../assets/instaIcon.webp';
import pinterestIcon from '../../assets/PinterestIcon.webp';
import youtubeIcon from '../../assets/YoutubeIcon.webp';
import insta1 from '../../assets/insta1.webp';
import insta2 from '../../assets/insta2.webp';
import insta3 from '../../assets/insta3.webp';
import insta4 from '../../assets/insta4.webp';
import insta5 from '../../assets/insta5.webp';
import insta6 from '../../assets/insta6.webp';
import './Footer.css'

const Footer = () => {

  const handleScrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
};
  return (
    <footer className="footer">
      <div className="all-element">
        <div className="logo-and-icons">
          <NavLink to="/"><img src={footerLogo} alt="footer_logo" /></NavLink>
          <div className="component-padding-top">
            <p>
              5th flora, 700/D kings road, green <br />
              lane New York-1782 <br />
              <NavLink to="#">01117522817</NavLink> <br />
              <NavLink to="#">contact@m.com</NavLink>
            </p>
            <ul className="social-icons">
              <li><NavLink to="#"><img src={facebookIcon} alt="facebook_logo" /></NavLink></li>
              <li><NavLink to="#"><img src={xIcon} alt="x_logo" /></NavLink></li>
              <li><NavLink to="#"><img src={instaIcon} alt="insta_logo" /></NavLink></li>
              <li><NavLink to="#"><img src={pinterestIcon} alt="pinterest_logo" /></NavLink></li>
              <li><NavLink to="#"><img src={youtubeIcon} alt="youtube_logo" /></NavLink></li>
            </ul>
          </div>
        </div>

        <div className="companies">
          <h3>Company</h3>
          <div className="component-padding-top">
            <ul>
              <li><NavLink to="/pricing">Pricing</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/gallery">Gallery</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>
        </div>

        <div className="Popular-destination">
          <h3>Popular Destination</h3>
          <div className="component-padding-top">
            <ul>
              <li><NavLink to="/Destination" onClick={handleScrollToTop()}>Indonesia</NavLink></li>
              <li><NavLink to="/Destination" onClick={handleScrollToTop()}>America</NavLink></li>
              <li><NavLink to="/Destination" onClick={handleScrollToTop()}>India</NavLink></li>
           </ul>
          </div>
        </div>

        <div className="insta">
          <h3>Instagram</h3>
          <div className="component-padding-top">
            <div className="insta-images">
              <NavLink to="#"><img src={insta1} alt="Instagram 1" /></NavLink>
              <NavLink to="#"><img src={insta2} alt="Instagram 2" /></NavLink>
              <NavLink to="#"><img src={insta3} alt="Instagram 3" /></NavLink>
              <NavLink to="#"><img src={insta4} alt="Instagram 4" /></NavLink>
              <NavLink to="#"><img src={insta5} alt="Instagram 5" /></NavLink>
              <NavLink to="#"><img src={insta6} alt="Instagram 6" /></NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="copy-right_text">
        <div>
          <div></div>
          <div>
            <div className="copy-right">
              <p>
                Copyright &copy; {new Date().getFullYear()} All rights reserved | This is made by
                <NavLink to="#" target="_blank" className="team1">Team1</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
