import React, { useEffect, useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import Cloud1L from '../../assets/cloud1-light.svg';
import Cloud2L from '../../assets/cloud2-light.svg';
import Cloud3L from '../../assets/cloud3-light.svg';
import Cloud1D from '../../assets/cloud1-dark.svg';
import Cloud2D from '../../assets/cloud2-dark.svg';
import Cloud3D from '../../assets/cloud3-dark.svg';
import './BackgroundWrapperAbout.css';

const BackgroundWrapper = ({ children }) => {
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      document.querySelectorAll('.cloud').forEach(cloud => {
        const speed = cloud.getAttribute('data-speed');
        const scaleTransform = cloud.classList.contains('cloud4') ? 'scaleX(-1)' : ''; // added to keep the mirroring
        cloud.style.transform = `translateY(${scrollTop * speed}px) ${scaleTransform}`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Load the grain.js script
    const script = document.createElement('script');
    script.src = '../../../../grain.jsx';
    script.onload = () => {
      const options = {
        "animate": false,
        "patternWidth": 600,
        "patternHeight": 600,
        "grainOpacity": 0.07,
        "grainDensity": 1,
        "grainWidth": 0.7,
        "grainHeight": 0.7,
      };
      if (window.grained) {
        window.grained("#hero", options);
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
<div className="background-wrapper" id="hero">
      {/* Cloud 1 */}
      <img src={isDark ? Cloud1D : Cloud1L} className="cloud cloud10" data-speed="0.3"/>
      
      {/* Cloud 2 */}
      <img src={isDark ? Cloud2D : Cloud2L} className="cloud cloud20" data-speed="0.4"/>
      
      {/* Cloud 3 */}
      <img src={isDark ? Cloud3D : Cloud3L} className="cloud cloud30" data-speed="0.4"/>

      {/* Cloud 5 */}
      <img src={isDark ? Cloud1D : Cloud1L} className="cloud cloud50" data-speed="0.3"/>

      {/* Cloud 6 */}
      <img src={isDark ? Cloud2D : Cloud2L} className="cloud cloud60" data-speed="0.4"/>

      {/* Cloud 7 */}
      <img src={isDark ? Cloud3D : Cloud3L} className="cloud cloud70" data-speed="0.4"/>

      <div className="content-wrapper">
        {children}
      </div>
    </div>
  );
};


export default BackgroundWrapper;
