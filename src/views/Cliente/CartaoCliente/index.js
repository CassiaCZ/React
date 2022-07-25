import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import { Container, Table } from "reactstrap";
import { api } from '../../../config'


export const CartaoCliente = () => {

    const params = useParams();

    const [data, setData] = useState();

    const [id, setId] = useState(params.id);
    

    useEffect(() => {
        const getCartaoCliente = async () => {
            await axios.get(api + "/clientes"+id+"cartao")
                .then((response) => {
                    console.log(response.data.cartao)
                    setData(response.data.cartao)
                })
                .catch(() => {
                    console.log("Erro: sem conexão com API")
                })
        }
        getCartaoCliente()
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div><h1>Cartões do cliente</h1></div>
                    <div className="m-auto p-2">
                        <Link to="/listar-cliente"
                            className="btn btn-outline-primary btn-sm">Clientes</Link>
                    </div>
                </div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Cartão</th>
                            <th>ID do Cliente</th>
                            <th>Data do cartão</th>
                            <th>Validade</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* {data.map(cartao=>(
                            <tr key={cartao.id}>
                                <td>{cartao.id}</td>
                                <td>{cartao.ClienteId}</td>
                                <td>{cartao.data}</td>
                                <td>{cartao.validade}</td>
                                <td className="text-center/">
                                    <Link to={"/editar-cartao/"+cartao.id}
                                    className="btn btn-outline-warning btn-sm">Consultar</Link>
                                </td>
                            </tr>
                            ))} */}
                    </tbody>
                </Table>

            </Container>
        </div>
    );
};