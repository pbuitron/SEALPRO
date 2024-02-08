import React from 'react';
import './NoFound.css'
import { Link } from 'react-router-dom';

const NoFound = () => {
    return (
        <div className='no-found'>
            <h1 className='Ops'>Ooops</h1>
            <h2 className='No'>404 - Página no encontrada</h2>
            <Link to='/'><button className='btn btn-primary'>Vamos a la página principal</button></Link>
        </div>
    );
}

export default NoFound;
