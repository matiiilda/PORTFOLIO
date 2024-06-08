import React from 'react';
import { BsFillCloudMoonFill, BsCloudSunFill } from "react-icons/bs";
import LogoLight from '../../assets/logo.png';
import LogoDark from '../../assets/logo-dark.png';
import "./Header.css";

const Header = ({ handleChange, isDark }) => {
  return (
    <header>
      <div className='Logo-Container'>
        <img src={isDark ? LogoDark : LogoLight} alt="Logo" className="Logo-Image" />
      </div>
      <div className='Link-Container'>
        <p className="link">About</p>
        <p className="link">Contact</p>
        <div className='ThemeSwitch-Container' onClick={handleChange}>
            {isDark ? <BsCloudSunFill className='ThemeSwitch-Icon'/> : <BsFillCloudMoonFill className='ThemeSwitch-Icon'/>}
        </div>
      </div>
    </header>
  );
};

export default Header;
