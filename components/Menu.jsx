import Styles from '../styles/Menu.module.css'
import Link from 'next/link'


export default function Menu() {

    return (
        <div className={Styles.Menu}>
            <div className={Styles.DivIcons}>

                <Link className={Styles.Icon} href='./PaginaInicial'>

                    <p className={Styles.Title}>Home</p>
                </Link>
                <Link className={Styles.Icon} href='./Maquinas'>

                    <img className={Styles.iconcasa}
                        src='/imagens/maquina-de-fabrica.png'
                    >
                    </img>
                    <p className={Styles.Title}>Maquinas</p>
                    </Link>
                <Link className={Styles.Icon} href='./PaginaConjuntos'> <img className={Styles.iconcasa}
                    src='/imagens/adiposo.png'

                ></img>
                    <p className={Styles.Title}>Conjuntos</p>
                </Link>
                <Link className={Styles.Icon} href='./PaginaCadastro'> 
                <img className={Styles.iconcasa}src='/imagens/caderno.gif'></img>
                <p className={Styles.Title}>Criar/Editar</p>
                </Link>
                <div className={Styles.Icon}> <img className={Styles.iconcasa}
                    src='/imagens/grafico-de-linha.gif'

                ></img><p className={Styles.Title}>Gráficos</p></div>
            </div>

        </div>
    )

}