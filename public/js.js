
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
    const parallax = document.querySelector('.parallax');
    let scrollTop = document.documentElement.scrollTop;
    // parallax.style.transform = 'translateY('+ scrollTop * 0.1 + 'px)';

    // parallax.style.transform = 'translateY('+ scrollTop * 0.1 + 'px)';

    // scrollTop = -scrollTop;

    parallax.style.backgroundPosition = `center ${(-500+scrollTop) * 0.2}px`;

    
    console.log(scrollTop)
}

window.addEventListener('scroll', scrollParallax)