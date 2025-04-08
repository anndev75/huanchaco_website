import style from './content.module.css'
import Article from './for_content/article'
import Nav_Aside from './for_content/aside_nav'

const example = {
    title : 'Ejemplo de título',
    p1 : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in libero vel odio consectetur lobortis. Vestibulum porttitor, nisl at finibus fringilla, lectus enim imperdiet turpis, non dignissim lacus eros sit amet risus. Sed pulvinar viverra rutrum. Ut elit velit, congue eget mattis vitae, commodo tincidunt nisl. Ut ullamcorper sapien ac auctor sollicitudin. Nulla orci dolor, mattis quis dignissim in, mollis quis velit. Vestibulum euismod tellus et leo viverra ultrices. Integer interdum, dui elementum finibus tristique, sapien orci mattis lectus, eget molestie nisi velit vel augue. Vivamus vulputate hendrerit mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis feugiat ac purus sit amet tristique. Ut vitae odio gravida, lacinia augue ut, pretium metus.\nNulla porttitor suscipit ante a pretium. Praesent hendrerit, tortor eget commodo aliquet, lectus nunc hendrerit ligula, sed venenatis libero leo vel sem. ',
    p2 : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in libero vel odio consectetur lobortis. Vestibulum porttitor, nisl at finibus fringilla, lectus enim imperdiet turpis, non dignissim lacus eros sit amet risus. Sed pulvinar viverra rutrum. Ut elit velit, congue eget mattis vitae, commodo tincidunt nisl. Ut ullamcorper sapien ac auctor sollicitudin. Nulla orci dolor, mattis quis dignissim in, mollis quis velit. Vestibulum euismod tellus et leo viverra ultrices. Integer interdum, dui elementum finibus tristique, sapien orci mattis lectus, eget molestie nisi velit vel augue. Vivamus vulputate hendrerit mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis feugiat ac purus sit amet tristique. Ut vitae odio gravida, lacinia augue ut, pretium metus.\nNulla porttitor suscipit ante a pretium. Praesent hendrerit, tortor eget commodo aliquet, lectus nunc hendrerit ligula, sed venenatis libero leo vel sem. ',
    img1: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/EA5E2RIHNVCGTNWMJBDZO5CHT4.jpg',
    img2: 'https://www.huillcaexpedition.com/images/blog/relajacion-costera-en-el-balneario-de-huanchaco-1685563257.jpg',
    link: 'https://www.google.com'
}



function Content(){
    const cantidad = 5;
    const articulos = Array.from({length: cantidad}, ()=> example);

    // En cada campo solo incluir el texto, href o src");
    // structure: [a,r,r,a,y]
    //  types to sort: 'title', 'p1', 'p2', 'img1', 'img2', 'link'
    return (
        <div className={style.main}>
            <div className={style.body}>
                <div className={style.nav_box}>
                    <Nav_Aside
                        list = {cantidad}
                        titulos= {example.title}
                    />
                </div>
                {/* Función provisional para imprimir articulos sin servidor*/}
                <div className={style.articles_box}>
                    {articulos.map((article, index) => (
                        <Article
                            id={`articulo_${index}`}
                            key={index}
                            title={article.title}
                            p1={article.p1}
                            p2={article.p2}
                            img1={article.img1}
                            img2={article.img2}
                            link={article.link}
                            structure={['title', 'p1', 'img1', 'p2', 'img2', 'link']}
                        />
                    ))}
                </div>
                
            </div>
        </div>
    )

}

export default Content;