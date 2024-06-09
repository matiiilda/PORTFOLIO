import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import { Link } from 'react-router-dom';
import { BsFillCloudMoonFill, BsCloudSunFill } from "react-icons/bs";
import LogoLight from '../../assets/logo.png';
import LogoDark from '../../assets/logo-dark.png';
import "./Header.css";

const Header = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <Link to="/">
        <div className='Logo-Container'>
          <img src={isDark ? LogoDark : LogoLight} alt="Logo" className="Logo-Image" />
        </div>
      </Link>
      <div className='Link-Container'>
        <Link to="/about" className='link'>About</Link>  
        <p className="link">Contact</p>
        <div className='ThemeSwitch-Container' onClick={toggleTheme}>
            {isDark ? <BsCloudSunFill className='ThemeSwitch-Icon'/> : <BsFillCloudMoonFill className='ThemeSwitch-Icon'/>}
        </div>
      </div>
    </header>
  );
};

export default Header;
