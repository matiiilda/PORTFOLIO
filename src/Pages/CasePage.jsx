import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext.jsx';
import cases from '../Components/Cases/CaseData.jsx';
import './CasePage.css';

const CasePage = () => {
  const { id } = useParams(); // Get the case ID from the URL
  const [caseData, setCaseData] = useState(null);
  const { isDark } = useContext(ThemeContext); // Access theme context

  useEffect(() => {
    // Find the case data based on the ID from the URL
    const foundCase = cases.find((caseItem) => caseItem.id === id);
    if (foundCase) {
      setCaseData(foundCase);
    } else {
      console.error('Case not found');
    }
  }, [id]);

  // Get the correct images based on the theme
  const upplevelsekarta = caseData ? (isDark ? caseData.upplevelsekartaD : caseData.upplevelsekartaL) : null;
  const personasImage = caseData ? (isDark ? caseData.personasD : caseData.personasL) : null;

  return (
    <div className='case-page'>
      <section className='hero'>
        <h1>{caseData ? caseData.title : 'Loading...'}</h1>
      </section>

      {!caseData ? (
        <section className='work-in-progress'>
          <h2>This case doesn't exist</h2>
          <p>How did you get here?</p>
        </section>
      ) : (
        <>
          {(id === 'plantpal' || id === 'simplymade') ? (
            <section className='work-in-progress'>
              <h2>Work in Progress</h2>
              <p>More to be added soon. Stay tuned!</p>
            </section>
          ) : (
            <>
              {/* Introduction Section */}
              <section className='introduction'>
                <p>{caseData.introduction1}<br /><br />{caseData.introduction2}</p>
                {upplevelsekarta && (
                  <img src={upplevelsekarta} alt='Experience map' />
                )}
              </section>

              {/* Process & Tactics Section */}
              <section className='process-tactics'>
                <p>{caseData.processAndTactics1}</p>
                <p>{caseData.processAndTactics2}</p>
                {personasImage && (
                  <img src={personasImage} alt='Personas representing target audience' />
                )}
              </section>

              {/* Task Prioritization Section */}
              <section className='task-prioritization'>
                <p>{caseData.design1}</p>
              </section>

              {/* Start Page Comparison Section */}
              <section className='start-page-comparison'>
                <h4>Start-page iterations</h4>
                <div className='side-by-side'>
                  <img src={caseData.startsida1} alt='Start page design 1' />
                  <img src={caseData.startsida2} alt='Start page design 2' />
                </div>
              </section>

              {/* Wireframes Section */}
              <section className='wireframes'>
                <h4>Wireframes</h4>
                <p>{caseData.design2}</p>
                <div className='wireframe-images'>
                  <img src={caseData.startsida1} alt='Start page design 1' />
                  <img src={caseData.produktsidaw} alt='Wireframe of productpage' />
                  <img src={caseData.tillvalssida} alt='Wireframe of Options Page' />
                  <img src={caseData.kassaW} alt='Wireframe of checkout' />
                  <img src={caseData.bekräftelse} alt='Wireframe of confirmation' />
                </div>
              </section>

              {/* Image Collage Section */}
              <section className='Hi-fi'>
              <p>{caseData.design3}</p>
              <div className='image-collage'>
                <img src={caseData.startsidap} alt='Start Page' />
                <img src={caseData.produktsidan} alt='Productpage' />
                <img src={caseData.barbord} alt='Table Productpage' />
                <img src={caseData.matbordp1} alt='Table Productpage' />
                <img src={caseData.matbordp2} alt='Table Productpage with pop-up' />
                <img src={caseData.kassaP} alt='Checkout' />
                <img src={caseData.bekräftelsep} alt='Confirmation' />
              </div>
              </section>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CasePage;
