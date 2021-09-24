import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import MainHome from './components/MainHome';
import Trabajos from './components/trabajos';
import Certificados from './components/certificados';
import Footer from './components/Footer';

    
  class App extends React.Component {

    constructor(props) {
      super(props);
    
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

        


        pruebaa: 0
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
      console.log('pruebas')
    }

    render() {
      return (
      <Router>

        <Header prueba={this.state.prueba}/>

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
