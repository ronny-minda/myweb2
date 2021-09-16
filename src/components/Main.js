
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
        
      </Main>
    );
}

export default main;