
import PushMat from '../pages/PushMat'
import { useState } from 'react'
import styless from '../styles/card.module.css'
import Modal from 'react-modal'
import Materiais from '../pages/api/materiais/Materiais'

export default function Card({ todos }) {
    const [Pesquisa, setPesquisa] = useState('')
    const [ID , setId] = useState('')
    const [modalIsOpen, setIsOpen] = useState(false)
    const [modalDados, setModalDados] = useState(null)
    const [MatTudo, setMatTudo]  = useState([''])    


    function abrirModal() {
        setIsOpen(true);
    }
    function fecharModal() {
        setIsOpen(false);
    }
   function recebeDados(){
        fetch({Materiais})
            .then(res => res.json())
            .then(result => this.setMatTudo({ result }))
            .catch(err => err);
            console.log(MatTudo)
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



                {todos.filter((Filtrado) => {
                    if (Pesquisa === "") {
                        return Filtrado
                    }
                    return Filtrado.CONJUNTO.includes(Pesquisa) || Filtrado.MAQUINA.includes(Pesquisa)
                })?.map(todos => (

                    <div onClick={() => { abrirModal(), setModalDados(todos),recebeDados(), setId(todos?.id)}}  type='Submit' className={styless.Pai} key={todos?.id} >


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

                <div key={modalDados?.ID} >
                    <Modal

                        isOpen={modalIsOpen}
                        onRequestClose={fecharModal}
                        contentLabel="Modal de exemplo"

                    >
                        <div className={styless.PaiModal}>
                            <div className={styless.tituloMdal}>
                                <div >
                                    <button onClick={fecharModal}>Fechar</button>
                                </div>
                                <h1 key={modalDados?.ID} className={styless.titleModal}>{modalDados?.MAQUINA}</h1><h1 key={modalDados?.ID} className={styless.titleModal}>{modalDados?.CONJUNTO}</h1>
                                <div className={styless.idMdal} >
                                    <p key={modalDados?.ID} className={styless.idModal}>ID:{modalDados?.ID}</p>

                                    <p key={modalDados?.ID} className={styless.idModal}>Minimo:{modalDados?.MINIMO}</p>
                                    <a key={modalDados?.ID} href={modalDados?.LINKDESENHO} className={styless.idModal}>Desenho:{modalDados?.DESENHO}</a>
                                </div>
                            </div>

                            <div className={styless.divFotoModal}>
                             <PushMat/>
                                <div>
                                    <img className={styless.fotoModal}
                                        src={modalDados?.FOTO}
                                        alt="foto" />
                                </div>
                            </div>
                            <div> <p key={modalDados?.ID} clasName={styless.idModal}>Descrição:{modalDados?.DESCRICAO}</p>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>

    )
}