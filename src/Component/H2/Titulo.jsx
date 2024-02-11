import React, { useEffect, useRef, useState } from 'react';
import './Titulo.css';

const H2 = ({ value, id, className }) => {
  const tituloRef = useRef(null);
  const [animar, setAnimar] = useState(false);

  const efectoTitulo = () => {
    if (tituloRef.current) {
      const distancia = window.innerHeight - tituloRef.current.getBoundingClientRect().top;
      setAnimar(distancia > 5);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      efectoTitulo();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`st_container ${animar ? 'slide-in-title' : ''}`}>
      <h2 className={className} id={id} ref={tituloRef}>
        {value}
      </h2>
    </div>
  );
}

export default H2;


/*
<div className={`st_container ${animar ? 'slide-in-title' : ''}`}>
      <h1 className='st_titulo' id={id} ref={tituloRef}>
        {value}
      </h1>
    </div>
    */