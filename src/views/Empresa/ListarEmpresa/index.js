import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const ListarEmpresa = () => {
    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type:'',
        message:''
    });

    const getEmpresas = async() =>{
        await axios.get(api+"/listarempresas")
        .then((response)=>{
            console.log(response.data.empresas);
            setData(response.data.empresas)
        })
        .catch(()=>{
            setStatus({
                type: 'error',
                message: 'Erro: sem conexao com a API'
            });
        });
    };

    useEffect(()=>{
        getEmpresas()
    },[]);


   return (
       <div>
           <Container>
               <div className="d-flex">
               <div>
               <h1>Visualizar informações da empresa</h1>
               </div>

               <div className="m-auto p-2">
                    <Link to="cadastrar-empresa" className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                </div>
                </div>

               {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
               <Table>
                   <Table striped>
                       <thead>
                           <tr>
                               <th>ID</th>
                               <th>Nome</th>
                               <th>Data de adesão</th>
                           </tr>
                       </thead>
                       <tbody>
                           {data.map(item=>(
                           <tr key={item.id}>
                               <td>{item.id}</td>
                               <td>{item.nome}</td>
                               <td>{item.dataAdesao}</td>
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