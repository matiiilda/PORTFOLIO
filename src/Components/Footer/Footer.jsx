import React, { Component, forwardRef, useContext, useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import { ThemeContext } from '../../ThemeContext';
import { FaLinkedin, FaGithub, FaFigma, FaCopy } from "react-icons/fa";
import LådaLight from '../../assets/postlåda.svg';
import LådaDark from '../../assets/Postlåda-dark.svg';
import LådaLightS from '../../assets/postlådaS.svg';
import LådaDarkS from '../../assets/postlåda-darkS.svg';
import ScrollFade from '../ScrollFade';
import './Footer.css';
import { ImSpotify } from 'react-icons/im';

const Footer = forwardRef((props) => {
    const { isDark } = useContext(ThemeContext);
    const [copied, setCopied] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Initialize based on window size

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('matilda@krimarc.se')
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1000); // Show "Copied!" message for 1 second
            });
    };

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
        <Element id= "footer" name= 'footer'>
            <ScrollFade className="text-container">
                <h5>Get in touch!</h5>
                <h1>Send me an email</h1>
                <div className='links'>
                    <div className='mail' onClick={handleCopyEmail}>
                        <FaCopy />
                        <p className="email-text">{copied ? 'Copied!' : 'matilda@krimarc.se'}</p>
                    </div>
                    <div className='socials'>
                        <a className="a1" href="https://www.linkedin.com/in/matilda-danielsson-aa58b72a3" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='Icon' />
                        </a>
                        <a className="a2" href="https://github.com/matiiilda" target="_blank" rel="noopener noreferrer">
                            <FaGithub className='Icon' />
                        </a>
                        <a className="a3" href="https://www.figma.com/design/wTyWO4Hm2RLVEGebgK8N3k/Untitled?node-id=0-1&t=lJk3V6mQhtQTyDCp-1" target="_blank" rel="noopener noreferrer">
                            <FaFigma className='Icon'  />
                        </a>
                    </div>
                </div>
            </ScrollFade >
            <div className='img-container'>
            <img 
    src={isMobile 
        ? (isDark ? LådaDarkS : LådaLightS) 
        : (isDark ? LådaDark : LådaLight)
    } 
    className="låda-image" 
    alt="Mail box" 
/>

            </div>
            <div className='copyright'>
    {isMobile ? (
        <p>&copy; {new Date().getFullYear()}  All rights reserved. <br />Designed & built by Matilda; Powered by coffee</p>
    ) : (
        <p>&copy; {new Date().getFullYear()} All rights reserved. Designed & built by Matilda; Powered by coffee</p>
    )}
</div>

        </Element>
    );
});

export default Footer;
