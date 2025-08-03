import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Navbar, Container } from 'react-bootstrap'


function Head() {
  return <Navbar expand="lg" variant='dark' bg="success">
    <Container className='ms-auto'>

      <Navbar.Brand>
        <Link to="/" className="d-flex" style={{ textDecoration: 'none', color: "white" }} >
          <img
            src={`${process.env.PUBLIC_URL}/images/leaf.png`}
            alt="logo"
            width={40}
            height={40}
          />
            <h2 className="m-0 p-0 font-monospace">
              Duo
            <p className="text-sm-start m-0 fs-6 fst-italic fw-light">Gastronomia</p>
            </h2>
        </Link>
      </Navbar.Brand>
    </Container>
  </Navbar>
}

export default Head