import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const ListarCartao = () => {
     const [data, setData] = useState([]);

     const [status, setStatus] = useState({
        type:'',
        message:''
    });

     const getCartoes = async() =>{
         await axios.get(api+"/listarcartaos")
         .then((response)=>{
             console.log(response.data.cartaos);
             setData(response.data.cartaos)
         })
         .catch(()=>{
            setStatus({
                type: 'error',
                message: 'Erro: sem conexão com a API'
            });
        });
    };

     useEffect(()=>{
         getCartoes()
     },[]);


    return (
        <div>
            <Container>
                <div className="d-flex">
                <div>
                <h1>Visualizar informações do cartão</h1>
                </div>
                <div className="m-auto p-2">
                    <Link to="cadastrar-cartao"
                    className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                </div>
                </div>
               
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                <Table>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>ID Cliente</th>
                                <th>Data Cartão</th>
                                <th>Validade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.ClienteId}</td>
                                <td>{item.dataCartao}</td>
                                <td>{item.validade}</td>
                                <td className="text-center/">Botão</td>
                            </tr>
                            ))}
                        </tbody>
                    </Table>
                </Table>
            </Container>
        </div>
    );
};