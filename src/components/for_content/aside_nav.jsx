import style from './aside_nav.module.css'
import { useState } from 'react';
import { BsArrowBarLeft } from "react-icons/bs";
import { BsArrowBarRight } from "react-icons/bs";


function Main({list, titulos}){
    const articulos = Array.from({length: list}, ()=> titulos);
    
    const [status, changeStatus] = useState(true);
    
    return(
        <div className={`${style.styled_box} ${status ? style.collapse : '' }`}>
            <button className={style.aside_button}onClick={() => changeStatus(!status)}>
                {status ? <BsArrowBarLeft/> : <BsArrowBarRight/>}
            </button>
            <div className={style.text_box}>
                <h1>
                    INDICE
                </h1>
                <ul>
                    {articulos.map((article, index) => (
                            <a href={`#articulo_${index}`}>
                                <li>
                                    {index+1}. {article}
                                </li>
                            </a>
                        ))}
                </ul>
            </div>
            
        </div>
    )
}

export default Main;