import React, { useState } from 'react';
import logo from './img/logo.png';
import './css/style.css';
import './App.css';
import 'primeicons/primeicons.css';


function Home() {

    return (

    <div className="App">
         

      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        
        <div className="Home"> 
        <p>
          O melhor da Tecnologia para sua Empresa 
        </p>
        </div>

        
        
      </header>

    </div>
  );
}

export default Home;
