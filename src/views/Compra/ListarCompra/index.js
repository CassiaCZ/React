import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const ListarCompra = () => {
     const [data, setData] = useState([]);

     const [status, setStatus] = useState({
        type:'',
        message:''
    });

     const getCompras = async() =>{
         await axios.get(api+"/listarcompras")
         .then((response)=>{
             console.log(response.data.compras);
             setData(response.data.compras)
         })
         .catch(()=>{
            setStatus({
                type: 'error',
                message: 'Erro: sem conexão com a API'
            });
        });
    };

     useEffect(()=>{
         getCompras()
     },[]);


    return (
        <div>
            <Container>
                <div className="d-flex">
                <div>
                <h1>Visualizar informações do cliente</h1>
                </div>
                <div className="m-auto p-2">
                   <Link to="cadastrar-compra" 
                   className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                </div>
                </div>
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                <Table>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>ID Cartão</th>
                                <th>ID Promoção</th>
                                <th>Data</th>
                                <th>Quantidade</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                           {data.map(item=>(
                           <tr key={item.CartaoId}>
                               <td>{item.CartaoId}</td>
                               <td>{item.PromocaoId}</td>
                               <td>{item.data}</td>
                               <td>{item.quantidade}</td>
                               <td>{item.valor}</td>
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