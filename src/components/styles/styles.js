import styled, {
    createGlobalStyle,
} from "styled-components";

import img from '../../img/halo.jpg'
import flecha from '../../svg/flecha-hacia-abajo-para-navegar.svg'

import up from '../../img/imgUp.png'
import serca from '../../img/sobremi1.png'
import protecto from '../../img/proyectos.png'
import certi from '../../img/certi.png'

import fondoTra from '../../img/mapa.png'
import certifi from '../../img/cert.png'
import contac from '../../img/imgContacto/datos-de-contacto.png';

import aplicaciones from '../../svg/hacer/desarrollo-de-aplicaciones.svg'
import celular from '../../svg/hacer/programacion-celular.svg'
import responsive from '../../svg/hacer/responsive.svg'

import correo from '../../svg/correo-electronico-vacio.svg'
import llamada from '../../svg/llamada-telefonica.svg'
import github1 from '../../svg/github.svg'
import linkedin from '../../svg/linkedin.svg'
import twitter from '../../svg/gorjeo.svg'
import platzi from '../../svg/PLATZI.svg'



import html from '../../svg/tecno/html.svg'
import cs5 from '../../svg/tecno/css.svg'
import js from '../../svg/tecno/js.svg'
import sass from '../../svg/tecno/sass.svg'
import ubuntu from '../../svg/tecno/ubuntu.svg'
import git from '../../svg/tecno/git.svg'
import github from '../../svg/tecno/github.svg'
import halo from '../../svg/tecno/atomic.svg'

import x from '../../svg/boton-x.svg'



// TRABAJOS
import redi from '../../svg/trabajos/redirects.png'


let turquesa = '#10F5E0';
let titulo = '#DAE3FF';
let subtitulo = '#ADBEF3';


// let color_fondo1 = '#1D1D25';
// let color_fondo2 = '#30384A';
// let color_btn = '#52ba83';
// let color =
// let color =
// let color =
// let color =

export const GlabalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        /* font-family: 'Open Sans', sans-serif; */

        font-family: 'Orbitron', sans-serif;
        word-spacing: 1px;
        letter-spacing: 1px;
        
    

    }

    html {
        font-size: 62.5%;
        overflow-x: hidden;
    }


    ::selection {
        color: #0030ff;
        background: #00ffe8;
    }


    body::-webkit-scrollbar {
        width: 10px;
        background-color: #0C0C0F;

    }
    
    body::-webkit-scrollbar-thumb {
        background: #1E1E31;
        border-radius: 5px;
    }

    body::-webkit-scrollbar:hover {
        width: 10px;
        background-color: #14141A;
    }

    
    body::-webkit-scrollbar-thumb:hover {
        background: #26263E;
        border-radius: 5px;
    }




    body {
        /* background-color: #131a2c; */
        background-color: #1D1D25;
        overflow-x: hidden;
    }
    /* @media (max-width: 750px) {
        body {
            header {
                background-color: red;
                flex-direction: row-reverse;
            }
        }
    }
    @media (min-width: 750px) {
        body {
            header {
                background-color: blue;
                flex-direction: row;
            }
        }
    } */
