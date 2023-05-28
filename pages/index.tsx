import api from './api/ListaConjuntos.json'
import styles from '../styles/Home.module.css'
import PaginaInicial from '../pages/PaginaInicial'
export async function getStaticProps() {
  //   const data = await fetch('https://sheetdb.io/api/v1/vrryyqg2sfdor')
  //   const todos = await data.json()

  return {
    props: { todos: api }
  }
}


export default function Home() {

  return (
    <div className={styles.Home}>
     
      <div className={styles.Card}>
        <PaginaInicial />
      </div>

    </div>
  )
}
