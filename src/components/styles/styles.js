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


import html from '../../svg/tecno/html.svg'
import cs5 from '../../svg/tecno/css.svg'
import js from '../../svg/tecno/js.svg'
import react from '../../svg/tecno/html.svg'
import sass from '../../svg/tecno/sass.svg'
import ubuntu from '../../svg/tecno/ubuntu.svg'
import git from '../../svg/tecno/git.svg'
import github from '../../svg/tecno/github.svg'
import halo from '../../svg/tecno/atomic.svg'




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

export const Main = styled.main`
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
            box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.75);
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
                height: 60px;
                width: 60px;
                background-color: blue;
                position: absolute;
                bottom: 0;

                background-image: url(${flecha});
                background-repeat: no-repeat;
                background-size: cover;




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
            box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.75);
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
        
        .contenedor {

            h2 {

            }
            .p_u {

            }
            .p_a {

            }
        }
    }

    .objetivo {
        filter: opacity(${(props) => props.hacerOpa});
        transition: 2s filter;
        .contenedor {

            .ico {

            }
            h3 {

            }
            p {

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
            background-image: url(${img});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center -0px;//control de scroll paralax
            transition: 1s background-position;
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
            padding-top: 80px;
            display: flex;
            .contenedor {
                width: 33vw;
                display: flex;
                flex-direction: column;
                align-items: center;
                .ico {
                    height: 150px;
                    width: 150px;
                    background-color: #000;
                    border-radius: 50%;
                }
                h3 {

                }
                p {

                }
            }
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
                heighautot
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
            background-image: url(${img});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center -0px;//control de scroll paralax
            transition: 1s background-position;
            display: flex;
            align-items: flex-end;
            .contenedor {
                background-color: #FF000099;
                width: 100%;
                height: 40%;
                h2 {

                }
                .p_u {

                }
                .p_a {

                }
            }
        }

        .objetivo {
            padding-top: 80px;
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
                    background-color: #000;
                    border-radius: 50%;
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
                heighautot
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
                background-color: #FF000099;
                width: 100%;
                height: 40%;
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
            background-image: url(${img});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center -0px;//control de scroll paralax
            transition: 1s background-position;
            display: flex;
            align-items: flex-end;
            .contenedor {
                background-color: #FF000099;
                width: 100%;
                height: 40%;
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
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        li {
            list-style: none;
            h3 {
            color: #fff;
            font-size: 30px;
            }
        }

    }

    .ico {
        height: 100px;
        background-color: blue;
        display: flex;
        justify-content: center;
        align-items: center;
        
        li {
            list-style: none;
            a {
                display: inline-block;
                height: 60px;
                width: 60px;
                background-color: blueviolet;
                border-radius: 50%;
            }
        }


    }

    .copi {
        background-color: red;
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
            background-color: red;
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
            background-color: blue;
            display: flex;
            flex-wrap: wrap;

            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            
            
            li {
                list-style: none;
                a {
                    display: inline-block;
                    height: 60px;
                    width: 60px;
                    background-color: blueviolet;
                    border-radius: 50%;
                }
            }
        }


        .copi {
            background-color: red;
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