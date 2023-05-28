import { useState } from 'react'
import style from '../styles/cadastro.module.css'

import InputMaq from '../components/inputMaq'

export default function Cadastro(todos) {

    const [dadosForm, setdadosForm] = useState({
        id: '',
        Conjunto: '',
        Maquina: '',
        Desenho: '',
        LinkDesenho: '',
        LinkFoto: ''
    })
    const onChangeInput = e => setdadosForm(
        { ...dadosForm, [e.target.name]: e.target.value })
    const enviarConjunto = async e => {
        e.preventDefault()
        console.log(dadosForm.LinkDesenho)

    }

    return (
   
        <div className={style.Avo}>

                <div className={style.Title}>
                    <h1 className={style.titulo}>Cadastro de Conjunto</h1>
                </div>
                <div className={style.Pai}>

                    <div className={style.TioAlto}>

                        <div className={style.TioBaixo}>

                            <div className={style.contentPai}>
                                <div className={style.contentFilho}>

                                    <input className={style.inputs}
                                        type="text"
                                        name="Conjunto"
                                        id={dadosForm.id}
                                        placeholder='Nome do conjunto'
                                        value={dadosForm.Conjunto}
                                        onChange={onChangeInput}
                                        key={""}
                                    />
                                </div>



                                <div className={style.contentFilho}>
                                    <InputMaq />
                                </div>
                                <div className={style.contentFilho}>

                                    <input className={style.inputs}
                                        type="text"
                                        name="Desenho"
                                        placeholder='Numero do Desenho'
                                        id=""
                                        value={dadosForm.Desenho}
                                        onChange={onChangeInput}
                                        key={""}
                                    />
                                </div>
                                <div className={style.contentFilho}>

                                    <input className={style.inputs}
                                        type="link"
                                        name="LinkDesenho"
                                        placeholder='Link do desenho em rede'
                                        id={dadosForm.id}
                                        value={dadosForm.LinkDesenho}
                                        onChange={onChangeInput}
                                        key={""}
                                    />
                                </div>
                                <div className={style.contentFilho}>

                                    <input className={style.inputs}
                                        type="link"
                                        name="LinkFoto"
                                        placeholder='Link da foto na rede'
                                        id={dadosForm.id}
                                        value={dadosForm.LinkFoto}
                                        onChange={onChangeInput}
                                        key={""}
                                    />
                                </div>
                                <div className={style.contentFilho}>
                                    <button type="submit" onClick={enviarConjunto} className={style.btnCad}>Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
          

        </div>
    )
}