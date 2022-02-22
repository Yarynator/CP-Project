import Link from 'next/link'
import styles from '../styles/Menu.module.css'
import { Login, Register } from './Login'

export const Menu : React.FC = () => {
    return <>
    <div className={styles.menu}>
        <ul className={styles.menuItem}>
            <li><Link href="/">Domů</Link></li>
            <li>Prohlížeč kluboven</li>
            <li><Link href="./mapa">Mapa</Link></li>
            <li>O projektu</li>
        </ul>
        <div className={styles.menuItem}>
            <Login />
            <Register />
        </div>
    </div>
    </>
} 