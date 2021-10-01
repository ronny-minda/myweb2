
import { MainCertificado } from './styles/styles';
import React, { useState } from 'react';

import entorno from '../img/imgCertificados/entorno.jpg'
import github from '../img/imgCertificados/github.jpg'
import grid from '../img/imgCertificados/grid.jpg'
import html from '../img/imgCertificados/html-css.jpg'
import mobile from '../img/imgCertificados/mobile.jpg'
import preprocesadores from '../img/imgCertificados/preprocesadores.jpg'



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


      console.log('siiiiiiii')
    }

    function img1() {

      setUso ({
        ...estado,
        fullImg: entorno,
      })
    
      cambio()
    }

    function img2() {

      setUso ({
        ...estado,
        fullImg: github,
      })
    
      cambio()
    }

    function img3() {

      setUso ({
        ...estado,
        fullImg: grid,
      })
    
      cambio()
    }

    function img4() {

        setUso ({
          ...estado,
          fullImg: html,
        })



    
      cambio()
    }

    function img5() {

      setUso ({
        ...estado,
        fullImg: mobile,
      })
    
      cambio()
    }

    function img6() {

      setUso ({
        ...estado,
        fullImg: preprocesadores,
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

              <img src={ entorno } alt=""></img>
              <div className="boton" onClick={img1}> Ver en grande </div>

              <img src={ github } alt=""></img>
              <div className="boton" onClick={img2}> Ver en grande </div>

              <img src={ grid } alt=""></img>
              <div className="boton" onClick={img3}> Ver en grande </div>

            </ul>

            <ul>

              <img src={ html } alt=""></img>
              <div className="boton" onClick={img4}> Ver en grande </div>

              <img src={ mobile } alt=""></img>
              <div className="boton" onClick={img5}> Ver en grande </div>

              <img src={ preprocesadores } alt=""></img>
              <div className="boton" onClick={img6}> Ver en grande </div>

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