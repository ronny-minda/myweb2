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
    /* filter: opacity(.5); */
    background-image: linear-gradient(to right, #051937, #051630, #061328, #050f21, #020b1a);

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
    height: 500px;
    width: 100vw;
    /* background-color: red; */
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center -0px;//control de scroll paralax
    transition: 1s background-position;
`;