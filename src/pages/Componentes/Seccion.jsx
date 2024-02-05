import './Seccion.css'
import React from 'react';
import { seccion } from './seccion';
import Categorias from '../../Component/Categorias/Categorias';

const Seccion = () => {



    return (


        <section className='container Sectioncontainer '>

            {seccion.map(info => (
                <div className='containerSeccion'>
                    <div className='containerImg'>
                        <img
                            src={info.img}
                            alt={`imagen de ` + info.titulo}
                        />
                    </div>
                    <div className='imagenSeccion'>
                        <h2 className="cookieHeading h2Seccion">{info.titulo}</h2>
                        <Categorias categoria={info.descripcion}/>
                        {/*<p className='parrafoSeccion'></p>*/}
                        <button className=' btn btn-info'>Leer más</button>
                    </div>
                </div>
            ))}


        </section>
    );
}

export default Seccion;
