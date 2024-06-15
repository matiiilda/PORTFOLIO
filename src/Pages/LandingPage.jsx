import React from 'react';
import CaseCard from '../Components/Cases/CaseCard.jsx'
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <div className='Hero-container'>
        <div className='Intro-title'>
          <h1>Hey there, I'm Matilda!</h1>
          <h2>Welcome to my little corner of the internet.</h2>
        </div>
        <p>I aim to create elegantly simple design with a touch of wonder. <br />
          Design that will make the users love to use it.</p>
      </div>
      <div className='Case-section'>
        <CaseCard 
        id="1"
        title="Future Wood"
        role="UX/UI-Design"
        typeOfProject="School Project"
        content="Creating a webbshop for responsibly-sourced wooden tables done by the imagined company Future Wood."
        />
        <CaseCard 
        id="2"
        title="Plant Pal"
        role="UX/UI-Design & Frontend"
        typeOfProject="Passion Project"
        content="A mobile application made to help newbie plantparents choose and take care of their plants. More TBA"
        />
        <CaseCard 
        id="3"
        title="Simply Made"
        role="UX/UI-Design"
        typeOfProject="Team Project"
        content="We aim to create a website for hobbyists to sell their homemade creations. More TBA"
        />
      </div>
    </div>
  );
}

export default LandingPage;
