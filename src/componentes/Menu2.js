import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


function Menu2(props) {
  const [carregando, setCarregando] = useState(true);
  const [comida, setComida] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch(`https://apiduo.onrender.com/${props.diaSemana}`)
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error("Erro na requisição");
        }
        return resposta.json();
      })
      .then((dados) => {
        setComida(dados);
        setCarregando(false);
      })
      .catch((erro) => {
        setErro(erro.message);
        setCarregando(false);
      });
  }, [props.diaSemana]);

  if (erro) {
    return <h1>Ocorreu um erro: {erro}</h1>;
  }

  if (carregando) {
    return (
      <Card className="rounded border-white" style={{ width: '18rem', margin: 10 }}>
        <Card.Body>
          <Card.Title>Carregando...</Card.Title>
          <Card.Text>
            <Spinner />
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

  return <>

    {
      <Card className="bg-white rounded" style={{ width: '22rem', margin: 10,boxShadow:"7px 7px 10px #000" }}>
        <Card.Body>
          <Card.Title className="playwrite-au-qld display-6 d-flex justify-content-center">{comida.dia}</Card.Title>
        </Card.Body>
{/* 
        <Card.Body>
          <Card.Title>Guarnições</Card.Title>
          <ListGroup className="list-group-flush" >
            {comida.guarnicao?.map((item, i) => (
              <ListGroup.Item key={i}>{item}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body> */}

        <Card.Body className="d-flex align-items-center flex-column">
          <Card.Title style={{fontSize:"2rem"}}>Proteína</Card.Title>
          <ListGroup className="list-group-flush h4" >
            {comida.proteina?.map((item, i) => (
              <ListGroup.Item key={i}>{item}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
        <Card.Body className="d-flex justify-content-end h3 " >
          <Card.Link>
            <Link to={`/detalhes/${comida.dia}`} className="link-success"><FaArrowRight /></Link>
          </Card.Link>
        </Card.Body>
      </Card>

    }
  </>

}

export default Menu2;
