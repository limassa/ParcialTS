import React from 'react'
import datacenter from '../img/data_center.jpg'

function quemSomos(){
  return(
   <div>
      <img src={datacenter} className="datacenter"/>
      <div className="empresa">
      A JAM Tecnologia tem o intuito de ajudar as empresas de diversos ramos, 
      fornecendo consultoria completa, servicos de Hardware  e Software.
    </div>    
    </div>
  )
}

export default quemSomos