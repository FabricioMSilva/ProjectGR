import Menu from '../components/Menu'
import CardMaq from '../components/MaquinasCard.jsx'
import api from './api/ListaMaquinas.json'
import styles from '../styles/Home.module.css'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
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