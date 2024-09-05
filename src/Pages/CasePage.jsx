import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext.jsx';
import cases from '../Components/Cases/CaseData.jsx';
import './CasePage.css';

const CasePage = () => {
  const { id } = useParams(); // Get the case ID from the URL
  const [caseData, setCaseData] = useState(null);
  const { isDark } = useContext(ThemeContext); // Access theme context

  const FigmaEmbed = () => {
    const iframeStyles = {
      border: '1px solid rgba(0, 0, 0, 0.1)',
    };

    return (
      <div>
        <iframe
          style={iframeStyles}
          width='450'
          height='800'
          src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FPTIVVfjVMpQ82VoOwRSIdG%2FFuture-Wood-Presentations%3Fpage-id%3D2263%253A9966%26node-id%3D2263-10861%26node-type%3DFRAME%26viewport%3D2446%252C576%252C0.21%26t%3DHWvPN65ZMd8YMwH2-1%26scaling%3Dmin-zoom%26content-scaling%3Dfixed'
          allowFullScreen
          title='Figma Embed'
        ></iframe>
      </div>
    );
  };

  useEffect(() => {
    // Find the case data based on the ID from the URL
    const foundCase = cases.find((caseItem) => caseItem.id === id);
    if (foundCase) {
      setCaseData(foundCase);
    } else {
      console.error('Case not found');
    }
  }, [id]);

  // Get the correct `upplevelsekarta` image based on the theme
  const upplevelsekarta = caseData ? (isDark ? caseData.upplevelsekartaD : caseData.upplevelsekartaL) : null;

  return (
    <div className='case-page'>
      <section className='hero'>
        <h1>{caseData ? caseData.title : 'Loading...'}</h1>
      </section>

      {/* Fallback for Nonexistent Cases */}
      {!caseData ? (
        <section className='work-in-progress'>
          <h2>This case doesn't exist</h2>
          <p>How did you get here?</p>
        </section>
      ) : (
        <>
          {/* Conditional rendering for Works in Progress */}
          {(id === 'plantpal' || id === 'simplymade') ? (
            <section className='work-in-progress'>
              <h2>Work in Progress</h2>
              <p>More to be added soon. Stay tuned!</p>
            </section>
          ) : (
            <>
              {/* This one is so far only for FUTURE WOOD */}
              <section className='introduction'>
                <p>{caseData.introduction1}<br /><br />{caseData.introduction2}</p>
                {upplevelsekarta && (
                    <img src={upplevelsekarta} alt='Upplevelsekarta' />
                  )}
              </section>

              {/* Process & Tactics Section */}
              <section className='process-tactics'>
                <h2>Process & Tactics</h2>
                <p> {caseData.processAndTactics}</p>
              </section>

              {/* Results Section */}
              <section className='results'>
                <h2>Results</h2>
                <p>{caseData.results}</p>
              </section>

              {/* Design System Showcase */}
              <section className='design-showcase'>
                <h2>Design System</h2>
                <div className='design-system-images'>
                  <img src={caseData.image} alt={`Design for ${caseData.title}`} />
                  <FigmaEmbed />
                </div>
              </section>
            </>
          )}
        </>
      )}
    </div>
  );
};

                  <div className='image-collage'>
                  {caseData.collageImages && caseData.collageImages.map((imgSrc, index) => (
                    <img key={index} src={imgSrc} alt={`Collage image ${index + 1}`} />
                  ))}
                </div>

export default CasePage;
