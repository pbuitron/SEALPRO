import React from 'react';
import './Categorias.css'
const Categorias = ({ categoria }) => {
    return (
        <div className='container'>
            <p active aria-current='page' href='#' className='cn_categorias' color='light'>
                {categoria}
            </p>
        </div>
    )
}

export default Categorias;

