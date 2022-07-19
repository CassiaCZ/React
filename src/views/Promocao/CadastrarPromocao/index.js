import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const CadastrarPromocao = () => {

    const [promocao, setPromocao] = useState({
        nome: '',
        descricao: '',
        validade:'',
        EmpresaId:''
    });

    const [status, setStatus] = useState({
        type:'',
        message:''
    })

    const valorInput = e => setPromocao({
        ...promocao, [e.target.name]: e.target.value
    });

    const cadPromocao = async e => {
        e.preventDefault();
        console.log(promocao)

        const headers = {
            'Content-Type': 'application/json'
        }
        await axios.post(api+"/promocaos", promocao,{headers})
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
                    <h1>Cadastrar Promoção</h1>
                </div>
                <div className="p-2">
                    <Link to="/listar-promocao"
                        className="btn btn-outline-primary btn-sm">Promoções</Link>
                </div>
            </div>
            <hr className="m=1" />

            {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
            {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}

            <Form className="p-2" onSubmit={cadPromocao}>
                <FormGroup className="p-2">
                    <Label>Nome</Label>
                    <Input type="text" name="nome" placeholder="Nome da promoção" 
                       onChange={valorInput}/>
                </FormGroup>
                <FormGroup className="p-2">
                    <Label>Descrição</Label>
                    <Input type="text" name="descricao" placeholder="Descrição da promoção" 
                       onChange={valorInput}/>
                </FormGroup>
                <FormGroup className="p-2">
                    <Label>Validade</Label>
                    <Input type="text" name="validade" placeholder="AAAAMMDD" 
                       onChange={valorInput}/>
                </FormGroup>
                <FormGroup className="p-2">
                    <Label>ID Empresa</Label>
                    <Input type="text" name="EmpresaId" placeholder="Informe o ID da empresa" 
                       onChange={valorInput}/>
                </FormGroup>

                <Button type="submit" outline color="success">Cadastrar</Button>

            </Form>
        </Container>

    );
};