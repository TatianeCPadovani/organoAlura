import Colaborador from "../Colaborador/colaborador";
import "./Time.css";

const Time = (props) => {

 

    return(
       props.colaboradores.length > 0 && //renderização condicional, JS analiza se a segunda condição for true ele realiza a renderização
       
        /*OUTRO EXEMPLO
        const MaiorDeIdade = ({ colaborador }) => {

            const idade = 19;

            return (<div>
                {idade >= 18 && <p>É maior de idade</p>}
                {idade < 18 && <p>Não é maior de idade</p>}
            </div>)
        }

        export default MaiorDeIdade
        */




       <section className="time" style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderBottomColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
              {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} ></Colaborador>) }
            </div>
        </section>
    )
}

export default Time;