
import { Main } from './styles/styles';
import miImg from '../img/halo.jpg';


function main() {
    return (
      <Main>
        <section className="section1">
          <div className="capa1">

            <div className="capa2">
              <section>
                <h1>Michael Minda</h1>
                <p>Desarrollador Front end</p>
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

            <section className="icos_tec">

            </section>
            
          </div>

        </section>
        
        <section className="proyectos">
          <div className="contenedor">
            <h2>Proyectos</h2>
            <p className="p_u">
              Desarrollo Apps moviles, programas para empresas especialisadas, robotica, Desarrollo Web y más...
            </p>
            <p className="p_a">
              Las colavoraciones y trabajos realizo se aplican a todas las aréas de trabajo.
            </p>
          </div>
        </section>


        <section className="certificados">
          <div className="contenedor">
            <h2>Certificados</h2>
            <p className="p_u">
              Desarrollo Apps moviles, programas para empresas especialisadas, robotica, Desarrollo Web y más...
            </p>
            <p className="p_a">
              Las colavoraciones y trabajos realizo se aplican a todas las aréas de trabajo.
            </p>
          </div>
        </section>


        <section className="objetivo">
          <div className="contenedor">
            <div className="ico"></div>
            <h3>Responsie Desing</h3>
            <p>
              El Responsive Design o diseño adaptativo, es la técnica que se usa en la actualidad para tener una misma web adaptada a las diferentes plataformas que nos brinda la tecnología: ordenador, tablet y Smartphone.
            </p>
            
          </div>

          <div className="contenedor">
            <div className="ico"></div>
            <h3>CODIGO SEMANTICO</h3>
            <p>
              Los motores de búsqueda analizan el código para saber qué clase de contenido muestran y así, saber cómo mostrarlo.
            </p>
            
          </div>

          <div className="contenedor">
            <div className="ico"></div>
            <h3>APLICACIONES ESCALABLES</h3>
            <p>
              Se asegura que su aplicacion pueda crecer sin verse comprometido el rendimiento de la misma.
            </p>
            
          </div>
        </section>

        {/* <h2 className="conta">Contáctame</h2> */}

      </Main>
    );
}

export default main;