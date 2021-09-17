import styled, {
    css,
    keyframes,
    ThemeProvider,
    createGlobalStyle,
} from "styled-components";

import img from '../../img/halo.jpg'

export const GlabalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;

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
        .capa1 {
            position: relative;
            z-index: 20;
            .capa2 {

                section {

                    h1 {

                    }
                    p {

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
            }
        }
    }

    .sobre_mi {

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



    

    

    



    /* background-color: red; */
    /* background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center -0px;//control de scroll paralax
    transition: 1s background-position; */

    @media (min-width: 750px) {
        .section1 {
            height: 100vh;
            background-image: url(${img});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center -0px;//control de scroll paralax
            transition: 1s background-position;
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
                background-color: #FF000099;
                .capa2 {
                    background-color: blue;
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
                            font-size: 45px;
                        }
                        p {
                            font-size: 17px;
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
            background-color: grey;
            height: 100vh;
            display: flex;
            align-items: flex-end;

            background-image: url(${img});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center -0px;//control de scroll paralax
            transition: 1s background-position;

            .capa1 {
                height: 70%;
                width: 100%;
                background-color: #ff000099;
                border-top: 12px solid red;
                .capa2 {
                    /* background-color: blue; */
                    
                    display: flex;
                    section {
                        
                        h2 {

                        }
                        p {

                        }
                    }
                }

                .icos_tec {
                    height: 150px;
                    width: 100%;
                    background-color: blue;
                }

            }
        }

        .proyectos {
            height: 90vh;
            background-image: url(${img});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center -0px;//control de scroll paralax
            transition: 1s background-position;
            display: flex;
            justify-content: flex-end;
            .contenedor {
                background-color: #FF000099;
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
                background-color: #FF000099;
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
    }

    @media (max-width: 750px) {
        .section1 {
            height: 100vh;
            background-image: url(${img});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center -0px;//control de scroll paralax
            transition: 1s background-position;
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
                background-color: #FF000099;
                .capa2 {
                    background-color: green;
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
                            font-size: 25px;
                        }
                        p {
                            font-size: 12px;
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
            background-color: grey;
            height: 100vh;
            display: flex;
            align-items: flex-end;

            background-image: url(${img});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center -0px;//control de scroll paralax
            transition: 1s background-position;

            .capa1 {
                height: 70%;
                width: 100%;
                background-color: #ff000099;
                border-top: 12px solid red;
                .capa2 {
                    /* background-color: blue; */
                    
                    display: flex;
                    section {
                        
                        h2 {

                        }
                        p {

                        }
                    }
                }

                .icos_tec {
                    height: 150px;
                    width: 100%;
                    background-color: blue;
                }

            }
        }

        .proyectos {
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

    @media (max-width: 400px) {
        .section1 {
            height: 100vh;
            background-image: url(${img});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center -0px;//control de scroll paralax
            transition: 1s background-position;
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
                background-color: #FF000099;
                .capa2 {
                    background-color: red;
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
            background-color: grey;
            height: 100vh;
            display: flex;
            align-items: flex-end;

            background-image: url(${img});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center -0px;//control de scroll paralax
            transition: 1s background-position;

            .capa1 {
                height: 70%;
                width: 100%;
                background-color: #ff0099;
                border-top: 12px solid red;
                .capa2 {
                    /* background-color: blue; */
                    
                    display: flex;
                    flex-direction: column;
                    section {
                        
                        h2 {

                        }
                        p {

                        }
                    }
                }

                .icos_tec {
                    height: 150px;
                    width: 100%;
                    background-color: blue;
                }

            }
        }

        .proyectos {
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
    

`;