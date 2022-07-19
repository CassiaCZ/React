import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const ListarCliente = () => {
     const [data, setData] = useState([]);

     const [status, setStatus] = useState({
         type:'',
         message:''
     });

     const getClientes = async() =>{
         await axios.get(api+"/listarclientes")
         .then((response)=>{
             console.log(response.data.clientes);
             setData(response.data.clientes)
         })
         .catch(()=>{
             setStatus({
                 type: 'error',
                 message: 'Erro: sem conexão com a API'
             });
         });
     };

     useEffect(()=>{
         getClientes()
     },[]);


    return (
        <div>
            <Container>
                <div className="d-flex">
                <div>
                <h1>Visualizar informações do cliente</h1>
                </div>
                
                <div className="m-auto p-2">
                    <Link to="cadastrar-cliente" className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                </div>
                </div>
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert>:""}
                    <Table striped>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Cidade</th>
                                <th>UF</th>
                                <th>Nascimento</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.cidade}</td>
                                <td>{item.uf}</td>
                                <td>{item.nascimento}</td>
                                <td className="text-center/">
                                    <Link to={"/listar-cartao/"+item.id}></Link>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </Table>
            </Container>
        </div>
    );
};