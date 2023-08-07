import React, { useEffect, useState } from 'react';
import './App.css';

const TubeFiller = () => {
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFilled(true);
    }, 1000);
  }, []);

  return (
    <div className="containerapp">
      <div className="tube">
        <div className={`fill ${filled ? 'filled' : ''}`} />
        {filled && (
          <div className="label">1st Year Completed with 8.44 CGPA</div>
      
        )}
      
      </div>
      
    </div>
  );
};

export default TubeFiller;