import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../ThemeContext.jsx';
import { PiStarFourFill } from 'react-icons/pi';
import { FaComputer, FaCompassDrafting } from 'react-icons/fa6';
import ScrollFade from '../Components/ScrollFade.jsx';
import AutoFade from '../Components/AutoFade.jsx';
import Lovelight from '../assets/Love-icon-light.svg';
import Lovedark from '../assets/Love-icon-dark.svg';
import './AboutPage.css';

const AboutPage = () => {
  const { isDark } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);

  const words = [
    "Punk-culture", "Painting", "Late evenings", "Invisible design", 
    "Grapefruit Soju", "Motion design", "Matcha", "Lots of whitespace", 
    "Cats", "Rounded corners", "Video games", "Reading long books", 
    "Brain-storming", "Cooking", "Vibrant colors"
  ];

  useEffect(() => {
    const scrollers = document.querySelectorAll(".horizontal-scrolling-items");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".horizontal-scrolling-items__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='AboutPage'>
      <section className='About-section'>
        <div className='Skills-text'>
          <div className='Skill-list'>
            <div className='Skill-list-title'>
              <FaComputer /><h3>Proficient with</h3>
            </div>
            <div className={`tags ${isDark ? 'dark' : ''}`}>
              <a href="https://www.figma.com/design/" target="_blank" rel="noopener noreferrer">Figma</a>
              <a href="https://www.w3schools.com/whatis/whatis_html.asp" target="_blank" rel="noopener noreferrer">HTML</a>
              <a href="https://www.w3schools.com/whatis/whatis_css.asp" target="_blank" rel="noopener noreferrer">CSS</a>
              <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript" target="_blank" rel="noopener noreferrer">Javascript</a>
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </div>
          <div className='Skill-list'>
            <div className='Skill-list-title'>
              <FaCompassDrafting /><h3>Currently learning</h3>
            </div>
            <div className={`tags ${isDark ? 'dark' : ''}`}>
              <a href="https://www.w3schools.com/nodejs/nodejs_intro.asp" target="_blank" rel="noopener noreferrer">Node.js</a>
              <a href="https://www.adobe.com/ai/overview.html" target="_blank" rel="noopener noreferrer">Adobe Ai</a>
              <a href="https://www.blender.org/about/" target="_blank" rel="noopener noreferrer">Blender</a>
            </div>
          </div>
        </div>
        <AutoFade className='About-text'>
          <div className='p1'>
          <p className={`p ${isScrolled ? 'hidden' : 'visible'}`}>
            I grew up with a Game Boy in one hand, a paintbrush in the other and a love for creativity. 
            Little did I know that this would be my gateway into interactive design.
          </p>
          <p className={`p ${isScrolled ? 'hidden' : 'visible'}`}>
            My desire to help people initially led me to study orthotics and prosthetics, where I 
            learned the importance of empathy and tailored solutions. Eventually, I discovered that this 
            and my love for design could intertwine into a career in UX.
          </p>
          </div>
          <div className='p2'>
          <p className={`p ${isScrolled ? 'visible' : 'hidden'}`}>
            I find inspiration from the work of: <br />Robert Kurvitz, Juxtopposed, Masayoshi Sutoh, Adham 
            Dannaway and of course all of my classmates.
          </p>
          <p className={`p ${isScrolled ? 'visible' : 'hidden'}`}>
            Creativity is my driving force, propelling me to constantly explore and experiment with 
            new ideas, and if there's a new tool or skillset I need to learn along the way, even better. I find 
            great joy in delving into diverse design styles, from the elegance of minimalism to the bold and 
            expressive realms of maximalism.
          </p>
          </div>
        </AutoFade>
      </section>
      <div className='Love-items'>
        <img 
          src={isDark ? Lovedark : Lovelight} 
          className='Love-icon'
        />
        <div className={`horizontal-scrolling-items ${isDark ? 'dark' : ''}`}>
          <div className="horizontal-scrolling-items__inner">
            {words.map((word, index) => (
              <div key={index} className="horizontal-scrolling-items__item">
                {word} <PiStarFourFill />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ScrollFade>
        <div className='Experience-list'>
          <div className='Experience-list-title'>
            <PiStarFourFill /><h2>Experience</h2>
          </div>
          <div className='Experience-card'>
            <div className='Experience-card-header'>
              <div className='row'>
                <h3>Your company here</h3>
              </div>
              <div className='row'>
                <h5>A Full-time Dream Team Member</h5>
                <h5>Anywhere with WiFi</h5>
              </div>
            </div>
            <p>
              I eagerly tackled new challenges and lent a hand to innovative projects. My main focus was 
              supporting the team by providing fresh perspectives and injecting creativity into our work, 
              while absorbing all the knowledge that I could. With my genuine passion for design and a 
              sprinkle of humor, I aimed to make each day enjoyable for myself and my colleagues.
            </p>
          </div>
        </div>
      </ScrollFade>
    </div>
  );
};

export default AboutPage;
