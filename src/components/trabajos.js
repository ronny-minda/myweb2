
import { MainTabajo } from './styles/styles';

import dark from '../img/imgTrabajos/page_darksouls.png'
import nutri from '../img/imgTrabajos/page_Nutricionista.png'
import form from '../img/imgTrabajos/formulario.png'
import boda from '../img/imgTrabajos/page_boda.png'
import segundaWeb from '../img/imgTrabajos/pagePortafolio.png'
import terjeta from '../img/imgTrabajos/tarjeta.png'
import actual1 from '../img/imgTrabajos/page_actual.png'


import html from '../svg/tecno/html.svg'
import cs5 from '../svg/tecno/css.svg'
import js from '../svg/tecno/js.svg'
import react from '../svg/tecno/atomic.svg'
import bootstrap from '../svg/tecno/bootstrap.svg'
import sass from '../svg/tecno/sass.svg'
import node from '../svg/tecno/node.svg'

function Trabajos() {
    return (
        <MainTabajo>
            <section className="titulo">
                <h2>TRABAJOS</h2>
                <p>Estos son unos de los proyectos que tengo o los mejores de mi repositorio y aun sigo haciendo nuevas cosas, experimentando y aprendiendo para la web, ultimamente estoy utilizando React y luego por Node.</p>
            </section>
            
            {/* Darksouls */}
            <ul className="derecha">
                <img src={dark} alt="Pagina Dark Souls"></img>
                <section>
                    

                    <div className="contenedor_disponible">

                        <h2>Pagina Darksouls</h2>
                        <p>
                            Tiene la tematica y imformacion de este video juego como jefes y dlc del mismo.
                        </p>

                        <div className="conte">


                            <a href="https://ronny-minda.github.io/Page_Dark_Souls/" target="_blank" rel="noopener noreferrer">
                                <span>
                                    Disponible en
                                </span>
                                <div className="ico"></div>
                            </a>
                            <a href="https://github.com/ronny-minda/Page_Dark_Souls" target="_blank" rel="noopener noreferrer">
                                <span>
                                    GitHub
                                </span>
                                <div className="ico"></div>
                            </a>

                        </div>

                        

                    </div>

                    <div className="contenedor_tecnologias">
                        <h2>Tecnologias Usadas</h2>

                        <li style={{background: 'linear-gradient(90deg, #0000 0%, #00cdf2 55%, #00cdf2 100%)'}}>
                            <span>REACT</span>
                            <div className="ico" style={{ backgroundImage: `url(${react})` }}></div>
                        </li>

                        <li style={{background: 'linear-gradient(90deg, #0000 0%, #900bfe 55%, #900bfe 100%)'}}>
                            <span>BOOTSTRAP</span>
                            <div className="ico" style={{ backgroundImage: `url(${bootstrap})` }}></div>
                        </li>
                    </div>

                </section>
            </ul>


            {/* FORMULARIO */}
            <ul className="izquierda">
                <img src={form} alt="Formulario"></img>
                <section>
                    

                    <div className="contenedor_disponible">

                        <h2>Formulario</h2>
                        <p>
                            La recreacion de un formulario que utiliza formik para la gestion de formulario y usar herrramientas mas sensillas en aplicaciones.
                        </p>

                        <div className="conte">

                            <a href="https://ronny-minda.github.io/Formulario/" target="_blank" rel="noopener noreferrer">
                                <span>
                                    Disponible en
                                </span>
                                <div className="ico"></div>
                            </a>
                            <a href="https://github.com/ronny-minda/Formulario" target="_blank" rel="noopener noreferrer">
                                <span>
                                    GitHub
                                </span>
                                <div className="ico"></div>
                            </a>

                        </div>

                        

                    </div>

                    <div className="contenedor_tecnologias">
                        <h2>Tecnologias Usadas</h2>

                        <li style={{background: 'linear-gradient(-90deg, #0000 0%, #00cdf2 55%, #00cdf2 100%)'}}>
                            <span>REACT</span>
                            <div className="ico" style={{ backgroundImage: `url(${react})` }}></div>
                        </li>

                    </div>

                </section>
            </ul>


            {/* PAGINA BODAS */}
            <ul className="derecha">
                <img src={boda} alt="Servicios de bodas"></img>
                <section>
                    

                    <div className="contenedor_disponible">

                        <h2>Pagina De Bodas</h2>
                        <p>
                            Pagina sobre servicios de bodas, contacto, blog y la persona que brinda estos servicios de bodas(uso de formik).
                        </p>

                        <div className="conte">

                            <a href="https://ronny-minda.github.io/Pagina_servicio_boda/" target="_blank" rel="noopener noreferrer">
                                <span>
                                    Disponible en
                                </span>
                                <div className="ico"></div>
                            </a>
                            <a href="https://github.com/ronny-minda/Pagina_servicio_boda" target="_blank" rel="noopener noreferrer">
                                <span>
                                    GitHub
                                </span>
                                <div className="ico"></div>
                            </a>

                        </div>

                        

                    </div>

                    <div className="contenedor_tecnologias">
                        <h2>Tecnologias Usadas</h2>

                        <li style={{background: 'linear-gradient(90deg, #0000 0%, #00cdf2 55%, #00cdf2 100%)'}}>
                            <span>REACT</span>
                            <div className="ico" style={{ backgroundImage: `url(${react})` }}></div>
                        </li>

                    </div>

                </section>
            </ul>


            {/* SEGUNDA PAGINA WEB */}
            <ul className="izquierda">
                <img src={segundaWeb} alt="page_Nutricionista"></img>
                <section>
                    

                    <div className="contenedor_disponible">

                        <h2>Anterior Portafolio</h2>
                        <p>
                            Mi anterior pagina web o protafolio.
                        </p>

                        <div className="conte">

                            <a href="https://ronny-minda-anterior-web.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <span>
                                    Disponible en
                                </span>
                                <div className="ico"></div>
                            </a>
                            <a href="https://github.com/ronny-minda/Anterior_pagina_portafolio/" target="_blank" rel="noopener noreferrer">
                                <span>
                                    GitHub
                                </span>
                                <div className="ico"></div>
                            </a>

                        </div>

                        

                    </div>

                    <div className="contenedor_tecnologias">
                        <h2>Tecnologias Usadas</h2>

                        <li style={{background: 'linear-gradient(-90deg, #0000 0%, #00cdf2 55%, #00cdf2 100%)'}}>
                            <span>REACT</span>
                            <div className="ico" style={{ backgroundImage: `url(${react})` }}></div>
                        </li>

                        <li style={{background: 'linear-gradient(-90deg, #0000 0%, #cc6699 55%, #cc6699 100%)'}}>
                            <span>SASS</span>
                            <div className="ico" style={{ backgroundImage: `url(${sass})` }}></div>
                        </li>

                    </div>

                </section>
            </ul>


            {/* PAGINA NUTRICIONISTA */}
            <ul className="derecha">
                <img src={nutri} alt="Page Nutricionista"></img>
                <section>
                    

                    <div className="contenedor_disponible">

                        <h2>Pagina Nutricionista</h2>
                        <p>
                            Pagina sobre servicios de nutricion contacto blog y la persona que brinda estos servicios.
                        </p>

                        <div className="conte">

                            <a href="https://ronny-minda.github.io/Nutricionista/" target="_blank" rel="noopener noreferrer">
                                <span>
                                    Disponible en
                                </span>
                                <div className="ico"></div>
                            </a>
                            <a href="https://github.com/ronny-minda/Nutricionista" target="_blank" rel="noopener noreferrer">
                                <span>
                                    GitHub
                                </span>
                                <div className="ico"></div>
                            </a>

                        </div>

                        

                    </div>

                    <div className="contenedor_tecnologias">
                        <h2>Tecnologias Usadas</h2>

                        <li style={{background: 'linear-gradient(90deg, #0000 0%, #d84923 55%, #d84923 100%)'}}>
                            <span>HTML</span>
                            <div className="ico" style={{ backgroundImage: `url(${html})` }}></div>
                        </li>

                        <li style={{background: 'linear-gradient(90deg, #0000 0%, #196db1 55%, #196db1 100%)'}}>
                            <span>CSS</span>
                            <div className="ico" style={{ backgroundImage: `url(${cs5})` }}></div>
                        </li>

                        <li style={{background: 'linear-gradient(90deg, #0000 0%, #d99924 55%, #d99924 100%)'}}>
                            <span>JAVASCRIPT</span>
                            <div className="ico" style={{ backgroundImage: `url(${js})` }}></div>
                        </li>
                    </div>

                </section>
            </ul>


            {/* TARJETA */}
            <ul className="izquierda">
                <img src={terjeta} alt="Taejeta"></img>
                <section>
                    

                    <div className="contenedor_disponible">

                        <h2>Tarjeta</h2>
                        <p>
                            Tarjeta con Ciertos datos(implementando Node y subido a Heroku).
                        </p>

                        <div className="conte">

                            <a href="https://node-express-tarjeta.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <span>
                                    Disponible en
                                </span>
                                <div className="ico"></div>
                            </a>
                            <a href="https://github.com/ronny-minda/Tarjeta" target="_blank" rel="noopener noreferrer">
                                <span>
                                    GitHub
                                </span>
                                <div className="ico"></div>
                            </a>

                        </div>

                        

                    </div>

                    <div className="contenedor_tecnologias">
                        <h2>Tecnologias Usadas</h2>

                        <li style={{background: 'linear-gradient(-90deg, #0000 0%, #d84923 55%, #d84923 100%)'}}>
                            <span>HTML</span>
                            <div className="ico" style={{ backgroundImage: `url(${html})` }}></div>
                        </li>

                        <li style={{background: 'linear-gradient(-90deg, #00000000 0%, #196db1 55%, #196db1 100%)'}}>
                            <span>CSS</span>
                            <div className="ico" style={{ backgroundImage: `url(${cs5})` }}></div>
                        </li>

                        <li style={{background: 'linear-gradient(-90deg, #0000 0%, #d99924 55%, #d99924 100%)'}}>
                            <span>JAVASCRIPT</span>
                            <div className="ico" style={{ backgroundImage: `url(${js})` }}></div>
                        </li>

                        <li style={{background: 'linear-gradient(-90deg, #0000 0%, #7cc327 55%, #7cc327 100%)'}}>
                            <span>NODE</span>
                            <div className="ico" style={{ backgroundImage: `url(${node})` }}></div>
                        </li>

                    </div>

                </section>
            </ul>



            {/* Pagina actual */}
            <ul className="derecha">
                <img src={actual1} alt="Pagina actual"></img>
                <section>
                    

                    <div className="contenedor_disponible">

                        <h2>Pagina Actual</h2>
                        <p>
                            Mi pagina Web actual o portafolio en la que muestro la payoria de cosas que hago para la Web(uso de styled components).
                        </p>

                        <div className="conte">

                            <a href="http://ronny-minda.github.io/" target="_blank" rel="noopener noreferrer">
                                <span>
                                    Disponible en
                                </span>
                                <div className="ico"></div>
                            </a>
                            <a href="https://github.com/ronny-minda/ronny-minda.github.io" target="_blank" rel="noopener noreferrer">
                                <span>
                                    GitHub
                                </span>
                                <div className="ico"></div>
                            </a>

                        </div>

                        

                    </div>

                    <div className="contenedor_tecnologias">
                        <h2>Tecnologias Usadas</h2>

                        <li style={{background: 'linear-gradient(90deg, #0000 0%, #00cdf2 55%, #00cdf2 100%)'}}>
                            <span>REACT</span>
                            <div className="ico" style={{ backgroundImage: `url(${react})` }}></div>
                        </li>

                    </div>

                </section>
            </ul>






            <div className="sobre_mi"></div>
          <div className="section1"></div>
          <div className="proyectos"></div>
          <div className="certificados"></div>



            {/* <ul className="izquierda">
                <img src={page2} alt="page_Nutricionista"></img>
                <section>
                    

                    <div className="contenedor_disponible">

                        <h2>Pagina Nutricionista</h2>
                        <p>
                            Pagina sobre servicios de nutricion contacto blog y la persona que brinda estos servicios.
                        </p>

                        <div className="conte">

                            <a href="#">
                                <span>
                                    Disponible en
                                </span>
                                <div className="ico"></div>
                            </a>
                            <a href="#">
                                <span>
                                    GitHub
                                </span>
                                <div className="ico"></div>
                            </a>

                        </div>

                        

                    </div>

                    <div className="contenedor_tecnologias">
                        <h2>Tecnologias Usadas</h2>

                        <li style={{background: 'linear-gradient(-90deg, #0000 0%, #d84923 55%, #d84923 100%)'}}>
                            <span>HTML</span>
                            <div className="ico" style={{ backgroundImage: `url(${html})` }}></div>
                        </li>

                        <li style={{background: 'linear-gradient(-90deg, #0000 0%, #196db1 55%, #196db1 100%)'}}>
                            <span>CSS</span>
                            <div className="ico" style={{ backgroundImage: `url(${cs5})` }}></div>
                        </li>

                        <li style={{background: 'linear-gradient(-90deg, #0000 0%, #d99924 55%, #d99924 100%)'}}>
                            <span>JAVASCRIPT</span>
                            <div className="ico" style={{ backgroundImage: `url(${js})` }}></div>
                        </li>
                    </div>

                </section>
            </ul>




            <ul className="derecha">
                <img src={nutri} alt="page_Nutricionista"></img>
                <section>
                    

                    <div className="contenedor_disponible">

                        <h2>Pagina Nutricionista</h2>
                        <p>
                            Pagina sobre servicios de nutricion contacto blog y la persona que brinda estos servicios.
                        </p>

                        <div className="conte">

                            <a href="#">
                                <span>
                                    Disponible en
                                </span>
                                <div className="ico"></div>
                            </a>
                            <a href="#">
                                <span>
                                    GitHub
                                </span>
                                <div className="ico"></div>
                            </a>

                        </div>

                        

                    </div>

                    <div className="contenedor_tecnologias">
                        <h2>Tecnologias Usadas</h2>

                        <li style={{background: 'linear-gradient(90deg, #0000 0%, #d84923 55%, #d84923 100%)'}}>
                            <span>HTML</span>
                            <div className="ico" style={{ backgroundImage: `url(${html})` }}></div>
                        </li>

                        <li style={{background: 'linear-gradient(90deg, #0000 0%, #196db1 55%, #196db1 100%)'}}>
                            <span>CSS</span>
                            <div className="ico" style={{ backgroundImage: `url(${cs5})` }}></div>
                        </li>

                        <li style={{background: 'linear-gradient(90deg, #0000 0%, #d99924 55%, #d99924 100%)'}}>
                            <span>JAVASCRIPT</span>
                            <div className="ico" style={{ backgroundImage: `url(${js})` }}></div>
                        </li>
                    </div>

                </section>
            </ul> */}



  
        </MainTabajo>
    );
}

export default Trabajos;