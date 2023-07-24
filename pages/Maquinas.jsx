import Menu from '../components/Menu'
import CardMaq from '../components/MaquinasCard.jsx'
import api from './api/ListaMaquinas.json'
import styles from '../styles/Home.module.css'
export async function getStaticProps() {

  return {
    props: { todosMaq: api }
  }
}

export default function PaginaMaquinas({ todosMaq }) {


  return (
    <div>
      <div  className={styles.Menu}>
        <Menu />
      </div>
      <div className={styles.Card}>
        <CardMaq todosMaq={todosMaq} />
      </div>



    </div>
  )
}