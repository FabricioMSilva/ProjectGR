import Menu from '../components/Menu'
import Card from '../components/card'
import api from './api/ListaConjuntos.json'
import styles from '../styles/Home.module.css'
export async function getStaticProps() {
  //   const data = await fetch('https://sheetdb.io/api/v1/vrryyqg2sfdor')
  //   const todos = await data.json()

  return {
    props: { todos: api }
  }
}

export default function PaginaConjuntos({ todos }: { todos: any }) {


  return (
    <div>
      <div  className={styles.Menu}>
        <Menu />
      </div>
      <div className={styles.Card}>
        <Card todos={todos} />
      </div>



    </div>
  )
}