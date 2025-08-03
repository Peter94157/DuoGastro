import React, { useEffect, useState } from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './Head'
import Menu2 from './Menu2'
import Footer from './Footer'
import { Card, Spinner } from "react-bootstrap";

const Home = () => {
  const [carregando, setCarregando] = useState(true);
  const [semana, setSemana] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch(`https://apiduo.onrender.com/`)
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error("Erro na requisição");
        }
        return resposta.json();
      })
      .then((dados) => {
        setSemana(dados.diaSemana);
        setCarregando(false);
      })
      .catch((erro) => {
        setErro(erro.message);
        setCarregando(false);
      });
  }, []);

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



  return (
    <div className='d-flex flex-column' >
      <Head />
      <br></br>
      <br></br>
      <div id="titulo">
        <h1>Menu da semana</h1>
      </div>
      <div id='menu' className='d-flex w-100 p-2 bd-highlight justify-contents-center flex-wrap' >

        {semana.map((item, i) => (
          <Menu2 key={i} diaSemana={item} />
        ))}
      </div>
      <br></br>
      <br></br>
      <Footer />
    </div>
  )
}

export default Home