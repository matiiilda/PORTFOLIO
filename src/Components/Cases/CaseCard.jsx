import React from 'react';
import { Link } from "react-router-dom";
import { PiStarFourFill } from "react-icons/pi";
import '../../Pages/LandingPage.css';

const CaseCard = ({ id, title, role, typeOfProject, content, image }) => {

  return (
    <Link to={`/case/${id}`} className="block">
      <div className='Case-card'>
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
