/// Importa las dependencias necesarias
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Whatsapp.css'; 

// Componente de botón de WhatsApp
function WhatsAppButton() {

  const phoneNumber = '+51983411735';
  const message = 'Hola, necesito mas información acerca de los productos SEALPRO.';

  // Genera el enlace de WhatsApp
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a className="whatsapp-button" href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <button className='button'>
        <FontAwesomeIcon icon={faWhatsapp} size='xl'/> Contáctanos
      </button>
    </a>
  );
}

export default WhatsAppButton;
