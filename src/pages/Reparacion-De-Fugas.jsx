import './Reparacion-De-Fugas'
import React from 'react';
import Titulo from '../Component/Titulo/Titulo';
import Acordeon from './Componentes/Acordeon';

const ReparacionDeFuga = () => {
    return (
        <div>
            <Titulo value="KIT DE REPARACION DE TUBERIAS" className="st_titulo" />
            <figure className="figuraKit"><img src="https://www.chesterton.com.mx/wp-content/uploads/2020/07/ARC-GLASS.png" className="figure-img rounded shadow-3 mb-6" alt="Kit de reparación" />
            </figure>
            <Acordeon></Acordeon>
        </div>
    );
}

export default ReparacionDeFuga;
