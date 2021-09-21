
import { MainTabajo } from './styles/styles';

import dark from '../img/imgTrabajos/page_darksouls.png'
import nutri from '../img/imgTrabajos/page_Nutricionista.png'
import page2 from '../img/imgTrabajos/pagePortafolio.png'
import form from '../img/imgTrabajos/formulario.png'
import boda from '../img/imgTrabajos/page_boda.png'

import html from '../svg/tecno/html.svg'
import cs5 from '../svg/tecno/css.svg'
import js from '../svg/tecno/js.svg'
import react from '../svg/tecno/atomic.svg'
import bootstrap from '../svg/tecno/bootstrap.svg'

function Trabajos() {
    return (
        <MainTabajo>
            <h1>hola</h1>
            
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

                        <li style={{background: 'linear-gradient(90deg, #0000 0%, #00cdf2 55%, #00cdf2 100%)'}}>
                            <span>REACT</span>
                            <div className="ico" style={{ backgroundImage: `url(${react})` }}></div>
                        </li>

                    </div>

                </section>
            </ul>



            <ul className="izquierda">
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
            </ul>



            <ul className="izquierda">
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
            </ul>





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