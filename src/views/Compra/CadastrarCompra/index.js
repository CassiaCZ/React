import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const CadastrarCompra = () => {

    const [compra, setCompra] = useState({
        CartaoId: '',
        PromocaoId:'',
        data: '',
        quantidade:'',
        valor:''
    });

    const [status, setStatus] = useState({
        type:'',
        message:''
    })

    const valorInput = e => setCompra({
        ...compra, [e.target.name]: e.target.value
    });

    const cadCompra = async e => {
        e.preventDefault();
        console.log(compra)

        const headers = {
            'Content-Type': 'application/json'
        }
        await axios.post(api+"/compras", compra,{headers})
        .then((response)=>{
            if (response.data.error){
                setStatus({
                    type: 'error',
                    message: response.data.message
                });
            }else{
                setStatus({
                    type:'success',
                    message: response.data.message
                });
            };
        })
        .catch(()=>{
            console.log("Erro: sem conexão com a API.")
        })
    };

    return (
        <Container>
            <div className="d-flex">
                <div className="m-auto p-2">
                    <h1>Cadastrar Compra</h1>
                </div>
                <div className="p-2">
                    <Link to="/listar-compra"
                        className="btn btn-outline-primary btn-sm">Compras</Link>
                </div>
            </div>
            <hr className="m=1" />

            {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
            {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}

            <Form className="p-2" onSubmit={cadCompra}>
                <FormGroup className="p-2">
                    <Label>ID Cartão</Label>
                    <Input type="text" name="CartaoId" placeholder="ID do cartão" 
                       onChange={valorInput}/>
                </FormGroup>
                <FormGroup className="p-2">
                    <Label>ID Promoção</Label>
                    <Input type="text" name="PromocaoId" placeholder="ID da promoção" 
                       onChange={valorInput}/>
                </FormGroup>
                <FormGroup className="p-2">
                    <Label>Data</Label>
                    <Input type="text" name="data" placeholder="AAAAMMDD" 
                       onChange={valorInput}/>
                </FormGroup>
                <FormGroup className="p-2">
                    <Label>Quantidade</Label>
                    <Input type="text" name="quantidade" placeholder="Quantidade de itens" 
                       onChange={valorInput}/>
                </FormGroup>
                <FormGroup className="p-2">
                    <Label>Valor</Label>
                    <Input type="text" name="valor" placeholder="Valor total dos itens" 
                       onChange={valorInput}/>
                </FormGroup>

                <Button type="submit" outline color="success">Cadastrar</Button>

            </Form>
        </Container>

    );
};