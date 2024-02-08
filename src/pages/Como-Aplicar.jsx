import React from "react";
import "./Como-aplicar.css";
import Categorias from "../Component/Categorias/Categorias";
import aplicar from "./comoAplicar";
const ComoAplicar = () => {
  return (
    <>
      <header>
        <div
          className="p-5 text-center bg-image container"
          style={{
            backgroundImage:
              "url('https://sylwrap.com/wp-content/uploads/2021/04/Contact-Header-SylWrap.jpg')",
            height: "400px",
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3 formato"><strong>APLICACIÓN</strong></h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="tituloAplicar">
        <Categorias categoria="Para realizar una aplicación efectiva, recomendamos realizar los siguientes pasos detallados a continuación:" />
      </section>

      <section className="card1 container">
        {aplicar.map((datos) => (
          <div className="ts_container">
            <div className="ts_container_img">
              <img
                src={datos.src}
                alt={`imagen de ` + datos.title}
                className="ts_icono"
                id={datos.id}
              />
            </div>
            <p className="cookieHeading">{datos.title}</p>
            <p className="cookieDescription">{datos.description}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default ComoAplicar;
