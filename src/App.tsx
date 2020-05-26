import React, { useState } from 'react';
import './css/style.css';
import './App.css';
import 'primeicons/primeicons.css';

import TelaContato from "./windows/contato"
import Home from "./home"
import QuemSomos from "./windows/quemSomos"
import Produtos from "./windows/produtos"
import Clientes from "./windows/clientes"
import Intranet from "./windows/intranet"

function App() {

  const [contato,setContato]=useState(<Home/>)

    return (

    <div className="App">
         
      <div className="topo">
        <div className="menu">
          <label id="item" className="pi pi-home" onClick={() => setContato(<Home/>)}>Home    </label>
          <label id="item" className="pi pi-comment" onClick={() => setContato(<TelaContato/>)}>Fale Conosco     </label>
          <label id="item" className="pi pi-info-circle" onClick={() => setContato(<QuemSomos/>)}>Quem Somos     </label>
          <label id="item" className="pi pi-shopping-cart" onClick={() => setContato(<Produtos/>)}>Produtos     </label>
          <label id="item" className="pi pi-star" onClick={() => setContato(<Clientes/>)}>Clientes     </label>
          <label id="item" className="pi pi-users" onClick={() => setContato(<Intranet/>)}>Intranet     </label>
          </div>
      </div>

      <header className="App-header">
           {contato}
        
      </header>
      <div className="rodape">
          Desenvolvido por JAM Tecnologia
      </div>
    </div>
  );
}

export default App;
