import React from 'react';
import CaseCard from '../Components/Cases/CaseCard.jsx';
import './LandingPage.css';
import futurewood1 from '../assets/caseImages/MacBook_Air.png';
import placeholder from '../assets/caseImages/Placeholder.png';
const LandingPage = () => {
  const cases = [
    {
      id: "futurewood",
      title: "Future Wood",
      image: futurewood1,
      role: "UX/UI-Design",
      typeOfProject: "School Project",
      content: "Creating a webbshop for responsibly-sourced wooden tables done by the imagined company Future Wood."
    },
    {
      id: "plantpal",
      title: "Plant Pal",
      image: placeholder,
      role: "UX/UI-Design & Frontend",
      typeOfProject: "Passion Project",
      content: "A mobile application made to help first-time plantowners choose and take care of their plants. More TBA"
    },
    {
      id: "simplymade",
      title: "Simply Made",
      image: placeholder,
      role: "UX/UI-Design",
      typeOfProject: "Team Project",
      content: "An e-commerse site for hobbyists, to help them gain a customer-base and sell handcrafted items. More TBA"
    }
  ];

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
        {cases.map((caseInfo) => (
          <CaseCard
            key={caseInfo.id}
            id={caseInfo.id}
            image={caseInfo.image}
            title={caseInfo.title}
            role={caseInfo.role}
            typeOfProject={caseInfo.typeOfProject}
            content={caseInfo.content}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
