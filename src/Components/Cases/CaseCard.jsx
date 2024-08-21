import React from 'react';
import { Link } from "react-router-dom";
import { PiStarFourFill } from "react-icons/pi";
import '../../Pages/LandingPage.css';

const CaseCard = ({ id, title, role, typeOfProject, content, image }) => {
  // Function to check if the ID is even
  const isEven = (number) => number % 2 === 0;

  // Determine the className for the Case-card div
  const cardClassName = `Case-card${isEven(id) ? ' even' : ''}`;

  return (
    <Link to={`/case/${id}`} className="block">
      <div className={cardClassName}>
      <div className='Case-image'>
          <img src={image} alt={title} />
        </div>
        <div className='Case-card-text'>
          <div className='row'>
            <p>{role}</p><PiStarFourFill /><p>{typeOfProject}</p>
          </div>
          <div className='row'>
            <h3>{title}</h3>
          </div>
          <p className='content'>{content}</p>
        </div>
      </div>
    </Link>
  );
};

export default CaseCard;
