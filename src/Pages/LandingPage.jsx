import React from 'react';
import CaseCard from '../Components/Cases/CaseCard.jsx';
import cases from '../Components/Cases/CaseData.jsx';
import './LandingPage.css';

const LandingPage = () => {

  return (
    <div className='landing-page'>
      <div className='Hero-container'>
        <div className='Intro-title'>
          <h1>Hey there, I'm <i>Matilda!</i></h1>
          <h2>Welcome to my little corner of the internet.</h2>
        </div>
        <p>
          I am a student at Chas Academy, studying UX/UI-design with frontend competence.<br />
          I aim to create elegant and simple design with a little touch of wonder. Design that will make users love to use it.
        </p>
      </div>
      <div className='Case-section'>
        {cases.map((CaseData) => (
          <CaseCard
            key={CaseData.id}
            id={CaseData.id}
            image={CaseData.image}
            title={CaseData.title}
            role={CaseData.role}
            typeOfProject={CaseData.typeOfProject}
            content={CaseData.content}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
