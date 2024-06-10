import React, { useState, useEffect } from 'react';
import './AboutPage.css';

const AboutPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = 80; // Change index every 50 pixels
    const newIndex = Math.floor(scrollPosition / threshold);

    console.log('Scroll Position:', scrollPosition, 'New Index:', newIndex); // Debugging line


    if (newIndex !== activeIndex && newIndex < 4) {
      setActiveIndex(newIndex);
    }
  
    if (newIndex >= 4) {
      // If the index is 5 or more, set all containers to be inactive
      document.querySelectorAll('.container').forEach(container => {
        container.classList.remove('active');
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  return (
    <div className='AboutPage'>
      <div className='About-text'>
        <div className={`container ${activeIndex === 0 ? 'active' : 'inactive'}`}>
          <p>I grew up with a Game Boy in one hand, a paintbrush in the other and a love for creativity. Little did I know that this would be my gateway into interactive design.</p>
        </div>
        <div className={`container ${activeIndex === 1 ? 'active' : 'inactive'}`}>
          <p>My desire to help people initially led me to study orthotics and prosthetics, where I learned the importance of empathy and tailored solutions. Eventually, I discovered that this and my love for design could intertwine into a career in UX.</p>
        </div>
        <div className={`container ${activeIndex === 2 ? 'active' : 'inactive'}`}>
          <p>I find inspiration from the work of: Robert Kurvitz, Juxtopposed, Masayoshi Sutoh, Adham Dannaway and of course my endlessly passionated classmates.</p>
        </div>
        <div className={`container ${activeIndex === 3 ? 'active' : 'inactive'}`}>
          <p>Creativity is my driving force, propelling me to constantly explore and experiment with new ideas. I thrive on the excitement of trying out new things and pushing boundaries. I find joy in a myriad of design styles, from the simplicity of minimalism to the boldness of maximalism.</p>
        </div>
      </div>
      <div className="horizontal-scrolling-items">
      <div className="horizontal-scrolling-items__item">
        Here is some horizontally scrolling text used for a tutorial. It will loop smoothly. &nbsp;
      </div>
      <div className="horizontal-scrolling-items__item">
        Here is some horizontally scrolling text used for a tutorial. It will loop smoothly. &nbsp;
      </div>
    </div>
    </div>
  );
};

export default AboutPage;
