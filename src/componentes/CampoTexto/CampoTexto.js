import "./CampoTexto.css"
import {useState} from 'react';

const CampoTexto = (props) => {


   

    const aoDigitar = (evento) =>{
       props.aoAlterado(evento.target.value); //função aoDigitar vai executar função aoAlterado que enviará o parametro do value do target como props
    }
  
    return(
            <div className="campo-texto">
                <label>{props.label}</label>
                <input value={props.valor} onChange={aoDigitar} placeholder={props.placeholder} required={props.obrigatorio}  /*só sera required se o o props obrigatorio = true */ ></input> 
            </div>
    )
}

export default CampoTexto;