import { useState } from "react";
import style from "./main_header.module.css";
import logo from '../assets/escudo_huanchaco.png';

// Datos
const noticias = ['Últimas Noticias', '2', '3'];
const contacto = ['Correo', 'Whatsapp', 'Llamar'];
const ver_mas = ['Acerca De', '2'];

// Componente reutilizable
function Opcion({ items, text, isActive, onClick }) {
    return (
        <div className={style.draw_option}>
            <button className={`${style.option} ${isActive && style.active}`} onClick={onClick}>
                {text}
            </button>
            {isActive && (
                <ul className={style.nav_sub_nav}>
                    {items.map((item, index) => (
                        <li key={index} className={style.option2}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

// Componente de navegación
function Nav() {
    const [activeOption, setActiveOption] = useState(null);
    const handleOptionClick = (option) => {
        setActiveOption(activeOption === option ? null : option);
    };
    //use the same text in {text}, isActive &&, handleOptionClick().
    return (
        <nav className={style.nav}>
            <Opcion
                items={noticias}
                text="Noticias"
                isActive={activeOption === "Noticias"}
                onClick={() => handleOptionClick("Noticias")}
            />
            <Opcion
                items={contacto}
                text="Contacto"
                isActive={activeOption === "Contacto"}
                onClick={() => handleOptionClick("Contacto")}
            />
            <Opcion
                items={ver_mas}
                text="Ver Más"
                isActive={activeOption === "Ver Más"}
                onClick={() => handleOptionClick("Ver Más")}
            />
        </nav>
    );
}


// Componente del título
function Title() {
    return (
        <a className={style.title} href="#">
            <img src={logo} alt="logo" />
            <p>Central de Monitoreo</p>
        </a>
    );
}

// Componente principal
function Main() {
    const [activeNav, setActiveNav] = useState(true);
    return (
        <div className={style.main}>
            <div className={style.maxWidth}>
                <Title />
                {activeNav && <Nav />}
                <button onClick={()=>{setActiveNav(!activeNav)}} className={style.nav_button}>
                    ...
                </button>
            </div>
        </div>
    );
}

export default Main;
