import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../ThemeContext.jsx';
import { PiStarFourFill } from 'react-icons/pi';
import { FaComputer, FaCompassDrafting } from 'react-icons/fa6';
import { FaFileDownload } from "react-icons/fa";
import ScrollFade from '../Components/ScrollFade.jsx';
import AutoFade from '../Components/AutoFade.jsx';
import cvPDF from '../assets/MatildaDanielssoncv.pdf';
import Lovelight from '../assets/Love-icon-light.svg';
import Lovedark from '../assets/Love-icon-dark.svg';
import './AboutPage.css';

const AboutPage = () => {
  const { isDark } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Array of words for the Love Items section
  const words = [
    "Punk-culture", "Painting", "Late evenings", "Invisible design", 
    "Grapefruit Soju", "Motion design", "Matcha", "Lots of whitespace", 
    "Cats", "Rounded corners", "Video games", "Reading long books", 
    "Brain-storming", "Cooking", "Vibrant colors"
  ];

  // Handle window resize to update isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Duplicate items for horizontal scrolling effect
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

  // Handle scroll to update isScrolled state
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  
// ---------------------------
//Fragmented sections
//----------------------------

//Render the About Text section
const renderAboutText = () => {
  const aboutText = (
    <AutoFade className='About-text'>
      <div className='p1'>
        <p className={`p ${isScrolled ? 'hidden' : 'visible'}`}>
          I grew up with a Game Boy in one hand, a paintbrush in the other and a love for creativity. 
          Little did I know that this would be my gateway into interactive design.
        </p>
        <p className={`p ${isScrolled ? 'hidden' : 'visible'}`}>
          Before UX I studied orthotics and prosthetics, during which I 
          learned the importance of empathy and tailored solutions. Eventually, I discovered that my wish for helping people
          and my love for design could intertwine into a career in UX.
        </p>
      </div>
      <div className='p2'>
      {isMobile ? ( 
          <p className={`p ${isScrolled ? 'visible' : 'hidden'}`}>
            I find inspiration from the work of: <br />Robert Kurvitz, Juxtoposed, Masayoshi Sutoh, <br />Adham 
            Dannaway, <br />and of course all of my classmates.
          </p>
        ) : ( 
          <p className={`p ${isScrolled ? 'visible' : 'hidden'}`}>
            I find inspiration from the work of: <br />Robert Kurvitz, Juxtoposed, Masayoshi Sutoh, Adham 
            Dannaway, <br />and of course all of my classmates.
          </p>
        )}
        <p className={`p ${isScrolled ? 'visible' : 'hidden'}`}>
          Creativity is my main driving force; I love exploring and experimenting with new ideas, and if 
          there's a new tool or skillset I need to learn along the way, even better.
        </p>
      </div>
    </AutoFade>
  );

  const skillsText = (
    <div className='Skills-text'>
      <div className='Skill-list'>
        <div className='Skill-list-title'>
          <FaComputer /><h3>Proficient with</h3>
        </div>
        <div className={`tags ${isDark ? 'dark' : ''}`}>
          <a href="https://www.figma.com/design/" target="_blank" rel="noopener noreferrer">Figma</a>
          <a href="https://www.w3schools.com/whatis/whatis_html.asp" target="_blank" rel="noopener noreferrer">HTML</a>
          <a href="https://www.w3schools.com/whatis/whatis_css.asp" target="_blank" rel="noopener noreferrer">CSS</a>
          <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript" target="_blank" rel="noopener noreferrer">JavaScript</a>
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
  );

  return (
    <section className='About-section'>
      {isMobile ? (
        <>
          {aboutText}
          {skillsText}
        </>
      ) : (
        <>
          {skillsText}
          {aboutText}
        </>
      )}
    </section>
  );
};


  // Render the Experience section
  const renderExperience = () => (
    <ScrollFade>
      <div className='Experience-list'>
        <div className='Experience-list-title'>
          <h1>Experience</h1><PiStarFourFill />
        </div>
        <div className='Experience-card'>
          <div className='Experience-card-header'>
            <div className='row'>
              <h3>Your company here</h3>
            </div>
            <div className='row'>
              {isMobile ? (
                <>
                  <h5>Position: <br />Dream Team Member</h5>
                  <h5>Location: <br /> Anywhere with WiFi</h5>
                </>
              ) : (
                <>
                  <h5>Full-time Dream Team Member</h5>
                  <h5>Location: Anywhere with WiFi</h5>
                </>
              )}
            </div>
          </div>
          {isMobile ? (
            <p>
              I eagerly tackled new challenges and lent a hand to innovative projects. My main focus was 
              supporting the team by providing fresh perspectives and injecting creativity into our work. 
              I aimed to make each day enjoyable for myself and my colleagues.
            </p>
          ) : (
            <p>
            I eagerly tackled new challenges and lent a hand to innovative projects. My main focus was 
            supporting the team by providing fresh perspectives and injecting creativity into our work, 
            while absorbing all the knowledge that I could. With my genuine passion for design and a 
            sprinkle of humor, I aimed to make each day enjoyable for myself and my colleagues.
            </p>
          )}
        </div>
        <a href={cvPDF} download="MatildaCV" target='_blank'>
          <button className="cv-button">
            <FaFileDownload />
            <p>Download CV</p>
          </button>
        </a>
      </div>
    </ScrollFade>
  );

  // Render the Love Items section
  const renderLoveItems = () => (
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
  );

  return (
    <div className='AboutPage'>
      {isMobile ? (
        <>
          {renderAboutText()}
          {renderExperience()}
          {renderLoveItems()}
        </>
      ) : (
        <>
          {renderAboutText()}
          {renderLoveItems()}
          {renderExperience()}
        </>
      )}
    </div>
  );
};

export default AboutPage;
