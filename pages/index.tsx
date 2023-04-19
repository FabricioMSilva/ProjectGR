import api from './api/ListaConjuntos.json'
import styles from '@/styles/Home.module.css'
import Card from '../components/card'

export async function getStaticProps() {
  //   const data = await fetch('https://sheetdb.io/api/v1/vrryyqg2sfdor')
  //   const todos = await data.json()

  return {
    props: { todos: api }
  }
}


export default function Home({ todos }: { todos: any }) {

  return (
    <div className={styles.Home}>

    <Card todos={todos} />


    </div>
  )
}
