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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Initialize based on window size

  const handleMenuToggle = () => { // Toggle for hamburger menu in mobile view
    const newMenuOpenState = !isMenuOpen;
    setIsMenuOpen(newMenuOpenState);
    if (newMenuOpenState) {
      setIsScrolled(true);
    } else {
      if (window.scrollY < 50) {
        setIsScrolled(false);
      }
    }
  };

  const scrollToTop = () => { // Instantaneous scroll, used for changing pages
    window.scrollTo({ top: 0, behavior: 'auto' }); 
  };

  const scrollToBottom = () => { // Smooth scroll to bottom, used only for contact link
    scroll.scrollToBottom({ duration: 700, smooth: 'easeInOutQuad' }); 
  };

  // Toggles the visual on the header depending on scroll position and/if menu is open
  useEffect(() => {
    const handleScroll = () => { 
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else if (!isMenuOpen) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  // Checks if user is on mobile or not, used for conditional rendering
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  }
  
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // Initial check
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <Link to="/" onClick={scrollToTop}>
        <div className='Logo-Container'>
          <img 
            src={
              isMobile 
                ? (isDark ? LogoSDark : LogoSLight) 
                : (isDark ? (isScrolled ? LogoSDark : LogoDark) : (isScrolled ? LogoSLight : LogoLight))
            } 
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
