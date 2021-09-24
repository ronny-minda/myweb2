

import { Footer } from './styles/styles';


function main() {
    return (
      <Footer>

        {/* <h2 className="conta">Contáctame</h2> */}
        <ul className="hacer" id="contacto">
            <li>
                <h3>¡Hagamos que las cosas sucedan!</h3>
            </li>
        </ul>

        <ul className="ico">
            <li>
                <a href="mailto:ronny.michael.minda.vera@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
                    <div className="email">

                    </div>
                </a>
            </li>
            <li>
                <a href="tel:0993105654" target="_blank" rel="noopener noreferrer" title="Telefono">
                    <div className="tel">

                    </div>
                </a>
            </li>
            <li>
                <a href="https://github.com/ronny-minda"  target="_blank" rel="noopener noreferrer" title="GitHub">
                    <div className="github">

                    </div>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/ronny-minda-a44261214/"  target="_blank" rel="noopener noreferrer" title="Linkedin">
                    <div className="link">

                    </div>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/MichaelMinda7" target="_blank" rel="noopener noreferrer" title="twitter">
                    <div className="twi">

                    </div>
                </a>
            </li>
            <li>
                <a href="https://platzi.com/p/RonnyMinda/" target="_blank" rel="noopener noreferrer" title="Platzi">
                    <div className="platzi">

                    </div>
                </a>
            </li>
        </ul>

        <ul className="copi">
            <li>© Sitio construido por Michael Minda 2021</li>
        </ul>






      </Footer>
    );
}

export default main;