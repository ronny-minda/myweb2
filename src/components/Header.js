
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HEader } from './styles/styles';
import curri from '../assets/CurriculumRonnyMinda.pdf';

function Header(props) {

    const [estado, setEstado] = useState({
        menu: '0%',
        inicioT: '-20px',
        trabajoT: '-20px',
        contactoT: '-20px',
        inicioL: '-20px',
        trabajoL: '-20px',
        contactoL: '-20px',
        blur: '0px',
        display: 'none'
    })


    // const [activo, setActivo] = useState({
    //     inicio: '0%',
    //     trabajo: '',
    // })
        var URLactual = window.location.pathname;
        
    function cambio() {
        // props.prueba = 'nooo'
        

        if (URLactual === '/trabajos/') {
            // console.log('ruta')
        }


        // console.log('siii');
        if(estado.menu === '60%'){
            setEstado ({
                menu: '0%',
                inicioT: '-20px',
                trabajoT: '-20px',
                contactoT: '-20px',
                inicioL: '-20px',
                trabajoL: '-20px',
                contactoL: '-20px',
                blur: '0px',
                display: 'none'
            })
        }else {
            setEstado ({
                menu: '60%',
                inicioT: '50px',
                trabajoT: '130px',
                contactoT: '220px',
                inicioL: '130px',
                trabajoL: '100px',
                contactoL: '30px',
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
                <h1>RONNY MINDA</h1>
            </Link>

            <div className="nav_blur" onClick={cambio}></div>

            <nav>
                <li className="Inicio">
                    <Link className={ (URLactual === '/' || URLactual === '/inicio/') ? 'aActivo' : '' } to="/inicio/" onClick={cambio}>
                        <span>Inicio</span>
                    </Link>
                </li>

                <li className="Trabajos">
                    <Link className={ URLactual === '/trabajos/' ? 'aActivo' : '' } to="/trabajos/" onClick={cambio}>
                        <span>Trabajos</span>
                    </Link>
                </li>

                <li className="Contacto">
                    <Link className={ URLactual === '/certificados/' ? 'aActivo' : ''  } to="/certificados/" onClick={cambio}>
                        <span>Certficados</span>
                    </Link>
                </li>

                <li className="Certificado">
                    <Link className={ URLactual === '/contacto/' ? 'aActivo' : '' } to="/contacto/" onClick={cambio}>
                        <span>Contacto</span>
                    </Link>
                </li>
            </nav>

            <div className="btn_conte" onClick={cambio}>
                <div className="btn">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </div>

            {/* <div ></div> */}

            <a href={ curri } target="_blank" rel="noopener noreferrer" title="Descargar curriculum" className="CV" download>
                CV⤓
            </a>

            
        </HEader>
      </>
    );
}
  
export default Header;  