import './Reparacion-De-Fugas.css'
import React from 'react';
import Titulo from '../Component/Titulo/Titulo';
import Acordeon from './Componentes/Acordeon';

const ReparacionDeFuga = () => {
    return (
        <div>
            <Titulo value="KIT DE REPARACION DE TUBERIAS" className="st_titulo" />
            <figure className="figuraKit">
                <img src="https://firebasestorage.googleapis.com/v0/b/sealpro-7bd18.appspot.com/o/pixelcut-export.jpeg?alt=media&token=e88c72fc-005f-4ea2-8255-26be58207a43" 
                className="figure-img" 
                alt="Kit de reparación" />
            </figure>
            <Acordeon></Acordeon>
        </div>
    );
}

export default ReparacionDeFuga;
