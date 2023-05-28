
import styles from '../styles/Home.module.css'
import PaginaInicial from '../pages/PaginaInicial'


export default function Home() {

  return (
    <div className={styles.Home}>
     
      <div className={styles.Card}>
        <PaginaInicial />
      </div>

    </div>
  )
}
