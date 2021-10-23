
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HEader } from './styles/styles';
import curri from '../assets/CurriculumRonnyMinda.pdf';
// import logo from '../svg/logoPre.svg';

function Header(props) {

    const [estado, setEstado] = useState({
        menu: '0%',
        inicioT: '-100px',
        trabajoT: '-100px',
        certificadoT: '-100px',
        contactoT: '-100px',
        inicioL: '-100px',
        trabajoL: '-100px',
        certificadoL: '-100px',
        contactoL: '-100px',
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
                inicioT: '-100px',
                trabajoT: '-100px',
                certificadoT: '-100px',
                contactoT: '-100px',
                inicioL: '-100px',
                trabajoL: '-100px',
                certificadoL: '-100px',
                contactoL: '-100px',
                blur: '0px',
                display: 'none'
            })
        }else {
            setEstado ({
                menu: '60%',
                inicioT: '10px',
                trabajoT: '80px',
                certificadoT: '150px',
                contactoT: '220px',
                inicioL: '143px',
                trabajoL: '122px',
                certificadoL: '85px',
                contactoL: '11px',
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

            <svg

                width="112mm"
                height="44mm"
                viewBox="0 0 112 44"
                version="1.1"
                id="svg26408"
                xmlns="http://www.w3.org/2000/svg">
                
                    <path className="sombra"
                    d="M 88.464256,37.578856 110.06154,25.220616 90.635826,14.046866 v -3.69661 l 19.387214,11.21789 v -2.74381 L 88.247446,6.2521866 v 9.1765994 l 16.431914,9.48697 -13.835814,7.98812 v -2.78735 l 8.157767,-4.70989 -2.7948,-1.61358 -7.999877,4.61873 z"
                    id="path1401-1" />
                    <path className="sombra"
                    d="M 54.426822,33.76322 33.435711,12.772109 v 5.521683 l 15.610908,15.610916 z"
                    id="path1935-4" />
                    <path className="sombra"
                    d="m 43.383448,33.792241 -9.94048,-9.94048 v 5.325777 l 4.680011,4.68001 z"
                    id="path1937-4" />
                    <path className="sombra"
                    d="m 33.435711,12.837417 h 14.359286 c 0,0 6.849502,1.654332 6.704381,7.139727 -0.145113,5.485413 -6.10215,7.756482 -6.10215,7.756482 l -3.89638,-3.89638 h 3.149027 c 0,0 2.90233,-0.580467 3.01843,-3.366705 0.116092,-2.786238 -3.076471,-4.034235 -3.076471,-4.034235 H 37.099907 Z"
                    id="path2201-4" />
                    <path className="sombra"
                    d="M 60.764332,33.940175 V 17.100524 l 7.506352,8.936135 10.842519,-13.10633 h -3.574458 l -7.188625,8.57869 -7.228342,-8.57869 h -3.693604 v 21.049565 z"
                    id="path2382-7" />
                    <path className="sombra"
                    d="M 79.113203,33.900466 V 15.472168 L 68.270684,28.618216 62.114687,21.389873 v 4.487931 l 6.155997,7.228334 7.585789,-9.214145 -0.03975,10.048182 z"
                    id="path2598-0" />
                    <path className="sombra"
                    d="M 25.960132,7.0895133 4.3628353,19.447783 23.788562,30.621503 v 3.69661 L 4.4013453,23.100233 v 2.74381 l 21.7755967,12.57215 v -9.17658 L 9.7450143,19.752633 23.580842,11.764493 v 2.78735 l -8.15777,4.70992 2.7948,1.61357 7.99988,-4.61874 z"
                    id="path1401-0-4" />
                
                
                    <path className="cara"
                    d="M 86.657566,34.165876 108.25486,21.807636 88.829136,10.633886 V 6.9372763 L 108.21635,18.155166 v -2.74381 L 86.440756,2.8392065 v 9.1765995 l 16.431924,9.48697 -13.835824,7.98812 v -2.78735 l 8.157767,-4.70989 -2.794797,-1.61358 -7.99988,4.61873 z"
                    id="path1401" />
                    <path className="cara"
                    d="M 52.841354,30.768142 31.850243,9.7770343 V 15.298713 L 47.461151,30.90963 Z"
                    id="path1935" />
                    <path className="cara"
                    d="m 41.79798,30.797163 -9.940479,-9.94048 v 5.325777 l 4.68001,4.68001 z"
                    id="path1937" />
                    <path className="cara"
                    d="m 31.850243,9.8423413 h 14.359286 c 0,0 6.849503,1.6543317 6.704381,7.1397247 -0.145112,5.485413 -6.10215,7.756482 -6.10215,7.756482 l -3.89638,-3.89638 h 3.149028 c 0,0 2.902329,-0.580468 3.01843,-3.366705 0.116092,-2.786238 -3.076472,-4.034235 -3.076472,-4.034235 H 35.51444 Z"
                    id="path2201" />
                    <path className="cara"
                    d="M 59.178868,30.945097 V 14.105446 L 66.685221,23.041581 77.527736,9.9352513 H 73.953281 L 66.764656,18.51394 59.536311,9.9352513 H 55.842709 V 30.984815 Z"
                    id="path2382" />
                    <path className="cara"
                    d="M 77.527736,30.905388 V 12.477089 L 66.685221,25.623138 60.529218,18.394795 v 4.487931 l 6.156003,7.228334 7.585789,-9.214145 -0.03972,10.048182 z"
                    id="path2598" />
                    <path className="cara"
                    d="M 24.15345,3.6765333 2.5561511,16.034803 21.981875,27.208523 v 3.69661 L 2.5946611,19.687253 v 2.74381 l 21.7755949,12.57215 v -9.17658 L 7.9383303,16.339653 21.774157,8.3515133 v 2.7873497 l -8.157771,4.70992 2.794803,1.61357 7.999876,-4.61874 z"
                    id="path1401-0" />
            
            </svg>





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

                <li className="Certificado">
                    <Link className={ URLactual === '/certificados/' ? 'aActivo' : ''  } to="/certificados/" onClick={cambio}>
                        <span>Certficados</span>
                    </Link>
                </li>

                <li className="Contacto">
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