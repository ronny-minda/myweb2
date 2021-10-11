
import { MainCertificado } from './styles/styles';
import React, { useState } from 'react';

// import entorno from '../img/imgCertificados/entorno.jpg'
// import github from '../img/imgCertificados/github.jpg'
// import grid from '../img/imgCertificados/grid.jpg'
// import html from '../img/imgCertificados/html-css.jpg'
// import mobile from '../img/imgCertificados/mobile.jpg'
// import preprocesadores from '../img/imgCertificados/preprocesadores.jpg'

import imagen1 from '../img/imgCertificados/1.jpeg'
import imagen2 from '../img/imgCertificados/2.jpeg'
import imagen3 from '../img/imgCertificados/3.jpeg'
import imagen4 from '../img/imgCertificados/4.jpeg'
import imagen5 from '../img/imgCertificados/5.jpeg'
import imagen6 from '../img/imgCertificados/6.jpeg'
import imagen7 from '../img/imgCertificados/7.jpeg'
import imagen8 from '../img/imgCertificados/8.jpeg'
import imagen9 from '../img/imgCertificados/9.jpeg'
import imagen10 from '../img/imgCertificados/10.jpeg'
import imagen11 from '../img/imgCertificados/11.jpeg'
import imagen12 from '../img/imgCertificados/12.jpeg'




function Certificados() {

    const [estado, setEstado] = useState({
      entorno: 'img1 opaNo imgNo',
      fullImg: '',
    })

    const [uso, setUso] = useState({
      fullImg: '',
    })


    function cambio() {

      

      if(estado.entorno === 'img1 opaNo imgNo') {
        setEstado ({
          ...estado,
          entorno: 'img1 opaNo imgSi',
        })

        setTimeout(() => {
          setEstado ({
            ...estado,
            entorno: 'img1 opaSi imgSi',
          })
        }, 1);

      }

      if(estado.entorno === 'img1 opaSi imgSi') {
        setEstado ({
          ...estado,
          entorno: 'img1 opaNo imgSi'
        })

        setTimeout(() => {
          setEstado ({
            ...estado,
            entorno: 'img1 opaNo imgNo'
          })
        }, 500);

      }


      // console.log('siiiiiiii')
    }

    function img1() {

      setUso ({
        ...estado,
        fullImg: imagen1,
      })
    
      cambio()
    }

    function img2() {

      setUso ({
        ...estado,
        fullImg: imagen2,
      })
    
      cambio()
    }

    function img3() {

      setUso ({
        ...estado,
        fullImg: imagen3,
      })
    
      cambio()
    }

    function img4() {

        setUso ({
          ...estado,
          fullImg: imagen4,
        })

      cambio()
    }

    function img5() {

      setUso ({
        ...estado,
        fullImg: imagen5,
      })
    
      cambio()
    }

    function img6() {

      setUso ({
        ...estado,
        fullImg: imagen6,
      })
    
      cambio()
    }

    function img7() {

      setUso ({
        ...estado,
        fullImg: imagen7,
      })
    
      cambio()
    }

    function img8() {

      setUso ({
        ...estado,
        fullImg: imagen8,
      })
    
      cambio()
    }

    function img9() {

      setUso ({
        ...estado,
        fullImg: imagen9,
      })
    
      cambio()
    }

    function img10() {

      setUso ({
        ...estado,
        fullImg: imagen10,
      })
    
      cambio()
    }

    function img11() {

      setUso ({
        ...estado,
        fullImg: imagen11,
      })
    
      cambio()
    }

    function img12() {

      setUso ({
        ...estado,
        fullImg: imagen12,
      })
    
      cambio()
    }

    return (
      <MainCertificado>

        <div className={ estado.entorno } onClick={cambio}>
          <img src={ uso.fullImg } alt="img"></img>
          <div className="x"></div>
        </div>
          
          <div className="titulo">
            <h2>Certificados</h2>
            <p>Certificados conseguidos en Platzi donde me e formado mi bases en el desarrollo Web o el Front end y cosas y que estoy intentando en el Backend</p>
          </div>

          <section>

            <ul>

              <img src={ imagen1 } alt=""></img>
              <div className="boton" onClick={img1}> Ver en grande </div>

              <img src={ imagen2 } alt=""></img>
              <div className="boton" onClick={img2}> Ver en grande </div>

              <img src={ imagen3 } alt=""></img>
              <div className="boton" onClick={img3}> Ver en grande </div>

              <img src={ imagen4 } alt=""></img>
              <div className="boton" onClick={img4}> Ver en grande </div>

              <img src={ imagen5 } alt=""></img>
              <div className="boton" onClick={img5}> Ver en grande </div>

              <img src={ imagen6 } alt=""></img>
              <div className="boton" onClick={img6}> Ver en grande </div>

            </ul>

            <ul>

              <img src={ imagen7 } alt=""></img>
              <div className="boton" onClick={img7}> Ver en grande </div>

              <img src={ imagen8 } alt=""></img>
              <div className="boton" onClick={img8}> Ver en grande </div>

              <img src={ imagen9 } alt=""></img>
              <div className="boton" onClick={img9}> Ver en grande </div>

              <img src={ imagen10 } alt=""></img>
              <div className="boton" onClick={img10}> Ver en grande </div>

              <img src={ imagen11 } alt=""></img>
              <div className="boton" onClick={img11}> Ver en grande </div>

              <img src={ imagen12 } alt=""></img>
              <div className="boton" onClick={img12}> Ver en grande </div>

            </ul>

          </section>

          <div className="sobre_mi"></div>
          <div className="section1"></div>
          <div className="proyectos"></div>
          <div className="certificados"></div>

          

      </MainCertificado>
    );
}

export default Certificados;