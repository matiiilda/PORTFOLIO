// CasePage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const CasePage = () => {
  let { id } = useParams();

  return (
    <div className="case-page">
      <h1>Case Study Details</h1>
      <p>Case ID: {id}</p> {/* Ensure this displays correctly */}
      <p>This is a test paragraph.</p> {/* Ensure this paragraph shows up */}
    </div>
  );
};

export default CasePage;
