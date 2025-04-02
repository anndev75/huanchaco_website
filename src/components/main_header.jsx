import { useState } from "react";
import "./main_header.css";
import image from "../assets/escudo_huanchaco.png";

const municipalidad_link = "https://google.com";

function MainHeader() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="navHeader">
      <a href={municipalidad_link} className="title">
        <img src={image} alt="logo" className="image" />
        <div className="text">Central de Monitoreo - Municipalidad de Huanchaco</div>
      </a>
      <div className="buttons">
        {/* Botón Noticias */}
        <div className="dropdown">
          <button onClick={() => toggleMenu("noticias")}>Noticias</button>
          {openMenu === "noticias" && (
            <div className="dropdown-menu">
              <a href="#">Últimas Noticias</a>
              <a href="#">Eventos</a>
              <a href="#">Comunicados</a>
            </div>
          )}
        </div>

        {/* Botón Contacto */}
        <div className="dropdown">
          <button onClick={() => toggleMenu("contacto")}>Contacto</button>
          {openMenu === "contacto" && (
            <div className="dropdown-menu">
              <a href="#">Teléfonos</a>
              <a href="#">Email</a>
              <a href="#">Ubicación</a>
            </div>
          )}
        </div>

        {/* Botón Asesoramiento */}
        <div className="dropdown">
          <button onClick={() => toggleMenu("asesoramiento")}>Asesoramiento</button>
          {openMenu === "asesoramiento" && (
            <div className="dropdown-menu">
              <a href="#">Preguntas Frecuentes</a>
              <a href="#">Guías y Tutoriales</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
