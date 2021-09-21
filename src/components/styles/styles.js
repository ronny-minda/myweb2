import styled, {
    css,
    keyframes,
    ThemeProvider,
    createGlobalStyle,
} from "styled-components";

import img from '../../img/halo.jpg'
import flecha from '../../svg/flecha-hacia-abajo-para-navegar.svg'

import up from '../../img/imgUp.png'
import serca from '../../img/sobremi1.png'
import protecto from '../../img/proyectos.png'
import certi from '../../img/certi.png'

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
import react from '../../svg/tecno/html.svg'
import sass from '../../svg/tecno/sass.svg'
import ubuntu from '../../svg/tecno/ubuntu.svg'
import git from '../../svg/tecno/git.svg'
import github from '../../svg/tecno/github.svg'
import halo from '../../svg/tecno/atomic.svg'


// TRABAJOS
import redi from '../../svg/trabajos/redirects.png'


export const GlabalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;

    }


    html {
        font-size: 62.5%;
        
    }



    body::-webkit-scrollbar {
        width: 10px;
        background-color: #131a2c;

    }
    body::-webkit-scrollbar:hover {
        width: 10px;
        background-color: #060B1A;
    }

    body::-webkit-scrollbar-thumb {
        background: #1d2949;
        border-radius: 5px;
    }
    body::-webkit-scrollbar-thumb:hover {
        background: #273B6F;
        border-radius: 5px;
    }




    body {
        background-color: #131a2c;
        
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
    height: 45px;
    width: 100vw;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.75);
    z-index: 99999;
    /* filter: opacity(.5); */
    

    .a {
        text-decoration: none;
        color: #000000;
        h1 {
            font-size: 20px;
            color: #BFC4DC;
            font-weight: 400;
            transition: .3s color;
        }
        h1:hover {
            color: #C16161;
        }
    }
    nav {
        font-size: 11px;
        li {
            display: inline-block;
            list-style: none;
            margin: 0 18px;
            a {
                color: #BFC4DC;
                text-decoration: none;
            }
        }
    }



    @media (max-width: 750px) {
        
        background-image: linear-gradient(to right, #051937, #051630, #061328, #050f21, #020b1a);
        
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;
        /* filter: blur(.5px); */
        .nav_blur {
            display: ${(props) => props.menu.display};
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100vw;
            background-color: #3425;
            /* background-color: blue; */
            backdrop-filter: blur(${(props) => props.menu.blur});
            /* backdrop-filter: blur(2px); */
            /* transition: 1s backdrop-filter; */
        }
        nav {
            
            clip-path: circle(${(props) => props.menu.menu} at 0% 0);
            /* clip-path: circle(60% at 0% 0); */
            position: fixed;
            top: 0;
            left: 0;
            background-color: #0c2e67;
            height: 100vh;
            width: 100vw;
            transition: 1s clip-path;
            /* display: none; */
            li {
                position: absolute;
                

                display: inline-block;
                list-style: none;
                transition: 1s;
                transition-delay: .5s;
                a {
                    color: #000000;
                    text-decoration: none;
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
            .Contacto {
                left: ${(props) => props.menu.contactoL};
                top: ${(props) => props.menu.contactoT};
            }
        }
        
        .btn_conte {
            background-color: #0c2e67;
            height: 45px;
            width: 50px;
            position: absolute;
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
        background-image: linear-gradient(to right, #051937ee, #051630ee, #061328ee, #050f21ee, #020b1aee);
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
            background-color: #2C3347ee;
            .capa2 {

                section {

                    h1 {
                        font-size: 5rem;
                    }
                    p {
                        font-size: 2rem;
                    }
                }
                img {

                }
            }
            .flecha_abajo {
                cursor: pointer;
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
            background-color: #161e35ee;
            border-top: 8px solid #8ac6a0;
            
            /* border-top: 12px solid #791c1c; */
            .capa2 {
                padding: 15px 4px;
                display: flex;
                justify-content: space-around;
                color: #fff;
                section {
                    width: 28%;
                    h2 {

                    }
                    p {

                    }
                }
            }
            
            h3 {
                font-size: 2rem;
                color: #fff;
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
                
                color: #fff;

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
                        font-size: 2rem;

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
                        background-image: url(${git});
                    }
                    .github {
                        background-image: url(${github});
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
            background-color: #161e35cc;
            border-left: 8px solid #8ac6a0;
            border-top: 0;
            border-right: 0;
            border-bottom: 0;

            filter: opacity(${(props) => props.proyectosOpa});
            transform: translate(${(props) => props.proyectosTra}, 0px);
            transition: 2s filter, 2s transform;
            
 
            
            color: #fff;
            h2 {
                font-size: 3.5rem;
                padding: 12% 10% 1.5% 10%;
            }
            .p_u {
                padding: 1.5% 13% 13% 10%;
                font-size: 2rem;
                font-weight: 100;
                /* width: 80%; */
            }
            a {
                margin: 1.5% 13% 13% 10%;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                height: 50px;
                width: 160px;
                font-weight: 100;
                font-size: 2rem;
                color: #fff;
                text-decoration: none;
                /* background-color: red; */
                border: 1px solid #fff;
                border-radius: 5px;
                transition: 1s border, 1s color;
            }
            a:hover {
                border: 1px solid red;
                color: red;
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
            background-color: #161e35ee;
            border-right: 8px solid #8ac6a0;
            border-top: 0;
            border-left: 0;
            border-bottom: 0;

            filter: opacity(${(props) => props.certificadosOpa});
            transform: translate(${(props) => props.certificadosTra}, 0px);
            transition: 2s filter, 2s transform;
            
 
            
            color: #fff;
            h2 {
                font-size: 3.5rem;
                padding: 12% 10% 1.5% 10%;
            }
            .p_u {
                padding: 1.5% 13% 13% 10%;
                font-size: 2rem;
                font-weight: 100;
                /* width: 80%; */
            }
            a {
                margin: 1.5% 13% 13% 10%;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                height: 50px;
                width: 160px;
                font-weight: 100;
                font-size: 2rem;
                color: #fff;
                text-decoration: none;
                /* background-color: red; */
                border: 1px solid #fff;
                border-radius: 5px;
                transition: 1s border, 1s color;
            }
            a:hover {
                border: 1px solid red;
                color: red;
            }
        }
    }

    .objetivo {
        
        filter: opacity(${(props) => props.hacerOpa});
        transition: 2s filter;
        background-color: #131a2c;
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
                background-color: #1d2949;
                box-shadow: 0px 0px 20px 5px #0f1422;

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
                font-size: 2.2rem;
                text-align: center;
            }
            p {
                font-size: 1.2rem;
                text-align: center;
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
                        h1 {

                        }
                        p {

                        }
                    }
                    img {
                        height: 100%;
                        width: 400px;
                        object-fit: cover;
                        border-radius: 50%;
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
                            font-size: 3rem;
                        }
                        p {
                            font-size: 1.3rem;
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
            
            height: 100vh;
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
                            font-size: 1.3rem;
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
            
            height: 100vh;
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
        background-color: #1d2949;
        display: flex;
        justify-content: center;
        align-items: center;
        li {
            list-style: none;
            h3 {
            color: #fff;
            font-size: 2.5rem;
            }
        }

    }

    .ico {
        height: 100px;
        background-color: #131a2c;
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
                background-color: #1d2949;
                box-shadow: 0px 0px 6px 6px #0f1422;
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
                box-shadow: 0px 0px 6px 6px #232e4c;
                transition: 1s box-shadow;
            }
        }

        

    }

    .copi {
        background-color: #1d2949;
        height: 130px;
        display: flex;
        justify-content: center;
        li {
            margin-top: 22px;
            list-style: none;
            color: #fff;
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
                color: #fff;
                font-size: 12px;
            }
        }
    }
    

`;

export const MainTabajo = styled.main`
    /* margin-top: 120px; */
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
            /* background: linear-gradient(90deg, #060B1A00 0%, #060B1A44 10%, #060B1Abb 35%, #060B1Adf 50%, #060B1Aff 100%); */
            position: absolute;
            
            
            height: 100%;
            width: 50%;
            color: #fff;

            display: flex;
            flex-direction: column;
            
            

            

            .contenedor_disponible {
                display: inline-flex;
                flex-direction: column;
                /* justify-content: flex-end; */

                h2 {
                    font-size: 3rem;
                    text-align: end;
                }
                p {
                    font-size: 1.8rem;
                    /* width: 75%; */
                    text-align: end;
                }

                .conte {
                    justify-content: center;
                    display: flex;
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
                h2 {
                    padding: 15px 0 5px 0;
                    text-align: center;
                    font-size: 2rem;
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
            background: linear-gradient(90deg, #060B1A00 0%, #060B1A44 10%, #060B1Abb 35%, #060B1Adf 50%, #060B1Aff 100%);

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
            background: linear-gradient(-90deg, #060B1A00 0%, #060B1A44 10%, #060B1Abb 35%, #060B1Adf 50%, #060B1Aff 100%);

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