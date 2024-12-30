import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import './Header.css';

export default function Headers() {
    const [showMenu, setShowMenu] = useState(false);
    const [responsive, setResponsive] = useState(false);

    const toggleMenu = (event) => {
        event.preventDefault()
        setShowMenu((prevState) => !prevState);
    };

    const handleClick = (event) => {
        event.preventDefault();
        setResponsive((prevState) => !prevState);
    };

    return (
        <>
            <div className="main_nav">
              
                <div className="imgg">
                    <img src="https://creativewebo.com/assets/images/SVG/logo.svg" alt="Logo" />
                </div>

              
                <div className={responsive ? "li-item responsive-visible" : "li-item"}>
                    <li>
                        <a href="#">
                            <PhoneIcon /> +91-9004480375
                        </a>
                    </li>

                  
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#">
                            Services
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Web Development</a></li>
                            <li><a className="dropdown-item" href="#">Mobile App Development</a></li>
                            <li><a className="dropdown-item" href="#">UI/UX Design</a></li>
                            <li><a className="dropdown-item" href="#">SEO Services</a></li>
                        </ul>
                    </li>

                 
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#">
                            Location
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">New York</a></li>
                            <li><a className="dropdown-item" href="#">San Francisco</a></li>
                            <li><a className="dropdown-item" href="#">Chicago</a></li>
                            <li><a className="dropdown-item" href="#">London</a></li>
                        </ul>
                    </li>

                 
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#">
                            Industries
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Healthcare</a></li>
                            <li><a className="dropdown-item" href="#">Education</a></li>
                            <li><a className="dropdown-item" href="#">Finance</a></li>
                            <li><a className="dropdown-item" href="#">E-commerce</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#">Case Studies</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                    <li className='toggles'>
                        <a href="" onClick={toggleMenu}> <MenuIcon /></a>
                    </li>
                </div>

              
                <span className="span">
                    <button onClick={handleClick}>
                    <MenuIcon />
                    </button>
                </span>
            </div>

         
            {showMenu && (
                <div className="menu-items">
                    <div className="close-menu" onClick={toggleMenu}>
                        <CloseIcon />
                    </div>
                    <div className="Home">
                        <h2><a href="">HOME</a></h2>
                        <h2><a href="">ABOUT US</a></h2>
                        <h3><a href="">SERVICES</a></h3>
                        <h3><a href="">CASE STUDIES</a></h3>
                        <h3><a href="">CAREER</a></h3>
                        <h3><a href="">BLOGS</a></h3>
                        <h3><a href="">LOCATIONS</a></h3>
                        <h3><a href="">CONTACT</a></h3>
                    </div>
                    <div className="Contact">
                        <h3>Visit Our Office</h3>
                        <p>1805, Haware Infotech Park, Vashi, Navi Mumbai - 400703</p>
                        <p>30 Eglinton West Commercial Center, Mississauga, Ontario L5R3E7</p>
                        <p>Tupe Patil Road, Amanora Park Town, Hadapsar, Pune</p>

                        <h3>Contact Us</h3>
                        <p>+91-9004480375</p>
                        <p>+91-8928309813</p>
                        <p>+1647-948-9165</p>

                        <h3>Follow Us</h3>
                    </div>
                </div>
            )}
        </>
    );
}
