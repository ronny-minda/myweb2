
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HEader } from './styles/styles';

function Header() {

    const [estado, setEstado] = useState({
        menu: '0%',
        inicioT: '-10px',
        trabajoT: '-10px',
        contactoT: '-10px',
        inicioL: '-10px',
        trabajoL: '-10px',
        contactoL: '-10px',
        blur: '0px',
        display: 'none'
    })

    function cambio() {
        console.log('siii');
        if(estado.menu === '60%'){
            setEstado ({
                menu: '0%',
                inicioT: '-10px',
                trabajoT: '-10px',
                contactoT: '-10px',
                inicioL: '-10px',
                trabajoL: '-10px',
                contactoL: '-10px',
                blur: '0px',
                display: 'none'
            })
        }else {
            setEstado ({
                menu: '60%',
                inicioT: '50px',
                trabajoT: '130px',
                contactoT: '200px',
                inicioL: '200px',
                trabajoL: '150px',
                contactoL: '50px',
                blur: '3px',
                display: 'block'
            })
        }
        
        // setEstado ({
        //     home: 'nav-link active',
        //     bosses: 'nav-link',
        //     escenario: 'nav-link',
        //     programador: 'nav-link'
        // })
    }

    return (
      <>
        <HEader menu={estado}>
            <Link className="a" to="/inicio/">
                <h1>MICHAEL MINDA</h1>
            </Link>

            <div className="nav_blur" onClick={cambio}></div>

            <nav>
                <li className="Inicio">
                    <Link  to="/inicio/">
                        Inicio
                    </Link>
                </li>

                <li className="Trabajos">
                    <Link  to="/trabajos/">
                        Trabajos   
                    </Link>
                </li>

                <li className="Contacto">
                    <a  href="#contacto">
                        Contacto   
                    </a>
                </li>
            </nav>

            <div className="btn_conte">
                <div className="btn" onClick={cambio}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </div>

            
        </HEader>
      </>
    );
}
  
export default Header;  