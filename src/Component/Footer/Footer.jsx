import React from 'react';
/*import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
*/import './Footer.css'

export default function Footer() {
  return (
    <footer className="bg-body-tertiary text-center">
  {/* Grid container */}
  <div className="container p-4"></div>
  {/* Grid container */}

  {/* Copyright */}
  <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
    © 2024 Copyright:
    <a className="text-body" href="https://www.industrial-iot.us/">Industrial Iot Eirl</a>
  </div>
  {/* Copyright */}
</footer>


     
  );
}

