import { useState } from 'react'
import style from '../styles/cadastro.module.css'




export default function Cadastro(todos) {

    const [dadosForm, setdadosForm] = useState({
        id: '',
        Conjunto: '',
        Maquina: '',
        Desenho: '',
        LinkDesenho: '',
        LinkFoto: ''
    })
    const onChangeInput=e=>setdadosForm(
        {...dadosForm,[e.target.name]:e.target.value})
    const enviarConjunto = async e => {
        e.preventDefault()
        console.log(dadosForm.LinkDesenho)

    }

    return (
        
        <div className={style.cadastro}>
           
            <div className={style.btnCadastro}>
                <h1 className={style.titulo}>Cadastro de Conjunto</h1>
                <div  className={style.btnCadastro}>
                    <button type="submit" onClick={enviarConjunto} className={style.btnCad}>Enviar</button>
                </div>
            </div>
            <form className={style.form}>
                <div className={style.content}>
                    <p className={style.p}>Conjunto:</p>
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
                <div className={style.content}>
                    <p className={style.p}>Maquina:</p>
                    <select className={style.inputs}

                        type="text"
                        name="Maquina"
                        id={dadosForm.id}
                        placeholder='Nome da Maquina'
                        value={dadosForm.Maquina}
                        onChange={onChangeInput}
                        key={""}
                        
                    >
                        <option value=""></option>
                        <option value="">M32</option>
                        <option value="">M40</option>
                        <option value="">M48</option>
                        <option value="">M536</option>
                        <option value="">M556</option>
                        <option value="">M641</option>
                        <option value="">M661</option>
                        <option value="">MTT99</option>
                        <option value="">OZCAMS</option>
                        <option value="">FRIGERIO</option>
                         
                    </select>
                </div>
                <div className={style.content}>
                    <p className={style.p}>Desenho:</p>
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
                <div className={style.content}>
                    <p className={style.p}>Link Desenho:</p>
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
                <div className={style.content}>
                    <p className={style.p}>Link Foto:</p>
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

            </form>

        </div>
    )
}