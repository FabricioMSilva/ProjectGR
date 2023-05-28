

import { useState, useEffect } from 'react'
import styless from '../styles/card.module.css'
import Modal from 'react-modal'

export default function Card({ todos }) {
    const [Pesquisa, setPesquisa] = useState('')
    const [modalIsOpen, setIsOpen] = useState(false)
    const [modalDados, setModalDados] = useState(null)

    const [todmat, setTodmat] = useState([]);
    const getAllData = () => {
        fetch('/api/materiais/Materiais')
            .then((result) => result.json())
            .then((result) => setTodmat(result))
    }

    const [ID, setid] = useState("")
    useEffect(() => {
        getAllData()
    }, [])
    function abrirModal() {
        setIsOpen(true);
    }
    function fecharModal() {
        setIsOpen(false);
    }

    function escolhendoID() {
        setid(modalDados?.ID)
        console.log(ID)
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
            <div className={styless.avo} key={todos?.id} >



                {todos?.filter((Filtrado) => {
                    if (Pesquisa === "") {
                        return Filtrado
                    }
                    return Filtrado.CONJUNTO.includes(Pesquisa) || Filtrado.MAQUINA.includes(Pesquisa)
                })?.map(todos => (

                    <div onClick={() => { escolhendoID(), abrirModal(), setModalDados(todos) }} type='Submit' className={styless.Pai}  >


                        <div key={todos?.id} className={styless.divFoto}>
                            <img className={styless.foto}
                                src={todos?.FOTO}
                                alt="foto" />
                        </div>
                        <div className={styless.divTitulo} key={todos?.id} >
                            <p key={todos?.id} className={styless.title}>{todos?.CONJUNTO}</p>

                            <div className={styless.descricao} key={todos?.id} >
                                <p >{todos?.MAQUINA}</p>
                                <p>Desenho:{todos?.DESENHO}</p>
                                <p>Min.:{todos?.MINIMO}</p>
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
                        <div
                            className={styless.btnFechar}>
                            <button
                                className={styless.btnFechar}
                                onClick={fecharModal}>x
                            </button>
                        </div>


                        <h1
                            key={modalDados?.ID}
                            className={styless.titleModal}
                        >{modalDados?.MAQUINA}
                        </h1>

                        <h1 className={styless.titleModal}>{modalDados?.CONJUNTO}
                        </h1>


                        <div className={styless.PaiModal}>

                            <div className={styless.Div1}>
                                <div className={styless.tituloMdal}>
                                    <a href={modalDados?.LINKDESENHO} className={styless.idModal}>Desenho:{modalDados?.DESENHO}</a>
                                </div>
                                <div className={styless.divFotoModal}>


                                    <img className={styless.fotoModal}
                                        src={modalDados?.FOTO}
                                        alt="foto" />
                                    <div className={styless.idMdal} >
                                        <p key={modalDados?.ID} className={styless.idModal}>ID:{modalDados?.ID}</p>

                                        <p className={styless.idModal}>Minimo:{modalDados?.MINIMO}</p>


                                    </div>


                                </div>







                            </div>

                            <div className={styless.Div2}>



                                <div className={styless.TabelaModalPai} >



                                    <div className={styless.tabelaModal}>

                                        <table className={styless.table}>

                                            <tr className={styless.tableTr}>

                                                <th className={styless.tdMaterial}>CODIGO</th>
                                                <th className={styless.tdMaterial}>MATERIAL</th>
                                                <th className={styless.tdMaterial}>QTD.</th>

                                            </tr>
                                            {todmat.filter((to) => { return modalDados?.ID === to.ID })?.map((item) => (
                                                <tr className={styless.tableTr2}>

                                                    <td className={styless.tdMaterial}>{item?.CODIGO}</td>
                                                    <td className={styless.tdMaterial}>{item?.MATERIAL}</td>
                                                    <td className={styless.tdMaterial}>{item?.UTILIZADO}</td>
                                                    <td>{item?.REF}</td>
                                                    <td>{item?.JN}</td>
                                                    <td>{item?.VALOR}</td>

                                                </tr>

                                            ))}
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>



                        <div className={styless.DescricaoModal}>
                            <p key={modalDados?.ID} clasName={styless.descModal}>{modalDados?.DESCRICAO}</p>
                        </div>




                    </Modal>
                </div>
            </div>
        </div>

    )
}