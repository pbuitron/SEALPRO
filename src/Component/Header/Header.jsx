import React from 'react';
import "./header.css";


const Header = () => {
    return (
        <div className="header">
  <video className="background-video" autoPlay loop muted controls>
    <source src="/sealproVideo.mp4"  />
    </video>
    <div className='filtro'>
        
    </div>
  <div className="content">
    <h1 className='h1'>Elimina fugas en menos de 30 minutos.</h1>
    <h2 className='h2'>
      Reparar fugas activas en la industria, nunca fue tan fácil con nuestro Kit
      de Reparación de tuberías. Tus reparaciones listas y operativas en menos de 30 minutos con nuestro novedoso sistema.
    </h2 >
    <button className="cta-button">Contáctanos</button>
  </div>
</div>

    );
     }

export default Header;
