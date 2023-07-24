
import styles from '../styles/Home.module.css'
import PaginaInicial from '../pages/PaginaInicial'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Home() {

  return (
    <div className={styles.Home}>
     
      <div className={styles.Card}>
        <PaginaInicial />
      </div>

    </div>
  )
}
