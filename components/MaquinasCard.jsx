
import { useState, useEffect } from 'react'
import styless from '../styles/MaqCard.module.css'
import Modal from 'react-modal'
import Ba from '../public/imagens/1.gif'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion'

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
export default function MaquinasCard({ todosMaq }) {
    const [Pesquisa, setPesquisa] = useState('')
    const [modalIsOpen, setIsOpen] = useState(false)
    const [modalDados, setModalDados] = useState(null)

    const [ID, setid] = useState("")


    function abrirModal() {
        setIsOpen(true);

    }
    function fecharModal() {
        setIsOpen(false);
        setModalDados(null)
    }


    return (

        <div className={styless.bisaAvo}>

            <div className={styless.pesquisar}  >
                <input

                    type="search"
                    name="pesquisa"
                    id="pesquisa"
                    className={styless.inputPesquisa} placeholder='Pesquisar'
                    value={Pesquisa}
                    onChange={(e) => setPesquisa(e.target.value)}
                />
            </div>
            <div className={styless.avo} key={todosMaq?.Id} >

                {todosMaq?.filter((Filtrado) => {
                    if (Pesquisa === "") {
                        return Filtrado
                    }
                    return Filtrado.Nome.includes(Pesquisa) || Filtrado.Local.includes(Pesquisa)
                })?.map(item => (

                    <div onClick={() => { abrirModal(), setModalDados(item) }} type='Submit' className={styless.Pai}  >



                        <div className={styless.divTitulo} key={item?.id} >
                            <p key={item?.id} className={styless.title}>{item?.Nome}</p>

                            <div className={styless.descricao} key={item?.Id} >
                                <p >{item?.Local}</p>
                            </div>
                        </div>

                    </div>
                ))}

                <div key={modalDados?.ID} className={styless.modalOverlay} >
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={fecharModal}
                        contentLabel="Modal de conjuntos"
                        className={styless.AvoModla}
                    >
                        <div>
                            <div
                                className={styless.btnFechar}>
                                <button
                                    className={styless.btnFechar}
                                    onClick={() => fecharModal()}>x
                                </button>
                            </div>
                            <Accordion className={styless.Accordion}>
                                {modalDados?.Partes?.map(Parte => (
                                    <AccordionItem className={styless.AccordionItem}>
                                        <AccordionItemHeading className={styless.AccordionItemHeading}>
                                            <AccordionItemButton  className={styless.ButtonArcodion} >
                                                {Parte.Nome}

                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className={styless.AccordionItemPanel} >
                                            <table className={styless.table}>
                                                <thead className={styless.thead}>
                                                    <tr className={styless.tr}>
                                                        <th >Peça</th>
                                                        <th>Posição</th>
                                                        <th>Quantidade</th>
                                                        <th>Desenho</th>
                                                        <th>Codigo</th>
                                                        <th>Link</th>
                                                        <th>Link</th>
                                                    </tr>
                                                </thead>
                                                {Parte?.Pecas?.map(Peca => (
                                                    <tbody>
                                                        <tr>
                                                            <td className={styless.td}>{Peca?.NOME}</td>
                                                            <td className={styless.td}>{Peca?.ITEM}</td>
                                                            <td className={styless.td}>{Peca?.QTD}</td>
                                                            <td className={styless.td}>{Peca?.DESENHO}</td>
                                                            <td className={styless.td}>{Peca?.CODIGO}</td>
                                                            <td className={styless.td}>{Peca?.PREÇO}</td>
                                                            <td className={styless.td}><button ><a href={Peca?.LINKDESENHO}>Desenho</a></button></td>
                                                        </tr>
                                                    </tbody>
                                           
   ))} </table> 
    <img className={styless.img}
                        src='../public/imagens/1.gif'
                    >
                    </img>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                ))}

                            </Accordion>




                        </div>

                    </Modal>
                </div>
            </div>
        </div>

    )
}