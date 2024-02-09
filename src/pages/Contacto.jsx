import React from "react";
import "./contacto.css";


function ContactForm() {
  
  return (
    <>
    <header className="contenedorFoto bg-image">
        
            <img 
            src="https://firebasestorage.googleapis.com/v0/b/sealpro-7bd18.appspot.com/o/portrait-woman-customer-service-worker_144627-37948.jpg?alt=media&token=b4d19566-9624-4b0c-bd78-5b1e342f64a0" 
            alt=""
            className="fotoContacto" />
        
    </header>
    <div>

      {" "}
      <h1 className="formato">Contáctenos</h1>{" "}
      <form className="cf formato" action="https://formsubmit.co/ventas@industrial-iot.us" method="POST">
        {" "}
        <div className="half left cf ">
          {" "}
          <input className="formato" type="text" placeholder="Nombre" name="user_name" required/>{" "}
          <input className="formato" type="tel" placeholder="Teléfono" name="user_phone" required />{" "}
          <input className="formato" type="email" placeholder="Correo electrónico" name="user_email" required/>{" "}
          <input className="formato" type="hidden" name="_captcha" value="false"/>

        </div>{" "}
        <div className="half right cf">
          {" "}
          <textarea
          className="formato"
            name="message"
            type="text"
            placeholder="Mensaje"
          ></textarea>{" "}
        </div>{" "}
        <input
          className="btn btn-info formato"
          type="submit"
          value="Enviar"
          id="input-submit"
        />{" "}
      </form>{" "}
    </div>
    </>
  );
}
export default ContactForm;
