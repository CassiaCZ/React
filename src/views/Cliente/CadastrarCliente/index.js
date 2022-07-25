import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const CadastrarCliente = () => {

    const [cliente, setCliente] = useState({
        nome: '',
        cidade: '',
        uf:'',
        nascimento:''
    });

    const [status, setStatus] = useState({
        type:'',
        message:''
    })

    const valorInput = e => setCliente({
        ...cliente, [e.target.name]: e.target.value
    });

    const cadCliente = async e => {
        e.preventDefault();
        console.log(cliente)

        const headers = {
            'Content-Type': 'application/json'
        }
        await axios.post(api+"/clientes", cliente,{headers})
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
                <div className="p-2">
                    <h1>Cadastrar Cliente</h1>
                </div>
                <div className="m-auto p-2">
                    <Link to="/listar-cliente"
                        className="btn btn-outline-primary btn-sm">Clientes</Link>
                </div>
            </div>
            <hr className="m=1" />

            {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
            {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}

            <Form className="p-2" onSubmit={cadCliente}>
                <FormGroup className="p-2">
                    <Label>Nome</Label>
                    <Input type="text" name="nome" placeholder="Nome da empresa" 
                       onChange={valorInput}/>
                </FormGroup>
                <FormGroup className="p-2">
                    <Label>Cidade</Label>
                    <Input type="text" name="cidade" placeholder="Cidade do cliente" 
                       onChange={valorInput}/>
                </FormGroup>
                <FormGroup className="p-2">
                    <Label>UF</Label>
                    <Input type="text" name="uf" placeholder="Estado do cliente" 
                       onChange={valorInput}/>
                </FormGroup>
                <FormGroup className="p-2">
                    <Label>Nascimento</Label>
                    <Input type="text" name="nascimento" placeholder="AAAAMMDD" 
                       onChange={valorInput}/>
                </FormGroup>

                <Button type="submit" outline color="success">Cadastrar</Button>

            </Form>
        </Container>

    );
};