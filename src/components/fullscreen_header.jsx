import './fullscreen_header.css'
import escudo from '../assets/Escudo_Huanchaco.png'





function fullscreen_header(){
    return (
        <div id="MainHeader">
            <div className="left">
                CENTRAL DE MONITOREO
            </div>
            <div className='escudo'>
                <img src={escudo}/>
            </div>
            <div className="right">
                MUNICIPALIDAD DISTRITAL DE HUANCHACO
            </div>
        </div>
    )
}
export default fullscreen_header;