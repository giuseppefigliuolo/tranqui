document.addEventListener('DOMContentLoaded', evt => {
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
        
    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0s ease forwards ${index / 10 + 0.3}s`;
            }

            });
            //burger animation
            burger.classList.toggle('toggle');
        });    
    
    }

    navSlide();

    const FigliuoloBar = (() => {
       const sideBar = document.querySelector('.side-bar');
       const divVerde = document.querySelector('button.categoria.green');
       const divArancio = document.querySelector('button.categoria.orange');
       const altezzaElVerde = divVerde.offsetTop - (divVerde.offsetHeight*6.5);
       const altezzaElArancio = divArancio.offsetTop - (divArancio.offsetHeight);
       window.addEventListener('scroll', evt => {
           if (window.scrollY < altezzaElVerde){
                sideBar.classList.remove('sbGreen', 'sbOrange');
                sideBar.classList.add('sbYellow');
           } else if (window.scrollY > altezzaElVerde && window.scrollY < altezzaElArancio){
               sideBar.classList.remove('sbYellow', 'sbOrange');
               sideBar.classList.add('sbGreen');
           } else if (window.scrollY > altezzaElArancio){
               sideBar.classList.remove('sbGreen', 'sbYellow');
               sideBar.classList.add('sbOrange');
           }
       })
    })();
});