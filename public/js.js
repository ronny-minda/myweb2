
// const elmnt = document.getElementById("myDIV");
// const halo = document.getElementById("halo");

// window.addEventListener('scroll', (e) => {

//     const scroll = window.scrollY;

    
//     var x = elmnt.scrollLeft;
//     var y = elmnt.scrollTop;

//     let scroll11 = document.documentElement.scrollTop;

//     console.log();


    


    
    

//   });






function scrollParallax() {

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
    

    
    console.log(scrollTop)
}

window.addEventListener('scroll', scrollParallax)