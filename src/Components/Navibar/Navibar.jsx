import { FaBars, FaPhone, FaSearch } from "react-icons/fa";
import "./Navibar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navibar = () => {
    const [isToggle, setToggle] = useState(false);

    function handleToggle() {
        setToggle(!isToggle);
    }

    function toggleStyle() {
        return isToggle ? { display: 'flex' } : { display: 'none' };
    }

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    };

    return (
        <header id="header">
            <nav id="nav">
                <div className="nav-part1">
                    <img src='/logo.png' alt="logo" />
                </div>

                <div className="nav-part2">
                    <ul id="nav-list">
                        <li>
                            <NavLink className='nav-link' to="Home" onClick={handleScrollToTop}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' to="About" onClick={handleScrollToTop}>About</NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' to="Destination" onClick={handleScrollToTop}>Destination</NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' to="Feedback" onClick={handleScrollToTop}>Feedback</NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' to="Contact" onClick={handleScrollToTop}>Contact</NavLink>
                        </li>
                    </ul>
                    <div className="nav-phone-number">
                        <FaPhone />
                        <span> 10(256)-928 256</span>
                    </div>
                </div>

                <div className="nav-part3" id="nav-part3">
                    <div className="nav-red-button">
                        <NavLink to="Home#search-section" onClick={handleScrollToTop}>
                            <FaSearch className="nav-btn-text" />
                        </NavLink>
                    </div>
                    <div className="nav-red-button">
                        <NavLink to="Login" className="nav-link nav-btn-text">Login</NavLink>
                    </div>
                </div>

                <div className="toggle" onClick={handleToggle}>
                    <FaBars />
                </div>
            </nav>
            <div id="toggled-menu" style={toggleStyle()}>
                <ul className="toggled-menu-list">
                    <li className="toggled-menu-item">
                        <NavLink to="Home" className="nav-link toggled-menu-item-text" onClick={handleScrollToTop}>Home</NavLink>
                    </li>
                    <li className="toggled-menu-item">
                        <NavLink to="About" className="nav-link toggled-menu-item-text" onClick={handleScrollToTop}>About</NavLink>
                    </li>
                    <li className="toggled-menu-item">
                        <NavLink to="Destination" className="nav-link toggled-menu-item-text" onClick={handleScrollToTop}>Destination</NavLink>
                    </li>
                    <li className="toggled-menu-item">
                        <NavLink to="Feedback" className="nav-link toggled-menu-item-text" onClick={handleScrollToTop}>Feedback</NavLink>
                    </li>
                    <li className="toggled-menu-item">
                        <NavLink to="Contact" className="nav-link toggled-menu-item-text" onClick={handleScrollToTop}>Contact</NavLink>
                    </li>
                    <li className="toggled-menu-item" id="toggled-menu-item-login">
                        <NavLink to="Login" className="nav-link toggled-menu-item-text" onClick={handleScrollToTop}>Login</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navibar;
