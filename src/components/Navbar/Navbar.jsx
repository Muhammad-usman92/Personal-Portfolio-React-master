import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import Logo from "../../img/logo1.png";
const navbar = () => {
  return (
    <div className='n-wrapper' id='Navbar'>
      {/* left */}
      <div className='n-left'>
        {/* <div className='n-name'>Andrew</div> */}
        <NavLink to='/'>
          <img src={Logo} className='logo' alt='logo' />
        </NavLink>
        <Toggle />
      </div>
      {/* right */}
      <div className='n-right'>
        <div className='n-list'>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <NavLink className='link' activeClass='active' to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <Link to='services' spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to='works' spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to='portfolio' spy={true} smooth={true}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to='testimonial' spy={true} smooth={true}>
                Team
              </Link>
            </li>{" "}
            <li>
              <NavLink className='link' to='/login'>
                LogIn
              </NavLink>
            </li>{" "}
            <li>
              <NavLink className='link' to='/signup'>
                SignUp
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <Link to='contact' spy={true} smooth={true}>
          <button className='button n-button'>Contact</button>
        </Link> */}
      </div>
    </div>
  );
};

export default navbar;