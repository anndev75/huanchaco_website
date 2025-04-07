import { useState } from "react";
import { FaBars } from "react-icons/fa";
import style from "./main_header.module.css";
import logo from '../assets/escudo_huanchaco_500x500.png';

// Datos
const noticias = [
    { label: 'Últimas Noticias', link: '#' },
    { label: 'Noticias 2', link: '#' },
    { label: 'Noticias 3', link: '#' },
];
const contacto = [
    { label: 'Correo', link: '#' },
    { label: 'Whatsapp', link: '#' },
    { label: 'Llamar', link: '#' },
];
const ver_mas = [
    { label: 'Acerca De', link: '#' },
    { label: 'Sobre Nosotros', link: '#' },
];

// Componente reutilizable
function Opcion({ items, text, isActive, onClick }) {
    return (
        <div className={style.draw_option} id="_header">
            <button className={`${style.option} ${isActive && style.active}`} onClick={onClick}>
                {text}
            </button>
            {isActive && (
                <ul className={style.nav_sub_nav}>
                    {items.map((item, index) => (
                        <a href={item.link}>
                            <li key={index} className={style.option2}>
                                {item.label}
                            </li>
                        </a>
                        
                    ))}
                </ul>
            )}
        </div>
    );
}

// Componente de navegación
function Nav({visible}) {
    const [activeOption, setActiveOption] = useState(null);
    const handleOptionClick = (option) => {
        setActiveOption(activeOption === option ? null : option);
    };
    //use the same text in {text}, isActive &&, handleOptionClick().
    return (
        <nav className={`${style.nav} ${visible ? "" : style.hidden}`}>
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
    const [activeNav, setActiveNav] = useState(false);
    return (
        <div className={style.main}>
            <div className={style.maxWidth}>
                <Title />
                <Nav visible={activeNav}/>
                <button onClick={()=>{setActiveNav(!activeNav)}} className={style.nav_button}>
                    <FaBars size={15}></FaBars>
                </button>
            </div>
        </div>
    );
}

export default Main;
