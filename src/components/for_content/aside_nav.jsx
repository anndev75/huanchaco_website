import style from './aside_nav.module.css'



function Main({list, titulos}){
    const articulos = Array.from({length: list}, ()=> titulos);
    
    
    return(
        <div className={style.main}>
            <div className={style.styled_box}>
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