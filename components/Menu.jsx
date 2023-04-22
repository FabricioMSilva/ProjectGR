import Styles from '../styles/Menu.module.css'



export default function Menu(){

return(
    <div>
        <div className={Styles.DivIcons}>

           <div className={Styles.Icon}> <img className={Styles.iconcasa}
                src='/imagens/casa.gif'
               
                ></img><p>Home</p></div>
          
           <div className={Styles.Icon}> <img className={Styles.iconcasa}
                src='/imagens/livro.gif'
              
            ></img> <p>Conjuntos</p></div> 
            <div className={Styles.Icon}> <img className={Styles.iconcasa}
                src='/imagens/caderno.gif'
             
            ></img><p>Criar/Editar</p></div> 
           <div className={Styles.Icon}> <img className={Styles.iconcasa}
                src='/imagens/grafico-de-linha.gif'
          
            ></img><p>Gráficos</p></div>
        </div>
       
    </div>
)

}