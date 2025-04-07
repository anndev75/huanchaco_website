import React from 'react';
import style from './main_footer.module.css';
import logo from '../assets/escudo_huanchaco_500x500.png'
import { FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";

function MainFooter({idBackToTop}) {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        {/* Columna 1: Solo texto */}
        <div className={style.footerLeft}>
          <h2>MonitoreoHuanchaco</h2>
          <p>
            Estamos aquí para servirles y atender sus emergencias. Nuestra atención siempre estará disponible para recibir sus sugerencias y preocupaciones. Juntos, podemos marcar la diferencia y hacer de Huanchaco un distrito más seguro.
          </p>
        </div>

        {/* Columna 2: Información + Redes sociales */}
        <div className={style.footerCenter}>
          <h3 className={style.footerTitle}>Información</h3>
          <div className={style.footerContact}>
            <p>Contáctenos mediante:</p>
            <p><strong>Correo:</strong>centraldemonitoreo0@gmail.com</p>
            <p>
              <strong>Teléfono:</strong> 
              <a href="tel:+51982260543"> 982 260 543</a>
            </p>
            <p><strong>Horario:</strong> 24 Horas</p>
          </div>
          
          <div className={style.footerIcons}>
            <a href="https://www.facebook.com/MonitoreoHco/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className={style.icon} />
            </a>
            <a href="https://www.tiktok.com/@monitoreohco" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok className={style.icon} />
            </a>
            <a href="https://wa.me/51982260543" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp className={style.icon} />
            </a>
          </div>
        </div>

        {/* Columna 3: Mapa */}
        <div className={style.footerRight}>
          <h3 className={style.footerTitle}>Ubicación</h3>
          <div className={style.footerMap}>
            <iframe
              title="Mapa del Centro de Monitoreo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.567456!2d-79.1218536!3d-8.0813466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3bf1b9d36b39%3A0xdc2226f60e313e3a!2sCentro%20De%20Monitoreo%20De%20Huanchaco!5e0!3m2!1ses-419!2spe!4v1712345678901"
              width="100%" 
              height="200" 
              style={{ border: 0 }} 
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Franja azul inferior */}
      <div className={style.municipalBar}>
        <div className={style.municipalContent}>
          <div className={style.logoTextContainer}>
            <img 
              src={logo}
              alt="Escudo de la Municipalidad Distrital de Huanchaco" 
              className={style.municipalLogo}
              onError={(e) => {
                e.target.style.display = 'none';
                console.error('Error al cargar el logo');
              }}
            />
            <p className={style.municipalText}>Municipalidad Distrital de Huanchaco</p>
          </div>
          <a href={idBackToTop} className={style.backToTop} aria-label="Volver al inicio">↑</a>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
