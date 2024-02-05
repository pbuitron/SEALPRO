
import React from "react";
import Carrusel from '../Component/Carrusel/Carrusel';
import Titulo from '../Component/Titulo/Titulo';
import Categorias from '../Component/Categorias/Categorias'
import Seccion from "./Componentes/Seccion.jsx";
import './Home.css'

const Home = () => {
    return (
        <>


            <Carrusel />
            <Titulo value="SOLUCIONES DE REPARACIONES EN TUBERIAS" id="miTitulo" className="st_titulo" />
            <Categorias categoria="SEALPRO ofrece soluciones de vanguardia para reparaciones de tuberías a nivel global. Nuestros productos son ideales para reparar permanentemente fugas activas y daños superficiales, proteger contra la corrosión y reforzar de manera estructural. Nos destacamos por brindar soluciones integrales y eficaces para mantener sus sistemas de tuberías en óptimas condiciones." />
            <Categorias categoria="SEALPRO es un líder en reparaciones de tuberías de emergencia. Se puede lograr una reparación exitosa de la tubería en solo 30 minutos." />
            <Seccion/>

        </>
    );
}

export default Home;
