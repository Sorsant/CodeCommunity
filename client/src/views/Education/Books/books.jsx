import React from "react";
import Book1 from "./BooksImages/CleanJavaScript.png";
import Book2 from "./BooksImages/CleanCode.png";
import Book3 from "./BooksImages/PatronesDiseño.png";
import Book4 from "./BooksImages/ProgramadorPragmatico.png";
import styles from "./books.module.css";

const Books = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.text}>Here you have a little selection of books for your learning, we hope you enjoy it!</h3>
                <div className={styles.book}>
                <a href="https://drive.google.com/file/d/1-kcphyfUwRx_RwgPyC3QMG8BMjfDXncO/view?usp=sharing"><h4 className={styles.text}>Clean JavaScript</h4></a>
                    <img className={styles.image} src={Book1} alt="Front Page"/>
                    <h5 className={styles.text}>Description: 
                    JavaScript se ha convertido en uno de los lenguajes más utilizados del mundo,
                    se encuentra en infraestructuras críticas de empresas muy importantes (Facebook,
                    Netflix o Uber lo utilizan).
                    Por esta razón, se ha vuelto indispensable la necesidad de escribir código de mayor
                    calidad y legibilidad. Los desarrolladores, por norma general, solemos
                    escribir código sin la intención explícita de que vaya a ser entendido por otra persona,
                    ya que la mayoría de las veces nos centramos simplemente en implementar una
                    solución que funcione y que resuelva el problema. La mayoría de las veces, tratar
                    de entender el código de un tercero o incluso el que escribimos nosotros mismos
                    hace tan solo unas semanas, se puede volver una tarea realmente difícil.
                    Este pequeño e-book pretende ser una referencia concisa de cómo aplicar clean code,
                    SOLID, unit testing y TDD, para aprender a escribir código JavaScript más legible,
                    mantenible y tolerante a cambios.</h5>
                </div>
                <div className={styles.book}>
                    <a href="https://drive.google.com/file/d/1enp4-q0ITDeindPez9eIF4z4jwx94T9Y/view?usp=sharing"><h4 className={styles.text}>Código Limpio</h4></a>
                    <img className={styles.image} src={Book2} alt="Front Page" />
                    <h5 className={styles.text}>Description: 
                    Cada año, se invierten innumerables horas y se pierden numerosos recursos
                    debido a código mal escrito, ralentizando el desarrollo, disminuyendo la
                    productividad, generando graves fallos e incluso pudiendo acabar con la
                    organización o empresa.
                    El reconocido experto de software Robert C. Martin, junto con sus colegas de
                    Object Mentor, nos presentan sus óptimas técnicas y metodologías ágiles para
                    limpiar el código sobre la marcha y crearlo de forma correcta, de este modo
                    mejorará como programador.
                    Esta obra se divide en tres partes. La primera describe los principios, patrones y
                    prácticas para crear código limpio. La segunda incluye varios casos de estudio
                    cuya complejidad va aumentando. Cada ejemplo es un ejercicio de limpieza y
                    transformación de código con problemas. La tercera parte del libro contiene una
                    lista de heurística y síntomas de código erróneo (smells) confeccionada al crear
                    los casos prácticos. El resultado es una base de conocimientos que describe
                    cómo pensamos cuando creamos, leemos y limpiamos código.
                    Imprescindible para cualquier desarrollador, ingeniero de software, director de
                    proyectos, jefe de equipo o analista de sistemas interesado en crear código de
                    mejor calidad.
                    ¡El libro que todo programador debe leer!</h5>
                </div>
                <div className={styles.book}>
                    <a href="https://drive.google.com/file/d/13QIosOrdOKjVcQn2hzHU41K4Qz9No3sn/view?usp=sharing"><h4 className={styles.text}>Sumérgete en los Patrones de Diseño</h4></a>
                    <img className={styles.image} src={Book3} alt="Front Page" />
                    <h5 className={styles.text}>Description: 
                    Este libro contiene las descripciones de 22 patrones de diseño
                    clásicos formulados por la “banda de los cuatro” (o simplemente
                    GoF, por sus siglas en inglés) en 1994.
                    Cada capítulo explora un patrón particular. Por lo tanto, puedes
                    leerlo de principio a fin, o ir eligiendo los patrones que te interesan.
                    Muchos patrones están relacionados, por lo que puedes saltar
                    fácilmente de un tema a otro utilizando varios puntos de enlace.
                    Al final de cada capítulo hay una lista de enlaces entre
                    el patrón actual y otros. Si ves el nombre de un patrón que
                    aún no habías visto, sigue leyendo, este patrón aparecerá en
                    alguno de los capítulos siguientes.
                    Los patrones de diseño son universales. Por ello, todos los eje-
                    mplos de código de este libro están escritos en un pseudocódi-
                    go que no restringe el material a un lenguaje de programación particular.
                    Antes de estudiar los patrones, puedes refrescar tu memoria
                    repasando los términos clave de la programación orientada a objetos.
                    En ese capítulo también se explican los fundamen-
                    tos de los diagramas UML (lenguaje unificado de modelado),
                    lo que resulta de utilidad porque hay un montón de ellos en
                    el libro. Por supuesto, si ya sabes todo esto, puedes proceder
                    directamente a aprender sobre patrones.</h5>
                </div>
                <div className={styles.book}>
                    <a href="https://drive.google.com/file/d/11DrBXC8Rcpsi3drtAL7s1FIRHw3d9Ha9/view?usp=sharing"><h4 className={styles.text}>El programador pragmático</h4></a>
                    <img className={styles.image} src={Book4} alt="Front Page" />
                    <h5 className={styles.text}>Description: 
                    Este libro le dice cómo programar de una manera que pueda
                    seguir. No pensarías que eso sería algo difícil de hacer, pero lo es. ¿Por qué? Por un
                    lado, no todos los libros de programación están escritos por programadores. Muchos
                    son recopilados por diseñadores de lenguajes o por los periodistas que trabajan con
                    ellos para promocionar sus creaciones. Esos libros te dicen cómohablaren un lenguaje
                    de programación, lo cual es ciertamente importante, pero eso es solo una pequeña
                    parte de lo que hace un programador.</h5>
                </div>
        </div>
    )
}

export default Books;