
import { Link } from 'react-router-dom';
import { MainHome } from './styles/styles';
import miImg from '../img/halo.jpg';

import Typed from 'react-typed';


function main(props) {
    return (
      <MainHome 
        asercaTra={props.asercaTra}
        asercaOpa={props.asercaOpa}

        proyectosTra={props.proyectosTra}
        proyectosOpa={props.proyectosOpa}

        certificadosTra={props.certificadosTra}
        certificadosOpa={props.certificadosOpa}
        
        hacerOpa={props.hacerOpa}

        pruebaa={props.pruebaa}
        
      >
        <section className="section1">
          <div className="capa1">

            <div className="capa2">
              <section>
                <h1>Michael Minda</h1>
                <p>Desarrollado
                  <Typed
                      strings={[
                          'r Front End',
                          'r WEB',
                          'r junior']}
                          typeSpeed={100}
                          backSpeed={50}
                          loop >
                  </Typed>
                </p>
              </section>
              
              <img src={ miImg } alt="Michael Minda Vera"></img>
            </div>

            <div className="flecha_abajo"></div>
            


          </div>
        </section>


        <section className="sobre_mi">

          <div className="capa1">
            
            <div className="capa2">
              <section>
                <h2>Aserca de mí...</h2>
                <p>
                  ¡Hola! Soy Ronny Michael estudiante en el ITB en la carrera desarrollo Software y actualmente me estoy reinventando como desarrollador front end de manera autodidacta,
                </p>
              </section>
              <section>
                <p>
                  y crear cosas con las que podamos interactuar, soy un aprendiz continuo para mi aprender equivale a explorar nuevas ideas y crecer como individuo.También disfruto de los juegos, la gimnasia y el levantamiento de pesas.
                </p>
              </section>
              <section>
                <p>
                  Tambien tengo conocimientos en JAVA y C++ ya que estos son los lenguajes que aprendi en el ITB desde algo tan basico como if else hasta programacion orientada a objetos como abstraccion, polimorfismo etc.
                </p>
              </section>
              
            </div>

            <hr></hr>

            <h3>Y por ultimo las tecnologías que mas utilizo.</h3>

            <section className="icos_tec">

              <div className="conte">
                <div className="html"></div>
                <p>HTML</p>
              </div>

              <div className="conte">
                <div className="css"></div>
                <p>CSS</p>
              </div>

              <div className="conte">
                <div className="javascript"></div>
                <p className="javascript1">JAVASCRIPT</p>
              </div>

              <div className="conte">
                <div className="react"></div>
                <p>REACT</p>
              </div>

              <div className="conte">
                <div className="sass"></div>
                <p>SASS</p>
              </div>

              <div className="conte">
                <div className="ubuntu"></div>
                <p>UBUNTU</p>
              </div>

              <div className="conte">
                <div className="git"></div>
                <p>GIT</p>
              </div>

              <div className="conte">
                <div className="github"></div>
                <p>GITHUB</p>
              </div>

            </section>

            <div className="flecha_abajo">a</div>
            
          </div>

        </section>
        
        <section className="proyectos">
          <div className="contenedor">
            <h2>Proyectos</h2>
            <p className="p_u">
              Portafolio, paginas web o proyectos personales en las que expongo mis conocimientos en todas estas tecnologias en general un presentacion mia.
            </p>
            <Link to="/trabajos/">Ver Trabajos</Link>
          </div>
        </section>


        <section className="certificados">
          <div className="contenedor">
            <h2>Certificados</h2>
            <p className="p_u">
              *Portafolio, paginas web o proyectos personales en las que expongo mis conocimientos en todas estas tecnologias en general un presentacion mia.*
            </p>
            <Link to="/certificados/">Ver Certificados</Link>
          </div>
        </section>


        <section className="objetivo">
          <div className="contenedor">
            <div className="ico1">
              <div className="ico"></div>
            </div>
            <h3>Responsie Desing</h3>
            <p>
              El Responsive Design o diseño adaptativo, es la técnica que se usa en la actualidad para tener una misma web adaptada a las diferentes plataformas que nos brinda la tecnología: ordenador, tablet y Smartphone.
            </p>
            
          </div>

          <div className="contenedor">
            <div className="ico2">
              <div className="ico"></div>
            </div>
            <h3>Codigo Semantico</h3>
            <p>
              Los motores de búsqueda analizan el código para saber qué clase de contenido muestran y así, saber cómo mostrarlo.
            </p>
            
          </div>

          <div className="contenedor">
            <div className="ico3">
              <div className="ico"></div>
            </div>
            <h3>Aplicaciones Escalables</h3>
            <p>
              Se asegura que su aplicacion pueda crecer sin verse comprometido el rendimiento de la misma.
            </p>
            
          </div>
        </section>

        {/* <h2 className="conta">Contáctame</h2> */}

      </MainHome>
    );
}

export default main;