import styles from '../styles/Menu.module.css'
import { Login, Register } from './Login'

export const Menu : React.FC = () => {
    return <>
    <div className={styles.menu}>
        <ul className={styles.menuItem}>
            <li onClick={() => document.location = "./"}>Domů</li>
            <li>Prohlížeč kluboven</li>
            <li onClick={() => document.location = "./mapa"}>Mapa</li>
            <li>O projektu</li>
        </ul>
        <div className={styles.menuItem}>
            <Login />
            <Register />
        </div>
    </div>
    </>
} 