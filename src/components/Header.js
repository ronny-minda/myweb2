
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HEader } from './styles/styles';

function Header(props) {

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


    // const [activo, setActivo] = useState({
    //     inicio: '0%',
    //     trabajo: '',
    // })
        var URLactual = window.location.href;
        
    function cambio() {
        // props.prueba = 'nooo'
        

        if (URLactual === 'http://localhost:3000/trabajos/') {
            console.log('ruta')
        }


        // console.log('siii');
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
                    <Link className={ URLactual === 'http://localhost:3000/inicio/' && 'aActivo'  } to="/inicio/">
                        <span>Inicio</span>
                    </Link>
                </li>

                <li className="Trabajos">
                    <Link className={ URLactual === 'http://localhost:3000/trabajos/' && 'aActivo'  } to="/trabajos/">
                        <span>Trabajos</span>
                    </Link>
                </li>

                <li className="Contacto">
                    <Link className={ URLactual === 'http://localhost:3000/certificados/' && 'aActivo'  } to="/certificados/">
                        <span>Certficados</span>
                    </Link>
                </li>
            </nav>

            <div className="btn_conte">
                <div className="btn" onClick={cambio}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </div>

            {/* <div ></div> */}

            <a href="#" target="_blank" rel="noopener noreferrer" title="Platzi" className="CV">
                CV⤓
            </a>

            
        </HEader>
      </>
    );
}
  
export default Header;  