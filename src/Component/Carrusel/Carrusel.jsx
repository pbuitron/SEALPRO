import React from 'react';
import './Carrusel.css';

const images = [
  'https://sylwrap.com/wp-content/uploads/2021/03/01-Emergency-Live-Leak-Repair.jpg',
  'https://sylwrap.com/wp-content/uploads/2021/03/02-Corrosion-Prevention.jpg',
  'https://sylwrap.com/wp-content/uploads/2021/03/03-Pipeline-Reinforcement.jpg',
  'https://sylwrap.com/wp-content/uploads/2021/03/06-Industrial-Pipelines.jpg',
];

const Carrusel = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={image} className="d-block w-100 altura " alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carrusel;
