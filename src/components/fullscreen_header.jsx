import style from './fullscreen_header.module.css'
import escudo from '../assets/escudo_huanchaco_2560x2560.png'





function fullscreen_header({escudoOnClick}){
    return (
        <div id="header" className={style.main}>
            <div className={style.fondo}></div>
            <div className={style.MainHeader}>
                <div className={style.text1}>
                    CENTRAL DE MONITOREO
                </div>
                <div className={style.escudo}>
                    <a href={escudoOnClick}>
                        <img src={escudo}/>
                    </a>
                </div>
                <div className={style.text2}>
                    MUNICIPALIDAD DISTRITAL DE HUANCHACO
                </div>
            </div>
            
        </div>
    )
}
export default fullscreen_header;