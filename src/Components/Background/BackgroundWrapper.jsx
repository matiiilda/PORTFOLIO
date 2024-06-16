import React, { useEffect, useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import Cloud1L from '../../assets/cloud1-light.svg';
import Cloud2L from '../../assets/cloud2-light.svg';
import Cloud3L from '../../assets/cloud3-light.svg';
import Cloud1D from '../../assets/cloud1-dark.png';
import Cloud2D from '../../assets/cloud2-dark.svg';
import Cloud3D from '../../assets/cloud3-dark.svg';
import './Background.css';

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

  return (
<div className="background-wrapper">
      {/* Cloud 1 */}
      <img src={isDark ? Cloud1D : Cloud1L} className="cloud cloud1" data-speed="0.3"/>
      
      {/* Cloud 2 */}
      <img src={isDark ? Cloud2D : Cloud2L} className="cloud cloud2" data-speed="0.4"/>
      
      {/* Cloud 3 */}
      <img src={isDark ? Cloud3D : Cloud3L} className="cloud cloud3" data-speed="0.4"/>

      {/* Cloud 4 */}
      <img src={isDark ? Cloud2D : Cloud2L} className="cloud cloud4" data-speed="0.3"/>

      {/* Cloud 5 */}
      <img src={isDark ? Cloud1D : Cloud1L} className="cloud cloud5" data-speed="0.3"/>

      {/* Cloud 6 */}
      <img src={isDark ? Cloud2D : Cloud2L} className="cloud cloud6" data-speed="0.4"/>

      {/* Cloud 7 */}
      <img src={isDark ? Cloud3D : Cloud3L} className="cloud cloud7" data-speed="0.4"/>

      <div className="content-wrapper">
        {children}
      </div>
    </div>
  );
};


export default BackgroundWrapper;
