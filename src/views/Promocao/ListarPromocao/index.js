import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const ListarPromocao = () => {
     const [data, setData] = useState([]);

     const [status, setStatus] = useState({
        type:'',
        message:''
    });

     const getPromocoes = async() =>{
         await axios.get(api+"/listarpromocaos")
         .then((response)=>{
             console.log(response.data.promocao);
             setData(response.data.promocao)
         })
         .catch(()=>{
            setStatus({
                type: 'error',
                message: 'Erro: sem conexão com a API'
            });
        });
    };

     useEffect(()=>{
         getPromocoes()
     },[]);


    return (
        <div>
            <Container>
             <div className="d-flex">
                <div>
                <h1>Visualizar informações da promoção</h1>
                </div>
                <div className="m-auto p-2">
                   <Link to="cadastrar-promocao" 
                   className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                </div>
            </div>

                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                
                <Table>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Validade</th>
                                <th>ID Empresa</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map(item=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.descricao}</td>
                                <td>{item.validade}</td>
                                <td>{item.EmpresaId}</td>
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