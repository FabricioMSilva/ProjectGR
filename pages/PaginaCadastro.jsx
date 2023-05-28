import Menu from '../components/Menu'
import styles from '../styles/Home.module.css'
import Cadastro from '../components/cadastro'

export default function PaginaCadastro() {
    return (
        <div >
            <div className={styles.Menu}>
                <Menu />
            </div>
            <div className={styles.Card}>
                <Cadastro />
            </div>
        </div>
    )
}