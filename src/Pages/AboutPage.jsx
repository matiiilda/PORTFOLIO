import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../ThemeContext.jsx';
import { PiStarFourFill } from "react-icons/pi";
import { FaComputer, FaCompassDrafting  } from "react-icons/fa6";
import Lovelight from '../assets/Love-icon-light.svg';
import Lovedark from '../assets/Love-icon-dark.svg';
import './AboutPage.css';

const AboutPage = () => {
  const { isDark } = useContext(ThemeContext);

  const words = [
    "Punk-culture",
    "Painting",
    "Late evenings",
    "Invisible design",
    "Grapefruit Soju",
    "Motion design ",
    "Matcha",
    "Lots of whitespace",
    "Cats",
    "Rounded corners",
    "Video games",
    "Reading long books",
    "Clean inbox",    
  ];

  return (
    <div className='AboutPage'>
      <div className='About-section'>
      <div className='Skills-text'>
        <div className= 'Skill-list'>
          <div className='Skill-list-title'>
          <FaComputer /><h3>Proficient with</h3>
          </div>
          <div className={`tags ${isDark ? 'dark' : ''}`}>
            <p>Figma</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>React</p>
            <p>Github</p>
          </div>
        </div>
        <div className= 'Skill-list'>
        <div className='Skill-list-title'>
        <FaCompassDrafting /><h3>Currently learning</h3>
          </div>
          <div className={`tags ${isDark ? 'dark' : ''}`}>
            <p>Js.node</p>
            <p>Adobe AI</p>
            <p>Blender</p>
            <p>Design Principles</p>
          </div>
        </div>
      </div>
      <div className='About-text'>
        <p>I grew up with a Game Boy in one hand, a paintbrush in the other and a love for creativity. Little did I know that this would be my gateway into interactive design.</p>
        <p>My desire to help people initially led me to study orthotics and prosthetics, where I learned the importance of empathy and tailored solutions. Eventually, I discovered that this and my love for design could intertwine into a career in UX.</p>
        <p>I find inspiration from the work of: Robert Kurvitz, Juxtopposed, Masayoshi Sutoh, Adham Dannaway and of course my endlessly passionated classmates.</p>
        <p>Creativity is my driving force, propelling me to constantly explore and experiment with new ideas. I thrive on the excitement of trying out new things and pushing boundaries. I find joy in a myriad of design styles, from the simplicity of minimalism to the boldness of maximalism.</p>
      </div>
      </div>
      <div className='Love-items'>
        <img 
          src={isDark ? Lovedark : Lovelight} 
          className='Love-icon'
        />
        {/* Horizontal scrolling items */}
        <div className={`horizontal-scrolling-items ${isDark ? 'dark' : ''}`}>
          {words.map((word, index) => (
            <div key={index} className="horizontal-scrolling-items__item">
              {word} <PiStarFourFill />
            </div>
          ))}
        </div>
      </div>
      <div className='Experience-list'>
        <div className='Experience-list-title'>
          <h2>Experience</h2><PiStarFourFill />
        </div>
        <div className='Experience-card'>
          <div className='Experience-card-header'>
            <div className='Experience-card-header-left'>
              <h3>Your company here</h3>
              <h4>As your colleague</h4>
            </div>
            <div className='Experience-card-header-right'>
              <h5>Anywhere with WiFi</h5>
              <h5>AFull-time Dream Team Member</h5>
            </div>
          </div>
          <p>I eagerly tackled new challenges and lent a hand to innovative projects. My main focus was supporting the team by providing fresh perspectives and injecting creativity into our work, while absorbing all the knowledge that I could. With my genuine passion for design and a sprinkle of humor, I aimed to make each day enjoyable for myself and my colleagues.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
