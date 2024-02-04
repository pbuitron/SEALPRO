import React from 'react';
import './NoFound.css'

const NoFound = () => {
    return (
        <div className='no-found'>
            <h1 className='Ops'>Ooops</h1>
            <h2 className='No'>404 - Página no encontrada</h2>
            <button className='btn btn-primary'>Vamos a la página principal</button>
        </div>
    );
}

export default NoFound;
