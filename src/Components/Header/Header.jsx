import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../ThemeContext';
import { Link } from 'react-router-dom';
import { BsFillCloudMoonFill, BsCloudSunFill } from "react-icons/bs";
import LogoLight from '../../assets/logo.png';
import LogoDark from '../../assets/logo-dark.png';
import LogoSLight from '../../assets/logo-small-light.svg';
import LogoSDark from '../../assets/logo-small-dark.svg';
import "./Header.css";

const Header = ({ footerRef }) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={isScrolled ? 'header-scrolled' : ''}>
      <Link to="/">
        <div className='Logo-Container'>
          <img 
            src={isDark ? (isScrolled ? LogoSDark : LogoDark) : (isScrolled ? LogoSLight : LogoLight)} 
            alt="Logo" 
            className={`Logo-Image ${isScrolled ? 'Logo-Image-Scrolled' : ''}`}
          />
        </div>
      </Link>
      <div className={`Link-Container ${isScrolled ? 'header-scrolled' : ''}`}>
        <Link to="/about" className='link'>About</Link>  
        <p className="link" onClick={() => {
          footerRef.current?.scrollIntoView({ behavior: 'smooth' });
        }}>Contact</p>
        <div className='ThemeSwitch-Container' onClick={toggleTheme}>
          {isDark ? <BsCloudSunFill className='ThemeSwitch-Icon'/> : <BsFillCloudMoonFill className='ThemeSwitch-Icon'/>}
        </div>
      </div>
    </header>
  );
};

export default Header;
