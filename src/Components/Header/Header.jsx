import React, { useContext, useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { ThemeContext } from '../../ThemeContext';
import { Link } from 'react-router-dom';
import { BsFillCloudMoonFill, BsCloudSunFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import LogoLight from '../../assets/logo.png';
import LogoDark from '../../assets/logo-dark.png';
import LogoSLight from '../../assets/logo-small-light.svg';
import LogoSDark from '../../assets/logo-small-dark.svg';
import "./Header.css";

const Header = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' }); // Instantaneous scroll
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom({ duration: 700, smooth: 'easeInOutQuad' }); // Smooth scroll to bottom
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <Link to="/" onClick={scrollToTop}>
        <div className='Logo-Container'>
          <img 
            src={isDark ? (isScrolled ? LogoSDark : LogoDark) : (isScrolled ? LogoSLight : LogoLight)} 
            alt="Logo" 
            className={`Logo-Image ${isScrolled ? 'Logo-Image-Scrolled' : ''}`}
          />
        </div>
      </Link>
      <div className={`Link-Container ${isScrolled ? 'header-scrolled' : ''} ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/about" className='link' onClick={scrollToTop}>About</Link>
        <a onClick={scrollToBottom} className='link'>Contact</a>
        <div className='ThemeSwitch-Container' onClick={toggleTheme}>
          {isDark ? <BsCloudSunFill className='ThemeSwitch-Icon'/> : <BsFillCloudMoonFill className='ThemeSwitch-Icon'/>}
        </div>
      </div>
      <div className="Hamburger-Menu" onClick={handleMenuToggle}>
        <FiMenu />
      </div>
    </header>
  );
}

export default Header;
