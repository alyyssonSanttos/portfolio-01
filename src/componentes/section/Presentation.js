import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'

function Presentation (){
    return (
        <div className={styles.presentation} id='Presentation'>
            <p><strong>Bem-vindo ao meu Portfólio</strong></p>
            <h1>Olá, eu sou Allysson Santtos</h1>
            <p>Sou um apaixona do por tecnologia e soluções inovadoras.<br/>
            Como Product Manager, eu tenho o compromisso de resolver problemas<br/>
            complexos e trazer resultados excepcionais para os negócios.<br/>
            Meus projetos já geraram milhões de reais em receita anual<br/>
            estou sempre em busca de novos desafios para superar.
            </p>
            <ButtonA link='https://www.github.com/alyyssonSanttos' text='Conecte-se comigo!'/>

        </div>
    )
}

export default Presentation