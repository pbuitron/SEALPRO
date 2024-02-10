
import './Styles/App.css';
import React from "react";
import Home from './pages/Home';
import Cabecera from './Component/Cabecera/Cabecera';
import Footer from './Component/Footer/Footer';
import NoFound from './pages/NoFound';
import ComoAplicar from './pages/Como-Aplicar';
import ReparacionDeFuga from './pages/Reparacion-De-Fugas';
import Faq from './pages/Faq.jsx';
import ContactForm from './pages/Contacto.jsx';
import WhatsAppButton from './Component/Whatsapp/Whatsapp.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




const App = () => {
  return (
    <BrowserRouter>
      <Cabecera />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aplicacion-de-producto" element={<ComoAplicar/>} />
        <Route path="/reparacion-de-fugas" element={<ReparacionDeFuga />} />
        <Route path="/contacto" element={<ContactForm />} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/*" element={<NoFound />} />

      </Routes>
      <WhatsAppButton />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
