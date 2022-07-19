import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const CadastrarEmpresa = () => {

    const [empresa, setEmpresa] = useState({
        nome: '',
        dataAdesao: ''
    });

    const [status, setStatus] = useState({
        type:'',
        message:''
    })

    const valorInput = e => setEmpresa({
        ...empresa, [e.target.name]: e.target.value
    });

    const cadEmpresa = async e => {
        e.preventDefault();
        console.log(empresa)

        const headers = {
            'Content-Type': 'application/json'
        }
        await axios.post(api+"/empresas", empresa,{headers})
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
                    <h1>Cadastrar Empresa</h1>
                </div>
                <div className="p-2">
                    <Link to="/listar-empresa"
                        className="btn btn-outline-primary btn-sm">Empresas</Link>
                </div>
            </div>
            <hr className="m=1" />

            {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
            {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}

            <Form className="p-2" onSubmit={cadEmpresa}>
                <FormGroup className="p-2">
                    <Label>Nome</Label>
                    <Input type="text" name="nome" placeholder="Nome da empresa" 
                       onChange={valorInput}/>
                </FormGroup>
                <FormGroup className="p-2">
                    <Label>Data Adesão</Label>
                    <Input type="text" name="dataAdesao" placeholder="AAAAMMDD" 
                       onChange={valorInput}/>
                </FormGroup>

                <Button type="submit" outline color="success">Cadastrar</Button>

            </Form>
        </Container>

    );
};