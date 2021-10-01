import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { GlabalStyle } from './components/styles/styles';

import Header from './components/Header';
import MainHome from './components/MainHome';
import Trabajos from './components/trabajos';
import Certificados from './components/certificados';
import Footer from './components/Footer';
import Contacto from './components/contacto';
import Loader from './components/LoaderScreen';

    
  class App extends React.Component {

    componentDidMount() {
      setTimeout( () => {
        this.setState({
          etiqueta: 'etiqueta etiquetaActivo',
          hojas: 'hojas hojasActivo'
        });
      }, 100);

      setTimeout( () => {
        this.setState({
          etiqueta: 'etiqueta etiquetaActivo etiquetaColor',
          hojas: 'hojas hojasActivo hojasColor'
        });
      }, 3000);

      setTimeout( () => {
        this.setState({
          opacy: '0',
        });
      }, 6000);

      setTimeout( () => {
        this.setState({

          display: 'none'
        });
      }, 7000);
    }

    constructor(props) {
      super(props);


      window.addEventListener('scroll', function scrollParallax() {

      // console.log(URLactual === 'http://localhost:3000/' || URLactual === 'http://localhost:3000/inicio/')

  

      // console.log('URLactual: '+URLactual)

      const scrollTop = document.documentElement.scrollTop;
  
      const sobre_mi = document.querySelector('.sobre_mi');
      const section1 = document.querySelector('.section1');
      const proyectos = document.querySelector('.proyectos');
      const certificados = document.querySelector('.certificados');
      
      // parallax.style.transform = 'translateY('+ scrollTop * 0.1 + 'px)';
  
      // parallax.style.transform = 'translateY('+ scrollTop * 0.1 + 'px)';
  
      // scrollTop = -scrollTop;
  
      // sobre_mi.style.backgroundPosition = `center ${(-500+scrollTop) * 0.2}px`;
  
      section1.style.backgroundPosition = `center ${(scrollTop * 0.8)}px`;
      sobre_mi.style.backgroundPosition = `center ${(1000-scrollTop) * -0.6}px`;
      proyectos.style.backgroundPosition = `center ${(1500-scrollTop) * -0.4}px`;
      certificados.style.backgroundPosition = `center ${(2200-scrollTop) * -0.4}px`;
      
  
      
      // console.log(scrollTop)

      
      
      



      
    })

    var URLactual = window.location.href;
    
    

    // if(URLactual === 'http://localhost:3000/' || URLactual === 'http://localhost:3000/inicio/') {
    //    scrollParallax)
    //   console.log('App: '+URLactual)
    // }
    
    


    
      this.state = {
        scroll: 0,
        //SECCION ASERCA DE MI
        asercaTra: '50px',
        asercaOpa: '0%',
        //SECCION PROYECTOS
        proyectosTra: '50px',
        proyectosOpa: '0%',
        //SECCION CERTIFICADOS
        certificadosTra: '-50px',
        certificadosOpa: '0%',
        //SECCION HACER
        hacerOpa: '0%',


        prueba: 'siii',

        etiqueta: 'etiqueta',
        hojas: 'hojas',
        opacy: '100',
        display: 'flex'


        
      }

     


      

      





      window.addEventListener('scroll', (e) => {

        const scroll = window.scrollY;
        

      //   var elmnt = document.getElementById("myDIV");
      //   var x = elmnt.scrollLeft;
      //   var y = elmnt.scrollTop;

      //   let scroll11 = document.documentElement.scrollTop;

        // console.log(scroll);

      //   this.setState({
      //     pruebaa: scroll11
      //   })

        

        if(scroll >= 350){
          this.setState({
            asercaTra: '0px',
            asercaOpa: '100%',
          });
        }

        if(scroll >= 745){
          this.setState({
            proyectosTra: '0px',
            proyectosOpa: '100%',
          });
        }

        if(scroll >= 1671){
          this.setState({
            certificadosTra: '0px',
            certificadosOpa: '100%',
          });
        }



        if(scroll >= 1988){
          this.setState({
            hacerOpa: '100%',
          });
        }

      //   //
      //   // if(scroll >= 400){
      //   //   // console.log('aserca de mi Siii');
      //   //   this.setState({
      //   //     asercaTra: '0px',
      //   //     asercaOpa: '100%',
      //   //   });
      //   // }else if(scroll <= 600){

      //   //   // PARA QUE DESAPARESCA

      //   //   // console.log('aserca de mi nooooo');
      //   //   // this.setState({
      //   //   //   asercaTra: '50px',
      //   //   //   asercaOpa: '0%',
      //   //   // });
      //   // }

      //   // if(scroll >= 200 && scroll <= 1500 + 200) {

      //   //   const paralax = ((200-scroll)*100/1500)*(-1);

      //   //   console.log(`SCROLL :${paralax}%`);
      //   //   this.setState({
      //   //     asercascroll:  paralax
      //   //   })
      //   // }


        
        

      });
    }
    

    
   

    Prueba = () => {
      // console.log('pruebas')
    }

    render() {
      return (
      <Router>

      <GlabalStyle/>

        <Header prueba={this.state.prueba}/>

        <Loader 
          etiqueta={this.state.etiqueta}
          hojas={this.state.hojas}
          opacy={this.state.opacy}
          display={this.state.display}
        />

        <Switch>

        <Route exact path="/">
          
          <MainHome 
            asercaTra={this.state.asercaTra}
            asercaOpa={this.state.asercaOpa}

            proyectosTra={this.state.proyectosTra}
            proyectosOpa={this.state.proyectosOpa}

            certificadosTra={this.state.certificadosTra}
            certificadosOpa={this.state.certificadosOpa}
            
            hacerOpa={this.state.hacerOpa}


            pruebaa={this.state.pruebaa}
          />

        </Route>



        <Route exact path="/inicio/">
          
          <MainHome 
            asercaTra={this.state.asercaTra}
            asercaOpa={this.state.asercaOpa}

            proyectosTra={this.state.proyectosTra}
            proyectosOpa={this.state.proyectosOpa}

            certificadosTra={this.state.certificadosTra}
            certificadosOpa={this.state.certificadosOpa}
            
            hacerOpa={this.state.hacerOpa}


            pruebaa={this.state.pruebaa}
          />

        </Route>



          

          <Route exact path="/trabajos/">
            <Trabajos/>
          </Route>

          <Route exact path="/certificados/">
            <Certificados/>
          </Route>

          <Route exact path="/contacto/">
            <Contacto/>
          </Route>


          

        </Switch>
        
        



        <Footer/>

      </Router>
      )
    }
  }

  // return (
  //   <>
  //     <Header/>
  //     <Main/>
  //     <Footer/>
  //   </>
  // );


export default App;
