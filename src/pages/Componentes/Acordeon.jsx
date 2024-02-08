import React, { useState, useEffect, useRef } from 'react';
import './Acordeon.css'

const accordionData = [
  {
    id: 'collapseOne',
    label: 'Caracteristicas',

    content:
      (
        <div>

          <table className='table table-striped'>
            <thead>
              <tr>
                <th><strong>Principales Caracteristicas</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Soporta temperaturas de hasta 180 °C (356 °F).</td>
              </tr>
              <tr>
                <td>Aplicación manual, sin necesidad de herramientas complejas.</td>
              </tr>
              <tr>
                <td>Excelente adhesión en metales ferrosos, acero inoxidable, PVC, FRP (Fibra de Vidrio), HDPE, cerámica, hormigón.</td>
              </tr>
              <tr>
                <td>Se puede aplicar sobre superficies húmedas o sumergidas.</td>
              </tr>
              <tr>
                <td>Tiempo de curado 30 min. aprox.</td>
              </tr>
              <tr>
                <td>Alta resistencia química.</td>
              </tr>
              <tr>
                <td>El área reparada puede llegar a ser más resistente que la tubería original.</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
  },
  {
    id: 'collapseTwo',
    label: 'Presentación',
    content:
      (
        <div>

          <table className='table table-striped'>
            <thead>

            </thead>
            <tbody>
              <tr>
                <td>1 rollo de cinta de fibra de vidrio impregnado de resina (Seal FiberGlass).
                  <ul>
                    <li className='lista'>2″ x 12′ (50 mm x 3.6 m)</li>
                    <li className='lista'>3″ x 12′ (75 mm x 3.6 m)</li>
                    <li className='lista'>4″ x 12′ (100 mm x 3.6 m)</li>
                    <li className='lista'>4″ x 15′ (100 mm x 4.6 m)</li>
                    <li className='lista'>6″ x 12′ (150 mm x 3.6 m)</li>
                  </ul>
                </td>

              </tr>
              <tr>
                <td>1 barra Putty Epoxy 28g - (Seal Bar).</td>
              </tr>
              <tr>
                <td>1 par de guantes de Nitrílo.</td>
              </tr>
              <tr>
                <td>1 Rollo de Seal Ultra Tape
                <ul>
                <li className='lista'>1″ x 16′ (25 mm x 5 m)</li>
                <li className='lista'>2″ x 16′ (50 mm x 5 m)</li>
                   </ul>
                   </td>
              </tr>
              <tr>
                <td>1 Manual de intrucciones</td>
              </tr>

            </tbody>
          </table>
        </div>
      ),
  },
  {
    id: 'collapseThree',
    label: 'Aplicaciones',
    content:
      (
        <div>

          <table className='table table-striped'>
            <thead>

            </thead>
            <tbody>
              <tr>
                <td>Reparaciones de emergencia.</td>
              </tr>
              <tr>
                <td>Tuberías corroídas o agrietadas.</td>
              </tr>
              <tr>
                <td>Tuberías de presión y líneas gravitacionales.</td>
              </tr>
              <tr>
                <td>Reparaciones subacuáticas y en zonas de salpicaduras. </td>
              </tr>
              <tr>
                <td>Tubería de agua de refrigeración.</td>
              </tr>
              <tr>
                <td>Lineas de purga.</td>
              </tr>
              <tr>
                <td>Defectos de soldadura.</td>
              </tr>
              

            </tbody>
          </table>
        </div>
      ),
  },
  {
    id: 'collapseFour',
    label: 'Documentación',
    content:
      (<button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          // Lógica de descarga
          const pdfFilePath = 'https://drive.google.com/file/d/1IX-YYonyR7QNoeMI_pFsZNNpZhe7dNOa/view?usp=sharing';
          const a = document.createElement('a');
          a.href = pdfFilePath;
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          a.download = 'TDS-KIT-REPARACION-DE-FUGAS.pdf';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          ;
        }}
      >
        Descargar Ficha Técnica
      </button>)
  },

  // Agrega otros elementos del acordeón según sea necesario
];

const Acordeon = () => {
  const [activeTab, setActiveTab] = useState(null);
  const accordionContentRef = useRef(null);

  const handleAccordionToggle = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  useEffect(() => {
    if (activeTab !== null && accordionContentRef.current) {
      accordionContentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeTab, accordionContentRef]);

  return (
    <div className='acordion'>
      {accordionData.map((item, index) => (
        <div className="accordion container " id={`accordion${index}`} key={index}>
          <div className="accordion-item">
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button"
                type="button"
                onClick={() => {
                  handleAccordionToggle(index);
                }}
              >
                {item.label}
              </button>
            </h2>
            <div
              id={item.id}
              className={`accordion-collapse collapse ${activeTab === index ? 'show' : ''}`}
              aria-labelledby={`heading${index}`}
              data-bs-parent={`#accordion${index}`}
            >
              <div className="accordion-body" ref={accordionContentRef}>
                {item.content}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Acordeon;

