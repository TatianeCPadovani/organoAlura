import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import { useState } from "react";

const Formulario = (props) => { 

const [nome, setNome] = useState('');
const [cargo, setCargo] = useState('');
const [imagem, setImagem] = useState('');
const [time, setTime] = useState('');





const aoSalvar = (evento) =>{
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setCargo('')
    
}
return(
    <section className='formulario'>
        <form onSubmit={aoSalvar}>
        <h2>Preencha os cards para criar o card do colaborador</h2>
        <CampoTexto
            obrigatorio={true} 
            label="Nome"
            placeholder="Digite seu nome"
            valor={nome}
            aoAlterado={valor=> setNome(valor)} //recebe o valor que vem do componente NOME e seta esse valor com o setNome com uma arrowfunction
          ></CampoTexto>


        <CampoTexto
            obrigatorio={true} 
            label="Cargo"
            placeholder="Digite seu cargo"
            valor={cargo}
            aoAlterado={valor=> setCargo(valor)}
          ></CampoTexto>


        <CampoTexto label="Imagem" 
         valor={imagem}
         aoAlterado={valor=> setImagem(valor)}
        ></CampoTexto>




        <ListaSuspensa 
            obrigatorio={true} 
            label="Time"
            itens={props.times}
            valor={time}
            aoAlterado={valor => setTime(valor)}
          ></ListaSuspensa>
        <Botao> Criar Card </Botao>
        </form>
    </section>
)
}

export default Formulario;