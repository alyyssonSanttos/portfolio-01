import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import lpdnc from '../../Image/projects/lpdnc.svg'
import portfolio from '../../Image/projects/portfolio.png'

function Projects (){
    return (
        <div className={styles.projects} id='Projects'>
            <h1> Projetos</h1>
            <Card img={lpdnc}
            title="LP - DNC"
            tech="HTML, CSS E JS"
            description="Desenvolvimento de uma landing page para o lançamento da formação em tecnologia"
            repo="https://github.com/alyyssonSanttos/PROJETO-LANDINGPAGE"
            site="https://escola-dnc-proj.netlify.app/"/>
            <Card img={portfolio}
            title="Portfolio React"
            tech="React"
            description="Desenvolvimento de uma landing page para o lançamento da formação em tecnologia"
            repo="https://github.com/alyyssonSanttos/PROJETO-LANDINGPAGE"
            site="https://escola-dnc-proj.netlify.app/"/>
            <ButtonB text='Ver repositório completo'/>
        </div>
    )
}

export default Projects