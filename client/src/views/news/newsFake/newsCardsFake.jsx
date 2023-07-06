import React from "react";
import { Carousel } from "react-bootstrap";
import NewsCardFake from './newsCardFake'
import "./newsCardFake.module.css";

const NewsCardsFake = () => {
    
    const mockDataNews = [
        {
          id: 1,
          title: "Lo ultimo de Python",
          author: "Jon Snow",
          image: "https://i.ytimg.com/vi/ZFPqYyd0Hh8/maxresdefault.jpg",
          created: "25 de marzo",
          description:
            "At Real Python you can learn all things Python from the ground up, with weekly free and in-depth tutorials. Everything from the absolute basics of Python, to web development and web scraping, to data visualization, and beyond.",
        },
        {
          id: 2,
          title: " ECMAScript 6, Ultimas novedades",
          author: "Carlos Perez",
          image: "https://miro.medium.com/v2/resize:fit:1200/1*g3JGD3I2DiqauhK2CTMLmw.jpeg",
          created: "11 de abril",
          description:
            "Se espera que la actualización ECMAScript 2023, que perfeccionará aún más el lenguaje de programación JavaScript, incluya cuatro mejoras clave. Prevista para junio, esta actualización se centra principalmente en reforzar las matrices y las claves WeakMap con una serie de capacidades mejoradas.",
        },
        {
          id: 3,
          title: "Nuevo lenguaje de programación",
          author: "Kris Vranckxx",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNobbX6etohYfuyPg0cECpNLAydfKwhvc1SQ&usqp=CAU",
          created: "06 de mayo",
          description:
            "Los lenguajes de programación hacen posible que desarrolladores y programadores de todo el mundo creen aplicaciones, servicios online y páginas web. Pero los códigos que mueven dispositivos, programas y tecnologías se pueden escribir en decenas de lenguajes diferentes. ¿Cuál elegir en cada momento?",
        },
        {
          id: 4,
          title: "El efecto de las redes",
          author: "Marcos Gomez",
          image: "https://www.portada.com.uy/wp-content/uploads/2023/06/TENDENCIA-REDES-SOCIALES-1.jpg",
          created: "16 de junio",
          description:
            "Una red social (en plural, redes sociales, abreviado como RR. SS.)1​ es una estructura social compuesta por un conjunto de actores y uno o más lazos o relaciones definidos entre ellos. Su estudio se remonta a los años 1930, con la creación de los sociogramas por parte de Jacob Levy Moreno y Helen Hall Jennings, que dieron origen a la sociometría, precursora del análisis de redes sociales y buena parte de la psicología social.2​ Desde finales de los años 1940, se han estudiado además en profundidad mediante la teoría de grafos.3​ El análisis de redes sociales es un estudio interdisciplinario en el que confluyen las ciencias sociales y del comportamiento, así como matemáticas y estadísticas.2​",
        },
      ];

    return (
        <Carousel fade interval={3000} controls={false} nextIcon={null} prevIcon={null} indicators={false} style={{ height: "500px", marginTop: "-120px" }} >
            {
                mockDataNews.map((news) => {
                    
                    return (
                        <Carousel.Item key={news.id} style={{ height: "1500px" }} >
                            <NewsCardFake
                                link={news.link}
                                category={news.category}
                                author={news.author}
                                image={news.image}
                                description={news.description}
                                title={news.title}
                            />
                        </Carousel.Item>
                    );
                })
            }
        </Carousel >
    );
};

export default NewsCardsFake;
