
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
            <h2>Aserca de mí...</h2>
            <p>
            ¡Hola! Soy Ronny Michael, comencé mi carrera en el ITB como desarrollo Software

y actualmente me estoy reinventando como desarrollador front end de manera

autodidacta,
            </p>
          </div>

        </section>
        
      </Main>
    );
}

export default main;