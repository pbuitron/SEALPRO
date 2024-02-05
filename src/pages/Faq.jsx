import './Faq.css'
import React ,{useState} from 'react';
import faqs from './faq';
import { MDBInput } from 'mdb-react-ui-kit';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredFAQs = faqs.filter(faq =>
    faq.pregunta.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.rpta.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
  <>
    <header>


      <div
        className='p-5 text-center bg-image container'
        style={{ backgroundImage: "url('https://sylwrap.com/wp-content/uploads/2021/04/Wastewater-Header-SylWrap.jpg')", height: '400px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3 faqh1'>PREGUNTAS FRECUENTES</h1>
              
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className='container'> 
      
    <MDBInput
          type="text"
          className='filtro' 
          label='Buscar Pregunta o Respuesta'
          placeholder="Filtre por palabra clave..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
  


      <ul >
        {filteredFAQs.map(faqs => (
          <li key={faqs.id}
          className='container-lista'>
            <strong className='cn_categorias preguntas'>{faqs.pregunta}</strong>
            <p className='cn_categorias rpta'>{faqs.rpta}</p>
          </li>
        ))}
      </ul>
    </section>
    </>

    
  );


}