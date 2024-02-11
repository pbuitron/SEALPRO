
import React from "react";
import Carrusel from '../Component/Carrusel/Carrusel';
import H1 from '../Component/H1/Titulo.jsx';
import Categorias from '../Component/Categorias/Categorias'
import Seccion from "./Componentes/Seccion.jsx";
import './Home.css'

const Home = () => {
    return (
        <>


            <Carrusel />
            <H1 value="SEALPRO - LIDERES EN REPARACIÓN DE TUBERÍAS" id="miTitulo" className="st_titulo" />
            <Categorias categoria="SEALPRO ofrece soluciones de vanguardia para reparaciones de tuberías a nivel global. Nuestros productos son ideales para reparar permanentemente fugas activas y daños superficiales, proteger contra la corrosión y reforzar de manera estructural. Nos destacamos por brindar soluciones integrales y eficaces para mantener sus sistemas de tuberías en óptimas condiciones." />
            <Categorias categoria="Con una experiencia incomparable en el campo de las reparaciones de tuberías de emergencia, SEALPRO se destaca por su capacidad para resolver problemas de manera rápida y eficiente. Nuestros equipos especializados están capacitados para intervenir en cualquier situación, logrando reparaciones exitosas en un tiempo récord. Gracias a nuestra tecnología de punta y nuestros métodos innovadores, podemos restaurar la integridad de las tuberías en tan solo 30 minutos, minimizando así el tiempo de inactividad y los costos asociados." />
            <Seccion/>

        </>
    );
}

export default Home;
