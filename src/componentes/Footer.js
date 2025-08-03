import React from "react";
import {  Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {

    return <Navbar className="d-flex justify-content-center flex-column " bg="success" variant="dark" >

        {/* <form className="w-25" style={{color:"white"}}>
            <div class="form-group">
                <label for="exampleFormControlInput1">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Sugestões</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-light mt-3 mb-3">Enviar</button>
        </form> */}
            <p>&copy; Pedro Leonardo 2025</p>    
    </Navbar>
}

export default Footer