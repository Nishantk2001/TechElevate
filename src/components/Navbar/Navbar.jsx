/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import '../Navbar/Navbar.css';
import logo from '../../assets/TechElevate.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img
        src={logo}
        alt='TechElevate'
        className='logo'
      />

      <ul className={mobileMenu ? '' : 'mobile-menu'}>
        <li>
          <Link
            to='hero'
            smooth={true}
            offset={0}
            duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to='services'
            smooth={true}
            offset={-260}
            duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link
            to='about'
            smooth={true}
            offset={-150}
            duration={500}>
            About
          </Link>
        </li>

        <li>
          <Link
            to='ourteam'
            smooth={true}
            offset={-220}
            duration={500}>
            Our Team
          </Link>
        </li>
        <li>
          <Link
            to='mySwiper'
            smooth={true}
            offset={-260}
            duration={500}>
            Testimonial
          </Link>
        </li>
        <li>
          <Link
            to='contact'
            smooth={true}
            offset={-260}
            duration={500}
            className='btn'>
            Contact Us
          </Link>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt=''
        className='menu-icon'
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
