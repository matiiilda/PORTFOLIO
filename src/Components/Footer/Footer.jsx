import React, { forwardRef, useContext, useState } from 'react';
import { ThemeContext } from '../../ThemeContext';
import { FaLinkedin, FaGithub, FaFigma, FaCopy } from "react-icons/fa";
import LådaLight from '../../assets/postlåda.svg';
import LådaDark from '../../assets/Postlåda-dark.svg';
import ScrollFade from '../ScrollFade';
import './Footer.css';

const Footer = forwardRef((props, ref) => {
    const { isDark } = useContext(ThemeContext);
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('matilda@krimarc.se')
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1000); // Show "Copied!" message for 1 second
            });
    };

    return (
        <footer className="footer">
            <ScrollFade className="text-container">
                <h5>Get in touch!</h5>
                <h1>Send me an email</h1>
                <div className='links' id='footer' ref={ref}>
                    <div className='mail' onClick={handleCopyEmail}>
                        <FaCopy />
                        <p className="email-text">{copied ? 'Copied!' : 'matilda@krimarc.se'}</p>
                    </div>
                    <div className='socials'>
                        <a className="a1" href="https://www.linkedin.com/in/matilda-danielsson-aa58b72a3" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin style={{ width: "32px", height: "auto" }} />
                        </a>
                        <a className="a2" href="https://github.com/matiiilda" target="_blank" rel="noopener noreferrer">
                            <FaGithub style={{ width: "32px", height: "auto" }} />
                        </a>
                        <a className="a3" href="https://www.figma.com/design/wTyWO4Hm2RLVEGebgK8N3k/Untitled?node-id=0-1&t=lJk3V6mQhtQTyDCp-1" target="_blank" rel="noopener noreferrer">
                            <FaFigma style={{ width: "32px", height: "auto" }} />
                        </a>
                    </div>
                </div>
            </ScrollFade >
            <div className='img-container'>
                <img src={isDark ? LådaDark : LådaLight} className="låda-image" alt="Mail box" />
            </div>
            <div className='copyright'>
                <p>&copy; {new Date().getFullYear()} All rights reserved. Designed & built by Matilda; Powered by coffee</p>
            </div>
        </footer>
    );
});

export default Footer;
