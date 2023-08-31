import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer (){
    return (
        <div className={styles.footer}>
           <ul>
                <li><a href='https://www.instagram.com/allysson_santtos325'><FaInstagram size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/allysson-santtos-b1ba82253'><FaLinkedin size={30}/></a></li>
                <li><a href='https://www.github.com/alyyssonSanttos'><FaGithub size={30}/></a></li>
            </ul>
            <p>allyssonsanttos321gmail.com</p>
            <p>Allysson_Santtos @ 2023</p>
        </div>
    )
}

export default Footer