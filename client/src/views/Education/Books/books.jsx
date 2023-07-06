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
                        JavaScript has become one of the most used languages in the world,
                     It is found in critical infrastructures of very important companies (Facebook,
                     Netflix or Uber use it).
                     For this reason, the need to write higher quality code has become indispensable.
                     quality and readability. Developers, as a general rule, tend to
                     writing code without the explicit intention that it will be understood by another person,
                     since most of the time we focus simply on implementing a
                     solution that works and solves the problem. Most of the time, try
                     to understand the code of a third party or even the one that we write ourselves
                     just a few weeks ago, it can become a really difficult task.
                     This little e-book aims to be a concise reference on how to apply clean code,
                     SOLID, unit testing and TDD, to learn how to write more readable JavaScript code,
                     maintainable and tolerant of changes.</h5>
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
                    Every year, countless hours are invested and numerous resources are wasted
                     due to poorly written code, slowing down development, decreasing the
                     productivity, generating serious failures and even being able to end the
                     organization or company.
                     Renowned software expert Robert C. Martin, along with his colleagues from
                     Object Mentor, present their optimal techniques and agile methodologies for
                     clean up the code on the fly and build it correctly, like so
                     You will improve as a programmer.
                     This work is divided into three parts. The first describes the principles, patterns, and
                     practices for creating clean code. The second includes several case studies
                     whose complexity is increasing. Each example is an exercise in cleaning and
                     code transformation with problems. The third part of the book contains a
                     list of heuristics and bad code symptoms (smells) made when creating
                     the practical cases. The result is a knowledge base that describes
                     how we think when we create, read and clean code.
                     A must have for any developer, software engineer, director of
                     projects, team leader or systems analyst interested in creating code for
                     Best Quality.
                     The book that every programmer must read!</h5>
                </div>
                <div className={styles.book}>
                    <a href="https://drive.google.com/file/d/11DrBXC8Rcpsi3drtAL7s1FIRHw3d9Ha9/view?usp=sharing"><h4 className={styles.text}>El programador pragmático</h4></a>
                    <img className={styles.image} src={Book4} alt="Front Page" />
                    <h5 className={styles.text}>Description: 
                    This book tells you how to program in a way that you can
                     continue. You wouldn't think that would be a difficult thing to do, but it is. Because? For
                     Besides, not all programming books are written by programmers. Many
                     are compiled by language designers or by journalists who work with
                     them to promote their creations. Those books tell you how to speak a language
                     of programming, which is certainly important, but that's just a small
                     part of what a programmer does.</h5>
                </div>
        </div>
    )
}

export default Books;