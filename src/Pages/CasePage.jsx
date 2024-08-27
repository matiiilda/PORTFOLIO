import React from 'react';
import { useParams } from 'react-router-dom';
import './CasePage.css';

const CasePage = () => {
  const { id } = useParams(); // Get the case ID from the URL

  // If the case ID is not 'future-wood', show the work-in-progress message
  if (id !== 'futurewood') {
    return (
      <div className="case-page">
        <section className="work-in-progress">
          <h1>Work in Progress</h1>
          <p>More to be added soon. Stay tuned!</p>
        </section>
      </div>
    );
  }

  // Content for Case 1
  return (
    <div className="case-page">
      {/* Hero Section */}
      <section className="hero-section">
          <h1>Future Wood</h1>
            <p>
              Future Wood is an imaginary company that offers customizable tables. 
              Their goal is to bring more sustainable furniture to the market and encourage 
              customers to care for them for a long time.
            </p>
      </section>

      {/* Process & Tactics Section */}
      <section className="process-tactics">
        <h2>Process & Tactics</h2>
        <p>
          Here we describe the process and tactics used in Case {id}, highlighting key strategies and approaches.
        </p>
      </section>

      {/* Results Section */}
      <section className="results">
        <h2>Results</h2>
        <p>
          The results of Case {id} were outstanding, leading to significant improvements and success.
        </p>
      </section>

      {/* Design System Showcase */}
      <section className="design-showcase">
        <h2>Design System</h2>
        <div className="design-system-images">
          <img src={`/images/case${id}-design1.jpg`} alt={`Design 1 for Case ${id}`} />
        </div>
      </section>
    </div>
  );
};

export default CasePage;
