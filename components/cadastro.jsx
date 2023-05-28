import { useState } from 'react'
import style from '../styles/cadastro.module.css'
import Axios from 'axios';
export default function Cadastro(todos) {
    const url = '/api/ListaConjuntos'
    
    const [dadosForm, setdadosForm] = useState({
        id: '',
        Conjunto: '',
        Maquina: '',
        Desenho: '',
        LinkDesenho: '',
        LinkFoto: ''
    })
    const Controlado = (e) => {
        const name = e.currentTarget.name
        const value = e.currentTarget.value

        setdadosForm((old) => ({
            ...old,
            [name]: value
        }))
    
    }
    const submit = (e)=>{
    
  

 
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
                                    id={1}
                                    placeholder='Nome do conjunto'
                                    value={dadosForm.Conjunto}
                                    onChange={Controlado}
                                    key={""}
                                />
                            </div>
                            <div className={style.contentFilho}>
                                <select
                                    name="Maquina"
                                    id={''}
                                    className={style.inputs}
                                    defaultValue={'Maquina'}
                                    value={dadosForm.Maquina}
                                    onChange={Controlado}
                                >
                                    <option id='' value=""></option>
                                    <option id='' value="M32">M32</option>
                                    <option id='' value="M40">M40</option>
                                    <option id='' value="M661">M661</option>
                                    <option id='' value="M48">M48</option>
                                    <option id='' value="M641">M641</option>
                                    <option id='' value="M536">M536</option>
                                    <option id='' value="M556">M556</option>
                                    <option id='' value="OZCAMS">OZCAMS</option>


                                </select>
                            </div>
                            <div className={style.contentFilho}>

                                <input className={style.inputs}
                                    type="text"
                                    name="Desenho"
                                    placeholder='Numero do Desenho'
                                    value={dadosForm.Desenho}
                                    onChange={Controlado}
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
                                    onChange={Controlado}
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
                                    onChange={Controlado}
                                    key={""}
                                />
                            </div>
                            <div className={style.contentFilho}>
                                <button type="submit" onClick={''} className={style.btnCad}>Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}