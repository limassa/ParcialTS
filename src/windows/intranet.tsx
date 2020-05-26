import React from 'react'

function intranet(){
  return(
    <div className="telaLogin">
            <fieldset>
            <legend>Login:</legend><br/>
					  <label>Login / E-mail: </label>
            <input type="text" placeholder="Informe seu login/E-mail"></input><br/>
            <br/> <label>Senha: </label>
            <input type="password" placeholder="Informe sua Senha"></input><br/>
            <br/><br/><br/><br/><button type="button">Login</button>
            </fieldset>
    </div>
  )
}

export default intranet