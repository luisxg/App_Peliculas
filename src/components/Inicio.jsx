import { MoviesGrid } from "./MoviesGrid";
import styles from '../styles/Inicio.module.css';
import logo from '../img/logo.png'
export function Inicio(){
    
        return(
            <div>
                <header>
                    <img src={logo} alt="logo G" className={styles.logo} />
                    <h1 className={styles.title}>Movies</h1>
                </header>
                <main>
                    <ul>
                       <MoviesGrid/>
                    </ul>
                </main>
            </div>
        )

}