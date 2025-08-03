import { useEffect, useState } from "react";


function Teste() {
    const [usuarios, setUsuarios] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((resposta) => {
                if (!   resposta.ok) {
                    throw new Error("Erro de requisição")
                }
                return resposta.json();
            })
            .then((dados) => {
                setUsuarios(dados);
                setCarregando(false)
            })
            .catch((erro) => {
                setErro(erro.message);
                setCarregando(false)
            })
    }, [])

    if (carregando) {
        return <p>carregando...</p>
    }

    if (erro) {
        return <p>Ocorreu um erro: {erro}</p>
    }

    return (
        <div>
            <h1>Lista de Usuários</h1>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>

                        {usuario.name} - {usuario.email}
                    </li>

                ))}
            </ul>
        </div>
    )

}

export default Teste;