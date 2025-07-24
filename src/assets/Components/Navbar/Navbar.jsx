import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import nstyle from '../Navbar/Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar fixed-top navbar-expand-lg ${scrolled ? nstyle.shrink : nstyle.default}`}>
      <div className="container">
        <NavLink className={`${nstyle.brand}`} to="/">START FRAMEWORK</NavLink>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse  ${isOpen ? 'show bg-secondary' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'nav-link fw-bold text-black bg-white rounded '
                    : 'nav-link fw-bold text-white'
                }
                to="/"
              >
                ABOUT
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'nav-link fw-bold text-black bg-white rounded '
                    : 'nav-link fw-bold text-white'
                }
                to="/portofolio"
              >
                PORTOFOLIO
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'nav-link fw-bold text-black bg-white rounded '
                    : 'nav-link fw-bold text-white'
                }
                to="/contact"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;