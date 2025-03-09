import React from 'react';
import './Card.css';
import demoImage from './demo-image.png'; // Import the image

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <img src={demoImage} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;