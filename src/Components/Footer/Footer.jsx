import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import LådaLight from '../../assets/postlåda.svg';
import LådaDark from '../../assets/Postlåda-dark.svg';
import './Footer.css'

function Footer(){
    const { isDark, toggleTheme } = useContext(ThemeContext);

    return (
        <footer>
            <div className='Img-Container'>
                <img src={isDark ? LådaDark : LådaLight} className="Låda-Image" />
            </div>
            <div className='Text-Container'>
                <p>&copy; {new Date().getFullYear()} All rights reserved. <br />Designed & built by Matilda; Powered by coffee</p>
            </div>
        </footer>
    );
}

export default Footer;