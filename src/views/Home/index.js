import { Container } from "reactstrap";

export const Home = () =>{
    return(
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto">
                    <h1>Home</h1>
                </div>
                <div className="p-2">
                    <a href="/listar-cartao" className="btn btn-outline-secondary btn-sm">Cartões</a>
                </div>
                <div className="p-2">    
                    <a href="/listar-cliente" className="btn btn-outline-secondary btn-sm">Clientes</a>
                </div>
                <div className="p-2">
                    <a href="/listar-compra" className="btn btn-outline-secondary btn-sm">Compras</a>
                </div>
                <div className="p-2">
                    <a href="/listar-empresa" className="btn btn-outline-secondary btn-sm">Empresas</a>
                </div>
                <div className="p-2">
                    <a href="/listar-promocao" className="btn btn-outline-secondary btn-sm">Promoções</a>
                </div>
                </div>
            </Container>
        </div>
    );
};