import React,{useState} from 'react';
import Mensagem from "./mensagem";

function Contato (){
  const [inputNome, setInputNome] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputMensagem, setInputMensagem] = useState('')
  const [inputTelefone, setInputTelefone] = useState('')

  const [valor, setValor] = useState("")

  var nome = inputNome
  var email = inputEmail
  var mensagem = inputMensagem
  var telefone = inputTelefone
 
  function concluirCadastro(){
    //alert(`Voce escreveu:\n\nNome: ${inputNome}\n Email: ${inputEmail}\n Mensagem: ${inputMensagem}`)
    //alert('Mensagem Enviada!!!')
     //setValor('Nome: ' + nome <br/>)
    document.write ('Nome: '+ nome + '<br/> E-mail: ' + email + '<br/> Mensagem: ' + mensagem) 

  }  

  return(
    <div className='fale-conosco'>
      {valor}
      <div className="Contato">
			<div className='group-item'>
        <label>
        Nome:
				<br/><input onChange={(e) => setInputNome(e.target.value)} type='text' placeholder='Informe seu nome' />
        </label><br/>
      </div>

      <div className='group-item'>
        <label>
        <br/> E-mail:  
				<br/><input onChange={(e) => setInputEmail(e.target.value)} type='text' placeholder='Informe seu e-mail' /><br/>
        </label>
      </div>

      <div className='group-item'>
        <label>
        <br/> Telefone:  
				<br/><input onChange={(e) => setInputTelefone(e.target.value)} type="text" data-mask="(00)00000-0000" data-mask-selectonfocus="true" placeholder='(00)00000-0000' /><br/>
        </label>
      </div>

      <div className='group-item'>
        <label>
          <br/>Mensagem:
          <br/><textarea  onChange={(e) => setInputMensagem(e.target.value)}  placeholder='Digite sua mensagem'></textarea><br/>
        </label>
      </div>

      <button onClick={() => concluirCadastro()}>Enviar Mensagem</button>
  
      </div>
   
      
      </div>
 
  )
}


export default Contato