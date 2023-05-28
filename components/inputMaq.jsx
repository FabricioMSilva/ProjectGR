
import style from '../styles/cadastro.module.css'
export default function inputMaq() {

    return (
        <div>
            <select
                name="Maquina"
                id={''}
                className={style.inputs}
                defaultValue={'Maquina'}
                
            >
          
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
    )


}