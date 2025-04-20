import style from './article.module.css';
import { BsArrowUpRight } from "react-icons/bs";

function Main({ title, p1, p2, img1, img2, link, structure, id}) {
    
    return (
        <div className={style.main} id={`articulo_${id}`}> {/* Este ID es importante para manejar la barra lateral*/}
            {structure.map((element, index) => {
                const num = id + 1;
                switch (element) {
                    case 'title':
                        return <h1 key={index} className={style.title}>{num}. {title}</h1>;
                    case 'p1':
                        return <p key={index} className={style.paragraph1}>{p1}</p>;
                    case 'p2':
                        return <p key={index} className={style.paragraph2}>{p2}</p>;
                    case 'img1':
                        return <img key={index} src={img1} alt="Imagen tipo 1" className={style.image1} />;
                    case 'img2':
                        return <img key={index} src={img2} alt="Imagen tipo 2" className={style.image2} />;
                    case 'link':
                        return (
                            <a
                                key={index}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={style.link}
                            >
                                Ver más <BsArrowUpRight  className={style.link_icon} />
                            </a>
                        );
                    default:
                        console.error(`Elemento desconocido: ${element}`);
                        return null;
                }
            })}
        </div>
    );
}

export default Main;
