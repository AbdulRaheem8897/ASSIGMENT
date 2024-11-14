import React from 'react';
import './content.css';

function Content() {
  return (
    <div className="content">
      <div className="grey-background">
        <img src={`${process.env.PUBLIC_URL}/statue.jpg`} alt="Statue" className="statue-image" />
      </div>
    </div>
  );
}

export default Content;
