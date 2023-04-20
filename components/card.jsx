
import PushMat from '../pages/PushMat'
import { useState,useEffect } from 'react'
import styless from '../styles/card.module.css'
import Modal from 'react-modal'
import Materiais from '../pages/api/materiais/Materiais'

export default function Card({ todos }) {
    const [Pesquisa, setPesquisa] = useState('')
    const [modalIsOpen, setIsOpen] = useState(false)
    const [modalDados, setModalDados] = useState(null)
    const [MatTudo, setMatTudo]  = useState([''])    
    const [todmat, setTodmat] = useState([]);
    const getAllData = () => {
        fetch('/api/materiais/Materiais')
            .then((result) => result.json())
            .then((result) => setTodmat(result))
    }

    const [ ID , setid]=useState("")
    useEffect(() => {
        getAllData()
    }, [])
 

    

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

    function escolhendoID(){
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



                {todos.filter((Filtrado) => {
                    if (Pesquisa === "") {
                        return Filtrado
                    }
                    return Filtrado.CONJUNTO.includes(Pesquisa) || Filtrado.MAQUINA.includes(Pesquisa)
                })?.map(todos => (

                    <div onClick={() => {  escolhendoID(), abrirModal(), setModalDados(todos),recebeDados()}}  type='Submit' className={styless.Pai}  >


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
                                <h1 key={modalDados?.ID} className={styless.titleModal}>{modalDados?.MAQUINA}</h1><h1 className={styless.titleModal}>{modalDados?.CONJUNTO}</h1>
                                <div className={styless.idMdal} >
                                    <p key={modalDados?.ID} className={styless.idModal}>ID:{modalDados?.ID}</p>

                                    <p  className={styless.idModal}>Minimo:{modalDados?.MINIMO}</p>
                                    <a href={modalDados?.LINKDESENHO} className={styless.idModal}>Desenho:{modalDados?.DESENHO}</a>
                                </div>
                            </div>

                            <div className={styless.divFotoModal}>
                                <div>
                                    <h1>Material para Reparo</h1>


                                    <div>

                                        <table>

                                            <tr>
                                                <th>ID</th>
                                                <th>CODIGO</th>
                                                <th>MATERIAL</th>
                                                <th>QTD JN</th>

                                            </tr>
                                            {todmat.filter((to) => { return modalDados?.ID === to.ID })?.map((item) => (
                                                <tr>
                                                    <td>{item?.ID}</td>
                                                    <td>{item?.CODIGO}</td>
                                                    <td>{item?.MATERIAL}</td>
                                                    <td>{item?.UTILIZADO}</td>
                                                    <td>{item?.REF}</td>
                                                    <td>{item?.JN}</td>
                                                    <td>{item?.VALOR}</td>

                                                </tr>

                                            ))}
                                        </table>
                                    </div>

                                </div>
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