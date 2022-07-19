import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const CadastrarCartao = () => {

    const [cartao, setCartao] = useState({
        ClienteId:'',
        dataCartao: '',
        validade: ''
    });

    const [status, setStatus] = useState({
        type:'',
        message:''
    })

    const valorInput = e => setCartao({
        ...cartao, [e.target.name]: e.target.value
    });

    const cadCartao = async e => {
        e.preventDefault();
        console.log(cartao)

        const headers = {
            'Content-Type': 'application/json'
        }
        await axios.post(api+"/cartaos", cartao,{headers})
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
                    <h1>Cadastrar Cartão</h1>
                </div>
                <div className="p-2">
                    <Link to="/listar-cartao"
                        className="btn btn-outline-primary btn-sm">Cartões</Link>
                </div>
            </div>
            <hr className="m=1" />

            {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
            {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}

            <Form className="p-2" onSubmit={cadCartao}>
                <FormGroup className="p-2">
                    <Label>Data do cartão</Label>
                    <Input type="text" name="dataCartao" placeholder="AAAAMMDD" 
                       onChange={valorInput}/>
                </FormGroup>
                <FormGroup className="p-2">
                    <Label>Validade</Label>
                    <Input type="text" name="validade" placeholder="AAAAMMDD" 
                       onChange={valorInput}/>
                </FormGroup>
                <FormGroup className="p-2">
                    <Label>ID Cliente</Label>
                    <Input type="text" name="ClienteId" placeholder="ID do cliente" 
                       onChange={valorInput}/>
                </FormGroup>

                <Button type="submit" outline color="success">Cadastrar</Button>

            </Form>
        </Container>

    );
};