`;

export const HEader = styled.header`
    /* background-color: blue; */
    display: flex;
    justify-content: space-between;
    position: fixed;
    height: 65px;
    width: 100vw;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.75);
    z-index: 99999;
    /* filter: opacity(.5); */


    .CV {
        height: 50px;
        width: 55px;
        background-color: #FF5B5B;
        transition: 0.7s background-color;
        position: absolute;
        left: calc(15% - 25px);
        bottom: -50px;
        text-decoration: none;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        font-weight: bold;
        border-radius: 0 0 3px 3px;
        z-index: 9;
    }
    .CV:hover {
        background-color: #A6B1D5;
    }
    

    .a {
        
        text-decoration: none;
        color: #000000;
        svg {
            height: 80px;
            width: 180px;
            .sombra {
                fill: #000000;
            }
            .cara {
                fill: #C93939;
                transition: 1s;
            }
            /* .cara:hover {
                fill: #fff;
            } */
        }
        svg:hover {
            .cara {
                
                fill: #DAE3FF;
                /* transition: 1s; */
            }
            /* .cara:hover {
                fill: #fff;
            } */
        }
        
        
        h1 {
            font-size: 2.5rem;
            font-weight: bold;
            color: #BFC4DC;
            transition: .3s color;
        }
        h1:hover {
            color: #C16161;
        }
    }
    nav {
        height: 100%;
        /* background-color: red; */
        font-size: 30px;
        display: flex;
        align-items: center;




        /* transform: skew(33deg, 0deg); */
        li {
            /* margin: 0 50px; */
            display: inline-block;
            /* background-color: red; */
            
            list-style: none;
            margin: 0 5px;
            /* background-color: red; */
            height: 100%;
            width: 150px;
            display: flex;
            justify-content: center;
            align-items: center;
            /* transform: skew(30deg, 0deg); */
            a {
                color: #BFC4DC;
                /* display: inline-block; */
                transform: skew(30deg, 0deg);
                text-decoration: none;
                background-color: #0F131B;
                transition: 1s;
                box-shadow: -1px 0px 23px -1px #131823;
                
                height: 100%;
                width: 100%;
                display: flex;    
                justify-content: center;
                align-items: center;
                span {
                    font-size: 1.6rem;
                    font-family: 'Orbitron', sans-serif;
                    display: inline-block;
                    transform: skew(-30deg, 0deg);
                    margin: auto;
                }
            }
            
            a:hover {
                background-color: #3C475F;
            }
            .aActivo {
                background-color: #3C475F;
                transition: 0s;
            }
        }

    }



    @media (max-width: 750px) {

        background-image: linear-gradient(to left, #1d1d25ee, #22232eee, #272a37ee, #2c3140ee, #30384aee);
        
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;
        /* filter: blur(.5px); */

        /* .CV {
            right: calc(25% - 25px);
        } */

        .nav_blur {
            display: ${(props) => props.menu.display};
            position: fixed;
            z-index: 99;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100vw;
            background-color: #fff2;
            /* background-color: blue; */
            backdrop-filter: blur(${(props) => props.menu.blur});
            /* backdrop-filter: blur(2px); */
            /* transition: 1s backdrop-filter; */
        }
        nav {
            
            clip-path: circle(${(props) => props.menu.menu} at 0% 0);
            /* clip-path: circle(60% at 0% 0); */
            position: fixed;
            z-index: 999;
            top: 0;
            left: 0;
            /* background-color: #30384aee; */
            background-image: linear-gradient(to left, #1d1d25, #22232e, #272a37, #2c3140, #30384a);
            height: 100vh;
            width: 100vw;
            transition: 1s clip-path;
            /* display: none; */
            li {
                position: absolute;
                height: 40px;

                display: inline-block;
                list-style: none;
                transition: 1s;
                transition-delay: .5s;
                a {
                    /* color: #000000; */
                    text-decoration: none;
                    span {

                    }
                }
            }
            .Inicio {
                left: ${(props) => props.menu.inicioL};
                top: ${(props) => props.menu.inicioT};
            }
            .Trabajos {
                left: ${(props) => props.menu.trabajoL};
                top: ${(props) => props.menu.trabajoT};
            }
            .Certificado {
                left: ${(props) => props.menu.certificadoL};
                top: ${(props) => props.menu.certificadoT};
            }
            .Contacto {
                left: ${(props) => props.menu.contactoL};
                top: ${(props) => props.menu.contactoT};
            }
        }
        
        .btn_conte {
            background-color: #384053;
            box-shadow: -1px 0px 23px -1px #131823;
            height: 60px;
            width: 60px;
            position: absolute;
            z-index: 9995;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;

            .btn {
                width: auto;
                display: inline-block;
                cursor: pointer;

                .bar1, .bar2, .bar3 {
                    width: 25px;
                    height: 3px;
                    background-color: #051630;
                    margin: 5px 0;
                    border-radius: 10px;
                }
            }
        }
        

        
    }
    @media (min-width: 750px) {
        background-image: linear-gradient(to left, #1d1d25ee, #22232eee, #272a37ee, #2c3140ee, #30384aee);
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        nav {
            /* background-color: red; */
            li {

                a {

                }
            }
        }
    }

    
    
    
    /* @media (max-width: 750px) {
        nav {
            background-color: red;
        }
    }
     */
`;

export const MainHome = styled.main`
    height: auto;
    width: 100;

    .section1 {
        

        background-image: url(${up});
        background-repeat: no-repeat;
        background-size: cover;
        /* background-position: center ${(props) => props.pruebaa}%;//control de scroll paralax */
        /* transition: 0.05s background-position; */
        height: 100vh;
        
        .capa1 {
            box-shadow: 0px 3px 15px 10px #0008;
            position: relative;
            z-index: 20;
            background-color: #1D1D25ee;
            .capa2 {

                section {

                    h1 {
                        font-size: 4.5rem;
                        color: ${titulo};
                    }
                    p {
                        font-size: 1.7rem;
                        color: ${subtitulo};
                    }
                }
                .conte_img {
                    /* background-color: #000132; */
                    border-radius: 50%;
                    img {
                        opacity: 85%;
                        
                    }
                }
            }
            .flecha_abajo {
                /* cursor: pointer; */
                height: 35px;
                width: 60px;
                /* background-color: blue; */
                position: absolute;
                bottom: 0;

                background-image: url(${flecha});
                background-repeat: no-repeat;
                background-size: contain;




                animation-name: example;
                animation-duration: 4s;
                animation-iteration-count: infinite;
            }

            @keyframes example {
                0%   {transform: translate(0px, 0px);}

                50%  {transform: translate(0px, -19px);}

                100% {transform: translate(0px, 0px);}
            }
        }
    }

    .sobre_mi {
        

        background-color: #fadcd4;

        background-image: url(${serca});
        background-repeat: no-repeat;
        background-size: cover;
        /* background-position: center ${(props) => props.pruebaa}%;//control de scroll paralax */
        /* transition: 0.05s background-position; */
        
        .capa1 {
            box-shadow: 0px 10px 20px 0px #000;
            height: auto;
            filter: opacity(${(props) => props.asercaOpa});
            transform: translate(0px, ${(props) => props.asercaTra});
            transition: 2s;
            background-color: #1D1D25ee;
            border-top: 8px solid #00c9b7;
            
            /* border-top: 12px solid #791c1c; */
            .capa2 {
                padding: 15px 4px;
                display: flex;
                justify-content: space-around;
                color: #fff;
                section {
                    width: 28%;
                    h2 {
                        margin: 0 0 10px 0;
                        color: ${titulo};
                    }
                    p {
                        color: ${subtitulo};
                    }
                }
            }
            
            h3 {
                font-size: 1.5rem;
                color: ${titulo};
                text-align: center;
                padding: 15px 0;
            }
            .icos_tec {
                height: auto;
                width: 100%;
                /* background-color: #4349; */
                display: flex;
                flex-wrap: wrap;
                justify-content: center;

                padding-bottom: 40px;
                
                color: ${subtitulo};

                .conte {
                    display: flex;
                    padding: 15px 0 35px 0;
                    
                    div {
                        height: 80px;
                        width: 80px;
                        background-repeat: no-repeat;
                        /* background-color: red; */

                        border-top: 1px solid #fff;
                        border-left: 1px solid #fff;
                        border-bottom: 1px solid #fff;
                    }
                    p {
                        height: 50px;
                        width: 90px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 1.5rem;

                        border-top: 1px solid #fff;
                        border-right: 1px solid #fff;
                        border-bottom: 1px solid #fff;
                    }
                    .html {
                        background-image: url(${html});
                    }
                    .css {
                        background-image: url(${cs5});
                    }
                    .javascript {
                        background-image: url(${js});
                    }
                    .javascript1 {
                        width: 120px;
                    }
                    .react {
                        background-image: url(${halo});
                    }
                    .sass {
                        background-image: url(${sass});
                    }
                    .ubuntu {
                        background-image: url(${ubuntu});
                    }
                    .git {
                        background-image: url(${github});
                    }
                    .github {
                        background-image: url(${git});
                    }
                }

                

            }

            .flecha_abajo {
                cursor: pointer;
                
                height: 35px;
                width: 60px;
                /* background-color: blue; */
                position: absolute;
                bottom: 0;
                left: calc(50% - 30px);

                background-image: url(${flecha});
                background-repeat: no-repeat;
                background-size: contain;




                animation-name: example;
                animation-duration: 4s;
                animation-iteration-count: infinite;
            }

            @keyframes example {
                0%   {transform: translate(0px, 0px);}

                50%  {transform: translate(0px, -19px);}

                100% {transform: translate(0px, 0px);}
            }

        }
    }

    .proyectos {
        background-image: url(${protecto});
        background-repeat: no-repeat;
        background-size: cover;
        /* background-position: center -0px;//control de scroll paralax */
        /* transition: 1s background-position; */
        background-color: #262f62;
        
        

        .contenedor {
            box-shadow: 0px 10px 20px 0px #000;
            /* background-color: #161e35cc; */
            border-left: 8px solid #00c9b7;
            border-top: 0;
            border-right: 0;
            border-bottom: 0;
            background-color: #1D1D25bb;
            
            /* border-top: 8px solid #00c9b7; */

            filter: opacity(${(props) => props.proyectosOpa});
            transform: translate(${(props) => props.proyectosTra}, 0px);
            transition: 2s filter, 2s transform;
            
 
            
            /* color: #fff; */
            h2 {
                font-size: 2.6rem;
                padding: 12% 10% 1.5% 10%;
                color: ${titulo};
            }
            .p_u {
                padding: 1.5% 13% 13% 10%;
                font-size: 1.6rem;
                font-weight: 100;
                /* width: 80%; */
                color: ${subtitulo};
            }
            a {
                margin: 1.5% 13% 13% 10%;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                height: 50px;
                width: 160px;
                font-weight: 100;
                font-size: 1.6rem;
                /* color: #fff; */
                text-decoration: none;
                /* background-color: red; */
                border: 1px solid ${subtitulo};
                border-radius: 5px;
                transition: 1s border, 1s color;
                color: ${subtitulo};
            }
            a:hover {
                border: 1px solid ${turquesa};
                color: ${turquesa};
            }
        }
    }

    .certificados {
        background-image: url(${certi});
        background-repeat: no-repeat;
        background-size: cover;
        /* background-position: center -0px;//control de scroll paralax */
        /* transition: 1s background-position; */
        background-color: #c5b8a4;
        box-shadow: 0px 10px 20px 0px #0007;
        margin: 0 0 50px 0;

        .contenedor {
            /* box-shadow: 0px 10px 20px 0px #000; */
            /* background-color: #161e35ee; */
            border-right: 8px solid #00c9b7;
            background-color: #1D1D25ee;
            /* border-top: 8px solid #00c9b7; */
            border-top: 0;
            border-left: 0;
            border-bottom: 0;

            filter: opacity(${(props) => props.certificadosOpa});
            transform: translate(${(props) => props.certificadosTra}, 0px);
            transition: 2s filter, 2s transform;
            
 
            
            /* color: #fff; */
            h2 {
                font-size: 2.6rem;
                padding: 12% 10% 1.5% 10%;
                color: ${titulo};
            }
            .p_u {
                padding: 1.5% 13% 13% 10%;
                font-size: 1.6rem;
                font-weight: 100;
                /* width: 80%; */
                color: ${subtitulo};
            }
            a {
                margin: 1.5% 13% 13% 10%;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                height: 50px;
                width: 180px;
                font-weight: 100;
                font-size: 1.6rem;
                color: ${subtitulo};
                text-decoration: none;
                /* background-color: red; */
                border: 1px solid ${subtitulo};
                border-radius: 5px;
                transition: 1s border, 1s color;
            }
            a:hover {
                border: 1px solid ${turquesa};
                color: ${turquesa};
            }
        }
    }

    .objetivo {
        
        filter: opacity(${(props) => props.hacerOpa});
        transition: 2s filter;
        /* background-color: #131a2c; */
        background-color: #1D1D25;
        padding-top: 30px;
        padding-bottom: 30px;
        display: flex;
        .contenedor {

            color: #fff;
            width: 33vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            .ico1, .ico2, .ico3 {
                
                height: 150px;
                width: 150px;
                
                border-radius: 50%;
                background-color: #21283B;
                box-shadow: 0px 0px 20px 5px #141414;

            }
            /* .ico1:hover, .ico2:hover, .ico3:hover {
                box-shadow: 0px 0px 20px 5px #232e4c;
                transition: 1s box-shadow;
            } */
            .ico1 {
                /* background-color: #fff; */
                display: flex;
                justify-content: center;
                align-items: center;
                .ico {
                    background-image: url(${responsive});
                    background-repeat: no-repeat;
                    background-size: cover;
                    height: 70px;
                    width: 70px;
                    /* background-color: red; */
                }
            }
            .ico2 {
                
                /* background-color: #fff; */
                display: flex;
                justify-content: center;
                align-items: center;
                .ico {
                    background-image: url(${celular});
                    background-repeat: no-repeat;
                    background-size: cover;
                    height: 70px;
                    width: 70px;
                    /* background-color: red; */
                }
            }
            .ico3 {
                
                
                display: flex;
                justify-content: center;
                align-items: center;
                .ico {
                    background-image: url(${aplicaciones});
                    background-repeat: no-repeat;
                    background-size: cover;
                    height: 70px;
                    width: 70px;
                    /* background-color: red; */
                }
            }
            h3 {
                margin: 8px 0;
                font-size: 2.2rem;
                text-align: center;
                color: ${titulo};
            }
            p {
                font-size: 1.2rem;
                text-align: center;
                color: ${subtitulo};
            }
        }
    }

    /* background-color: red; */
    /* background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center -0px;//control de scroll paralax
    transition: 1s background-position; */

    @media (min-width: 750px) {
        .section1 {

            /* filter: opacity(); */


            display: flex;
            align-items: center;
            justify-content: center;
            
            .capa1 {
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                
                .capa2 {
                   
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 400px;
                    width: 800px;
                    section {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        color: #fff;
                        margin-right: 15px;

                        h1 {

                        }
                        p {

                        }
                    }
                    .conte_img {
                        /* background-color: #081830;
                        border-radius: 50%; */
                        img {
                            /* opacity: 70%; */
                            height: 400px;
                            width: 400px;
                            object-fit: cover;
                            border-radius: 50%;
                        }
                    }
                    
                }
            }
        }


        .sobre_mi {
            
            height: 100vh;
            display: flex;
            align-items: flex-end;

            .capa1 {
                
                width: 100%;
                
                
                .capa2 {
                    /* background-color: blue; */
                    
                    display: flex;
                    section {
                        
                        h2 {
                            font-size: 2.8rem;
                        }
                        p {
                            font-size: 1.5rem;
                        }
                    }
                }

                .icos_tec {

                }

            }
        }

        .proyectos {
            height: 100vh;

            display: flex;
            justify-content: flex-end;
            .contenedor {
                
                width: 40%;
                height: 100%;
                h2 {

                }
                .p_u {

                }
                .p_a {

                }
            }
        }

        .certificados {
            height: 90vh;

            display: flex;
            justify-content: flex-start;
            .contenedor {
                
                
                width: 40%;
                height: 100%;
                h2 {

                }
                .p_u {

                }
                .p_a {

                }
            }
        }

        .objetivo {

        }
    }

    @media (max-width: 750px) {
        .section1 {

            /* filter: opacity(); */


            display: flex;
            align-items: center;
            justify-content: center;
            
            .capa1 {
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                .capa2 {
                    
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                    height: 350px;
                    width: 450px;
                    

                    section {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        color: #fff;
                        h1 {

                        }
                        p {
                            /* font-size: 2rem;b */
                            margin-bottom: 10px;
                        }
                       
                    }
                    img {
                        height: 300px;
                        width: 300px;
                        object-fit: cover;
                        border-radius: 50%;
                    }
                }
            }
        }


        .sobre_mi {
            
            height: 150vh;
            display: flex;
            align-items: flex-end;

            

            .capa1 {
                
                width: 100%;
               
                
                .capa2 {
                    /* background-color: blue; */
                    
                    display: flex;

                    flex-direction: column;
                    section {
                        width: 100%;
                        h2 {
                            text-align: center;
                            font-size: 3rem;
                        }
                        p {
                            text-align: center;
                            font-size: 1.5rem;
                        }
                    }
                }

                .icos_tec {

                }

            }
        }

        .proyectos {
            height: 100vh;
            
            display: flex;
            align-items: flex-end;
            .contenedor {
                border-top: 8px solid #8ac6a0;
                border-left: 0;
                border-bottom: 0;
                border-right: 0;
                background-color: #161e35cc;
                width: 100%;
                height: auto;
                h2 {

                }
                .p_u {
                    margin-bottom: 0px;
                }
                a {
                    margin-top: 1px;
                }
            }
        }

        .certificados {
            height: 100vh;
            
            display: flex;
            align-items: flex-end;
            .contenedor {
                border-top: 8px solid #8ac6a0;
                border-left: 0;
                border-bottom: 0;
                border-right: 0;
                background-color: #161e35ee;
                width: 100%;
                height: auto;
                h2 {

                }
                .p_u {
                    margin-bottom: 0px;
                }
                a {
                    margin-top: 1px;
                }
            }
        }

        .objetivo {
            
            padding-top: 30px;
            display: flex;
            flex-direction: column;
            .contenedor {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                .ico {
                    
                    height: 150px;
                    width: 150px;
                    /* background-color: #000; */
                    /* border-radius: 50%; */
                }
                h3 {

                }
                p {

                }
            }
            
        }
    }

    @media (max-width: 400px) {
        .section1 {

            /* filter: opacity(); */


            display: flex;
            align-items: center;
            justify-content: center;
            
            .capa1 {
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                /* background-color: #FF000099; */
                .capa2 {
                    /* background-color: red; */
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                    height: 300px;
                    width: 300px;
                    section {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        color: #fff;
                        h1 {
                            font-size: 25px;
                        }
                        p {
                            font-size: 12px;
                        }
                    }
                    img {
                        height: 200px;
                        width: 200px;
                        object-fit: cover;
                        border-radius: 50%;
                    }
                }
            }
        }



        .sobre_mi {
            
            height: 155vh;
            display: flex;
            align-items: flex-end;


            .capa1 {
                
                width: 100%;

                
                .capa2 {
                    /* background-color: blue; */
                    
                    display: flex;

                    flex-direction: column;
                    section {
                        width: 100%;
                        h2 {
                            text-align: center;
                            /* font-size: 3rem; */
                        }
                        p {
                            text-align: center;
                            /* font-size: 1.3rem; */
                        }
                    }
                }

                .icos_tec {


                }

            }
        }

        .proyectos {
            height: 100vh;

            display: flex;
            align-items: flex-end;
            .contenedor {
                background-color: #161e35cc;
                width: 100%;
                height: 50%;
                h2 {

                }
                .p_u {

                }
                .p_a {

                }
            }
        }

        .certificados {
            height: 100vh;

            display: flex;
            align-items: flex-end;
            .contenedor {
                background-color: #161e35ee;
                width: 100%;
                height: 50%;
                h2 {

                }
                .p_u {

                }
                .p_a {

                }
            }
        }
    }



    
`;

export const Footer = styled.footer`



    filter: opacity(100%);
    transform: translate(-0px, 0px);
    transition: 1s;
    
    /* .conta {

    } */

    .hacer {
        
        
        height: 100px;
        /* background-color: #1d2949; */
        /* background-color: #293148; */
        /* background-image: linear-gradient(to right, #28314a, #262f46, #242c42, #232a3f, #21283b); */
        background-image: linear-gradient(to left, #121218, #1a1b24, #222430, #292e3d, #30384a);
        box-shadow: 0px 0px 22px 5px rgba(0,0,0,0.75);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        li {
            list-style: none;
            h3 {
            color: ${turquesa};
            font-size: 2.5rem;
            }
        }

    }

    .ico {
        height: 100px;
        /* background-color: #131a2c; */
        background-color: #1D1D25;
        /* background-color: #21283B; */
        display: flex;
        justify-content: center;
        align-items: center;
        
        li {
            list-style: none;
            a {
                display: inline-flex;
                justify-content: center;
                align-items: center;

                height: 60px;
                width: 60px;
                /* background-color: #1d2949; */
                background-image: linear-gradient(to right, #28314a, #262f46, #242c42, #232a3f, #21283b);
                /* box-shadow: 0px 0px 6px 6px #14161C; */
                box-shadow: 0px 0px 15px 3px rgba(0,0,0,0.75);
                transition: 1s box-shadow;
                border-radius: 50%;
                margin: 10px;


                
                .email {
                    height: 40px;
                    width: 40px;
                    /* background-color: red; */
                    background-image: url(${correo});
                    background-repeat: no-repeat;
                    background-size: cover;
                }
                .tel {
                    height: 40px;
                    width: 40px;
                    /* background-color: red; */
                    background-image: url(${llamada});
                    background-repeat: no-repeat;
                    background-size: cover;
                }
                .github {
                    height: 40px;
                    width: 40px;
                    /* background-color: red; */
                    background-image: url(${github1});
                    background-repeat: no-repeat;
                    background-size: cover;
                }
                .link {
                    height: 40px;
                    width: 40px;
                    /* background-color: red; */
                    background-image: url(${linkedin});
                    background-repeat: no-repeat;
                    background-size: cover;
                }
                .twi {
                    height: 40px;
                    width: 40px;
                    /* background-color: red; */
                    background-image: url(${twitter});
                    background-repeat: no-repeat;
                    background-size: cover;
                }
                .platzi {
                    height: 40px;
                    width: 40px;
                    /* background-color: red; */
                    background-image: url(${platzi});
                    background-repeat: no-repeat;
                    background-size: cover;
                }

            }
            a:hover {
                box-shadow: 0px 0px 6px 6px #252934;
                transition: 1s box-shadow;
            }
        }

        

    }

    .copi {
        /* background-color: #1d2949; */
        /* background-image: linear-gradient(to right, #28314a, #262f46, #242c42, #232a3f, #21283b); */
        background-image: linear-gradient(to left, #121218, #1a1b24, #222430, #292e3d, #30384a);
        box-shadow: 0px 0px 22px 5px rgba(0,0,0,0.75);
        height: 130px;
        display: flex;
        justify-content: center;
        text-align: center;
        li {
            margin-top: 22px;
            list-style: none;
            color: ${titulo};
            font-size: 14px;
        }
    }

    @media (max-width: 750px) {
        .hacer {
            height: 100px;
            /* background-color: red; */
            display: flex;
            justify-content: center;
            align-items: center;
            li {
                list-style: none;
                h3 {
                color: #fff;
                font-size: 20px;
                }
            }

        }

        


        .ico {
            padding: 20px 0;
            height: auto;
            /* background-color: blue; */
            display: flex;
            flex-wrap: wrap;

            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            
            
            li {
                list-style: none;
                a {
                    display: inline-flex;
                    height: 60px;
                    width: 60px;
                    /* background-color: blueviolet; */
                    border-radius: 50%;
                }
            }
        }


        .copi {
            /* background-color: red; */
            height: 130px;
            display: flex;
            justify-content: center;
            li {
                margin-top: 22px;
                list-style: none;
                /* color: #fff; */
                font-size: 12px;
            }
        }
    }
    

`;

export const MainTabajo = styled.main`
    /* margin-top: 120px; */
    padding-top: 60px;

    .titulo {
        height: 200px;
        width: 100%;
        background-color: #000;
        background-image: url(${fondoTra});
        background-repeat: no-repeat;
        background-size: contain;
        background-attachment: fixed;
        /* color: #fff; */
        display: flex;
        flex-direction: column;
        justify-content: center;

        h2 {
            text-align: center;
            font-size: 3.5rem;
            margin: 0 0 30px 0;
            color: ${titulo};
        }
        p {
            text-align: center;
            font-size: 2rem;
            color: ${subtitulo};
            /* padding-top: 20px; */
        }
    }

    ul {
        box-shadow: 0px 0px 15px 6px rgba(0,0,0,0.50);
        margin: 30px 0;
        position: relative;
        width: 100%;
        height: 500px;
        img {
            object-fit: cover;
            height: 500px;
            width: 100%;
        }
        section {
            /* background-color: blue; */
            /* background: linear-gradient(90deg, #fff0 0%, #060B1A 40%); */
            /* background: linear-gradient(90deg, #060B1A00 0%, #060B1A44 10%, #060B1Abb 35%, #060B1Adf 50%, #060B1Aff 100%); */
            position: absolute;
            
            
            height: 100%;
            width: 50%;
            /* color: #fff; */

            display: flex;
            flex-direction: column;
            
            

            

            .contenedor_disponible {

                margin: 20px;

                display: inline-flex;
                flex-direction: column;
                /* justify-content: flex-end; */

                h2 {
                    font-size: 3rem;
                    text-align: end;
                    color: ${titulo};
                    margin-bottom: 10px;
                }
                p {
                    font-size: 1.8rem;
                    /* width: 75%; */
                    text-align: end;
                    color: ${subtitulo};
                    margin-bottom: 10px;
                }

                .conte {
                    justify-content: center;
                    display: flex;
                    a {
                        margin:10px;
                        color: #fff;
                        text-decoration: none;
                        display: flex;
                        align-items: center;
                        height: auto;

                        animation: link 5s linear 2s infinite;
                        border-radius: 5px;
                        padding: 2px;
                        background-color: #0d1322;
                        border: 5px solid #0d1322;
                        /* background-color: blue; */

                        @keyframes link {
                            0%   {
                                background-color: #0d1322;
                                border: 5px solid #0d1322;
                            }
                            50%  {
                                background-color: #162754;
                                border: 5px solid #162754;
                            }
                            100% {
                                background-color: #0d1322;
                                border: 5px solid #0d1322;
                            }
                        }
                        span {
                            font-size: 1.8rem;
                            display: inline-block;
                            height: 20px;
                            /* background-color: red; */
                        }
                        .ico {
                            height: 30px;
                            width: 30px;
                            background-image: url(${redi});
                            /* background-image: url(${llamada}); */
                            background-repeat: no-repeat;
                            background-size: cover;
                        }
                    }
                }                
            }

            .contenedor_tecnologias {
                h2 {
                    padding: 15px 0 5px 0;
                    text-align: center;
                    font-size: 2rem;
                    color: ${ titulo };
                }
                li {
                    
                    

                    width: 300px;

                    list-style: none;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    
                    .ico {
                        height: 50px;
                        width: 50px;
                        
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                    span {
                        font-size: 1.8rem;
                    }
                }
            }
            
        }
    }







    .derecha {

        img {

        }
        section {
            background: linear-gradient(90deg, #00000000 0%, #00000044 10%, #000000bb 35%, #000000df 50%, #000000ff 100%);/*#06ff*/

            bottom: 0;
            right: 0;

            justify-content: center;
            align-items: flex-end;
            .contenedor_disponible {
                align-items: flex-end;
                h2 {

                }
                p {
                    text-align: end;
                    width: 80%;
                }

                .conte {

                    a {

                        span {

                        }
                        .ico {

                        }
                    }
                }                
            }

            .contenedor_tecnologias {
                h2 {

                }
                li {

                    .ico {

                    }
                    span {

                    }
                }
            }
            
        }
    }



    .izquierda {

        img {

        }
        section {
            background: linear-gradient(-90deg, #00000000 0%, #00000044 10%, #000000bb 35%, #000000df 50%, #000000ff 100%);

            bottom: 0;
            left: 0;

            justify-content: center;
            align-items: flex-start;

            .contenedor_disponible {
                align-items: flex-start;
                h2 {

                }
                p {
                    text-align: start;
                    width: 80%;
                }

                .conte {

                    a {

                        span {

                        }
                        .ico {

                        }
                    }
                }                
            }

            .contenedor_tecnologias {
                h2 {

                }
                li {

                    /* border-top: 2px solid #000;
                    border-left: 2px solid #000;
                    border-bottom: 2px solid #000;
                    border-right: 0px solid #000; */

                    flex-direction: row-reverse;
                    .ico {

                    }
                    span {

                    }
                }
            }
            
        }
    }

    




















    @media (max-width: 750px) {
        padding-top: 60px;
        h1 {
            background-color: red;
        }
        ul {
            position: relative;
            width: 100%;
            height: 500px;
            img {
                object-fit: cover;
                height: 500px;
                width: 100%;
            }
            section {
                /* background-color: blue; */
                /* background: linear-gradient(90deg, #fff0 0%, #060B1A 40%); */
                background: linear-gradient(180deg, #060B1A00 0%, #060B1A44 10%, #060B1Abb 35%, #060B1Adf 50%, #060B1Aff 100%) !important;
                position: absolute;
                bottom: 0;
                right: 0;
                
                height: 50%;
                width: 100%;
                color: #fff;

                display: flex;
                flex-direction: row;
                align-items: flex-end !important;
                justify-content: flex-end;

                

                .contenedor_disponible {

                    display: inline-flex;
                    align-items: center !important;
                    justify-content: end !important;
                    flex-direction: column !important;

                    h2 {
                        font-size: 3rem;
                        text-align: center;
                        margin-bottom: 10px;
                    }
                    p {
                        font-size: 1.8rem;
                        width: 100%;
                        text-align: center !important;
                        margin-bottom: 20px;
                    }

                    .conte {
                        display: flex;
                        justify-content: center;
                        a {
                            margin: 0 10px;
                            color: #fff;
                            text-decoration: none;
                            display: flex;
                            align-items: center;
                            height: auto;
                            /* background-color: blue; */
                            span {
                                font-size: 1.8rem;
                                display: inline-block;
                                height: 20px;
                                /* background-color: red; */
                            }
                            .ico {
                                height: 30px;
                                width: 30px;
                                background-image: url(${redi});
                                /* background-image: url(${llamada}); */
                                background-repeat: no-repeat;
                                background-size: cover;
                            }
                        }

                    }

                    
                    
                }

                .contenedor_tecnologias {
                    display: none;
                    h2 {
                        text-align: center;
                        font-size: 2rem;
                    }
                    li {
                        
                        /* border-top: 2px solid #000;
                        border-left: 0px solid #000;
                        border-bottom: 2px solid #000;
                        border-right: 2px solid #000; */

                        width: 50vw;

                        list-style: none;
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                        .ico {
                            height: 50px;
                            width: 50px;
                            
                            background-repeat: no-repeat;
                            background-size: cover;
                        }
                        span {
                            font-size: 1.8rem;
                        }
                    }
                }
                
            }
        }

    }
`;

export const MainCertificado = styled.main`
    padding-top: 60px;

    .img1 {
        transition: 0.5s;
        /* opacity: 100%; */
        position: fixed;
        z-index: 999999999;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        /* background-color: red; */
        backdrop-filter: blur(2px);
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 75vw;
            cursor: zoom-out;
        }
        .x {
            background-image: url(${ x });
            background-repeat: no-repeat;
            background-size: cover;
            
            height: 50px;
            width: 50px;
            /* background-color: red; */
            position: absolute;
            top: 0;
            right: 20px;
        }
    }

    .opaNo {
        opacity: 0%;
    }

    .opaSi {
        opacity: 100%;
    }


    .imgNo {
        display: none;
    }

    .imgSi {
        /* display: inline-block; */
        display: -ms-flexbox;
    }

    .titulo {
        height: 200px;
        width: 100%;
        background-color: #000;
        background-image: url(${certifi});
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        /* color: #fff; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* filter: opacity(50%); */
        
        h2 {

            color: ${titulo};
            text-align: center;
            font-size: 3.5rem;
            margin: 0 0 30px 0;
        }
        p {
            text-align: center;
            font-size: 2rem;
            color: ${subtitulo};
        }


    }

    section {
        

        display: flex;
        flex-direction: row;
        justify-content: center;

        padding-bottom: 25px;
        
        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            
            img {
                height: auto;
                width: 40vw;
                margin: 30px 30px 0 30px;
                box-shadow: 10px 10px 3px 0px rgba(0,0,0,0.75);
                
            }
            .boton {
                margin-top: 10px;
                /* height: 50px; */
                /* width: 50px; */
                /* background-color: red; */
                cursor: pointer;
                font-size: 2rem;
                border-radius: 2.5px;
                border: 1px solid ${titulo};
                color: ${titulo};
                padding: 10px;
                transition: 1s border, 1s color;
            }
            .boton:hover {
                border: 1px solid ${turquesa};
                color: ${turquesa};
            }
        }
    }

    @media (max-width: 750px) {
        section {
            flex-direction: column;
            ul {

            
                img {
                    width: 80vw;
                }
            }    

        }
    }
    


`;

export const MainFormulario = styled.main`
    padding-top: 60px;
    /* background-color: red; */
    h2 {
        /* background-color: blue; */
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3.5rem;
        
        background-image: url(${contac});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top;
        background-attachment: fixed;
        color: #000;
    }
    .contenedor:hover {
        border-top: 3px double #C198FF;
    }
    .contenedor {
        margin: 50px 0;
        padding: 10px 0;
        height: auto;
        display: flex;
        border-top: 3px double #8C47F5;
        transition: 1s border-top;
        /* width: 130px; */

        .contacto:hover {
            border-right: 3px double #C198FF;
        }
        .contacto {
            padding: 0 0 0 20px;
            transition: 1s border-right;
            border-right: 3px double #8C47F5;
            width: 20vw;
            display: flex;
            /* align-items: center; */
            justify-content: center;
            flex-direction: column;
            /* background-color: blue; */
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            /* color: ${titulo}; */
            a:hover {
                color: #10F5E0;
            }
            a {
                /* background-color: red; */
                display: flex;
                /* flex-direction: column; */
                align-items: center;
                color: ${titulo};
                text-decoration: none;
                width: 320px;
                margin: 15px 0;
                transition: 1s;

                .ico {
                    height: 50px;
                    width: 50px;
                    /* background-color: blue; */
                }
                span {
                    width: auto;
                    display: inline;
                    font-size: 1.5rem;
                    
                }
                /* @media (max-width: 950px) {
                    span {
                        display: none;
                    }
                } */
                
                .num {
                    background-image: url(${llamada});
                    background-repeat: no-repeat;
                    background-size: cover;
                }
                .email {
                    background-image: url(${correo});
                    background-repeat: no-repeat;
                    background-size: cover;
                }
                .git {
                    background-image: url(${github1});
                    background-repeat: no-repeat;
                    background-size: cover;
                }
            }
            
        }
        @media (max-width: 950px) {
            .contacto {
                /* display: none; */
                align-items: center;
                a {
                    margin: 15px 0;
                    width: auto;
                    span {
                        display: none;
                    }
                }    
            }
        }

        @media (max-width: 750px) {
            .contacto {
                display: none;
                align-items: center;
                a {
                    
                    width: auto;
                    span {
                        display: none;
                    }
                }    
            }
        }
         
        
        form {
            
            
            width: 100vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            label {
                margin-top: 15px;
                display: flex;
                /* background-color: blue; */
                flex-direction: column;
                width: 80%;
                span {
                    font-size: 2rem;
                    width: 100%;
                    color: ${titulo};
                    margin-bottom: 5px;

                }
                input {
                    color: #fff;
                    height: 40px;
                    width: 100%;
                    padding: 0 0 0 10px;
                    background-color: #fff0;
                    outline: none;
                    border: none;
                    border-bottom: 5px solid #0F67A7;
                    box-shadow: 2px 2px 5px 2px #000;
                    /* box-shadow: inset 2px 2px 6px 1px #000, inset -2px -2px 6px 1px #fff;
                    /* box-shadow:  */
                    transition: 1s border-bottom;
                    border-radius: 1px;
                }
                /* input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
    background-color: #fff0 !important;
    color: #0000 !important;
} */
                input:hover {
                    border: none;
                    border-bottom: 5px solid #10F5E0;
                }
                input:focus {
                    border: none;
                    border-bottom: 5px solid #10F5E0;
                }
                .mensaje {
                    
                    background-color: #fff0;
                    color: #fff;
                    padding: 10px 0 0 10px;
                    height: 180px;
                    outline: none;
                    border: none;
                    resize: none;
                    border-bottom: 5px solid #0F67A7;
                    box-shadow: 2px 2px 5px 2px #000;
                    transition: 1s border-bottom;
                    margin-bottom: 10px;
                }
                .mensaje:hover {
                    border: none;
                    border-bottom: 5px solid #10F5E0;
                }
                .mensaje:focus {
                    border: none;
                    border-bottom: 5px solid #10F5E0;
                }
            }

            .avisoBien {
                color: #fff;
                font-size: 2rem;
                text-align: center;
            }
            .avisoMal {
                margin-top: 5px;
                color: red;
                font-size: 2rem;
                font-weight: 100;
                text-align: center;
            }



            .bien {
                display: inline-block;
                height: 50px;
                width: 110px;
                margin-top: 15px;
                border: none;
                font-weight: bold;
                font-size: 1.7rem;
                border-radius: 2px;
                background-color: #10F5E0;
                box-shadow: 0px 0px 10px 5px #10F5E000, 3px 3px 2px 1px #000;
                transition: 1s box-shadow;
            }
            .bien:hover {
                box-shadow: 0px 0px 10px 5px #10F5E0ff;
            }

            .mal {
                display: inline-block;
                height: 50px;
                width: 110px;
                margin-top: 15px;
                border: none;
                font-weight: bold;
                font-size: 1.7rem;
                border-radius: 2px;
                background-color: #4a706d;
                cursor: no-drop;
                box-shadow: 0px 0px 10px 5px #10F5E000, 3px 3px 2px 1px #000;
                transition: 1s box-shadow;
                
            }
            .mal:hover {
                /* box-shadow: 0px 0px 10px 5px #10F5E0ff; */
            }

            .smsExito {
                margin-top: 10px;
                font-size: 3rem;
                color: #10F5E0ff;
                text-align: center;
            }
            /* button:enabled {
                color: red;
            } */
        }





    }

    @media (max-width: 750px) {
        .contenedor {
            /* background-color: black; */
            justify-content: center;
        }
    }
`;

export const LoaderScreen = styled.div`
    position: fixed;
    display: ${(props) => props.display};
    opacity: ${(props) => props.opacy}%;
    transition: 1s opacity, 1s display;
    transition-delay: 1s display;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
    /* background: rgb(0,0,0); */
    background-image: linear-gradient(to right top, #000207, #00030f, #000514, #000619, #00071d, #040e25, #05132e, #041737, #081f47, #0e2758, #163069, #1f387b);
    background-image: linear-gradient(to left, #121218, #1a1b24, #222430, #292e3d, #30384a);
    

    height: 100vh;
    width: 100vw;
    z-index: 999999999999;
    overflow: hidden;

    /* img {
        position: absolute;
        height: 50%;
    } */

    .opacy {
        opacity: ${(props) => props.logoOpa};
        transition: 1s;
    }

    .amina {
        height: 500px;
        width: 500px;
        position: absolute;
        
        g {
            /* .hojas {

                fill: #ff990000;
                stroke-dasharray: 0;
                stroke: #998D1E;
                stroke-width: .5;
                filter:drop-shadow(1px 1px 3px #c7c7c7);
                transition: 5s stroke-dasharray, 5s fill;
            }

            .hojasActivo {
                stroke-dasharray: 800;
            }

            .hojasColor {
                fill: #F7E648;
            } */
/* 
            @keyframes hojas {
                0%   {
                    fill: #ff990000;
                    stroke-dasharray: 100;
                }
                50% {
                    fill: #cfc4a5;
                    stroke-dasharray: 560;
                }
                100%  {
                    fill: #ff990000;
                    stroke-dasharray: 100;
                }

            } */


            .etiqueta {
                animation: etiqueta 20s infinite;
                fill: #aa7b8300;
                /* stroke-dasharray: 250; */
                stroke: #7A0000;
                stroke-width: 1;
                filter: drop-shadow(0px 0px 1px black);
                /* transition: 20s stroke-dasharray, 5s fill; */
                animation: myfirst 10s linear infinite;
            }

            @keyframes myfirst {
                0%{
                    stroke-dasharray: 0;
                }
                50%{
                    stroke-dasharray: 200;
                }
                100%{
                    stroke-dasharray: 0;
                }
            }

            /* .etiquetaActivo {
                stroke-dasharray: 500;
            } */

            /* .etiquetaColor {
                fill: red;
            } */

            /* @keyframes etiqueta {
                0%   {
                    stroke-dasharray: 20;
                    fill: #aa7b8300;
                }
                50% {
                    stroke-dasharray: 100;
                    fill: #cc2743;
                }
                100%  {
                    stroke-dasharray: 20;
                    fill: #aa7b8300;
                }

            } */
        }
    }

`;