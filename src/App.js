import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Menu } from './components/Menu';

import { Home } from './views/Home';
import { ListarCliente } from './views/Cliente/ListarCliente';
import { ListarCompra } from './views/Compra/ListarCompra';
import { ListarEmpresa } from './views/Empresa/ListarEmpresa';
import { ListarPromocao } from './views/Promocao/ListarPromocao';
import { ListarCartao } from './views/Cartao/ListarCartao';
import { CadastrarCliente } from './views/Cliente/CadastrarCliente';
import { CadastrarEmpresa } from './views/Empresa/CadastrarEmpresa';
import { CadastrarPromocao } from './views/Promocao/CadastrarPromocao';
import { CadastrarCartao } from './views/Cartao/CadastrarCartao';
import { CadastrarCompra } from './views/Compra/CadastrarCompra';
import { CartaoCliente } from './views/Cliente/CartaoCliente';



function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Switch>
          <Route exact path="/" component={Home}/>;
          <Route path="/listar-cliente" component={ListarCliente}/>;
          <Route path="/listar-compra" component={ListarCompra}/>;
          <Route path="/listar-empresa" component={ListarEmpresa}/>;
          <Route path="/listar-promocao" component={ListarPromocao}/>;
          <Route path="/listar-cartao" component={ListarCartao}/>;
          <Route path="/cadastrar-cliente" component={CadastrarCliente}/>;
          <Route path="/cadastrar-empresa" component={CadastrarEmpresa}/>;
          <Route path="/cadastrar-promocao" component={CadastrarPromocao}/>;
          <Route path="/cadastrar-cartao" component={CadastrarCartao}/>;
          <Route path='/cadastrar-compra' component={CadastrarCompra}/>;
          <Route path='/cartao-cliente/:id' component={CartaoCliente}/>;
        </Switch>
      </Router>
    </div>
  );
}

export default App;
