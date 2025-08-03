import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";



function menu(props) {
  return <Card className=" rounded border-white" style={{ width: '18rem', margin: 10 }}>
    <Image
      variant="top"
      src={`${process.env.PUBLIC_URL}/images/${props.imagem}`}
      style={{ objectFit: "cover", maxHeight: "100px" }}
      className="h-100 rounded" />

    <Card.Body>
      <Card.Title>{props.diaSemana}</Card.Title>
      <Card.Text >
        {props.textoDescricao}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush" >
      <ListGroup.Item >Arroz branco</ListGroup.Item>
      <ListGroup.Item>Arroz integral</ListGroup.Item>
      <ListGroup.Item>Feijão carioca</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link>
        <Link to="/detalhes">Saiba mais</Link>
      </Card.Link>
    </Card.Body>
  </Card>

}

export default menu