
import Menu from   '../components/Menu'
import Style from '../styles/Paginainicial.module.css'
export default function PaginaInicial(){
    return(
        <div className={Style.Avo}>
          <Menu/>
          <div className={Style.DivFundo}>
          <img className={Style.IMG}
                        src='/imagens/LogoM.gif'
                    >
                    </img>
          </div>
        </div>
    )
}