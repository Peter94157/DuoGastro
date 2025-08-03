import { Image, Card, Spinner } from 'react-bootstrap'
import React, { useEffect, useState } from "react";
import Head from './Head'
import Footer from './Footer'
import '../Css/MenuDetalhado.css'
import { useParams } from 'react-router-dom'
import '../App.css';


function MenuDetalhado() {
    const [carregando, setCarregando] = useState(true);
    const { dia } = useParams()
    const [comida, setComida] = useState([]);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        fetch(`https://apiduo.onrender.com/${dia}`)
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
    }, [dia]);

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
        <>
            <Head />
            <div className='d-flex align-items-center flex-column vh-80 '>
            <Card.Title className='titulo playwrite-au-qld'><h1>{comida.dia}</h1></Card.Title>
                <Card className='translucid shadow p-4 mb-7 rounded border-white'>
                    <Card.Body className='d-flex w-100 justify-content-between align-items-center'>
                        <div className='d-flex align-items-center g-10'>
                            <Image
                                src={`/images/icons/guarnicao1.png`}
                                style={{ maxHeight: "120px", color: "white", marginRight: "20px" }}
                                className="h-140 rounded" />
                        </div>
                        <Card.Title style={{ fontSize: "30px" }}>Guarnição</Card.Title>
                        <Card.Text style={{width:"13rem"}}>
                            <ul className='playwrite-au-qld-roboto'>
                                {comida.guarnicao?.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='translucid shadow p-3 mb-7 rounded border-white'>
                    <Card.Body className='d-flex w-100 justify-content-between align-items-center'>
                        <div className='d-flex align-items-center g-10'>
                            <Image
                                src={`${process.env.PUBLIC_URL}/images/icons/proteina1.png`}
                                style={{ maxHeight: "120px", color: "white", marginRight: "20px" }}
                                className="h-140 rounded" />
                        </div>
                        <Card.Title style={{ fontSize: "30px" }}>Proteina</Card.Title>
                        <Card.Text style={{width:"13rem"}}>
                            <ul className='playwrite-au-qld-roboto'>
                                {comida.proteina?.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='translucid shadow p-3 mb-7 rounded border-white'>
                    <Card.Body className='d-flex w-100 justify-content-between align-items-center'>
                        <div className='d-flex align-items-center g-10'>
                            <Image
                                src={`${process.env.PUBLIC_URL}/images/icons/salada1.png`}
                                style={{ maxHeight: "120px", color: "white", marginRight: "20px" }}
                                className="h-140 rounded" />
                        </div>
                        <Card.Title style={{ fontSize: "30px" }}>Salada</Card.Title>
                        <Card.Text style={{width:"13rem"}}>
                            <ul className='playwrite-au-qld-roboto'>
                                {comida.salada?.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='translucid shadow p-3 mb-7 rounded border-white'>
                    <Card.Body className='d-flex w-100 justify-content-between align-items-center'>
                        <div className='d-flex align-items-center g-10'>

                            <Image
                                src={`${process.env.PUBLIC_URL}/images/icons/bebida.png`}
                                style={{ maxHeight: "120px", color: "white", marginRight: "20px" }}
                                className="h-140 rounded" />
                        </div>
                        <Card.Title style={{ fontSize: "30px" }}>Bebida</Card.Title>
                        <Card.Text style={{width:"13rem"}}>
                            <ul className='playwrite-au-qld-roboto'>
                                {comida.bebida?.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>


            </div>
            <Footer />
        </>
    )

}


export default MenuDetalhado