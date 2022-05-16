const splash = document.querySelector('.splash');
document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none')
    },2000);
});
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.main-nav').addClass("sticky");
        }else{
            $('.main-nav').removeClass("sticky");
        }
    });

    var typed = new Typed(".introduction__me-animation", {
        strings : ["Developer"], 
        typeSpeed: 90,
        backSpeed: 60,
        loop: true
    });   
    var typed = new Typed(".about__me-animation", {
        strings : ["Developer"], 
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });
    
});       
window.sr = ScrollReveal();
sr.reveal('.introduction', {
    delay: 2000,
    duration: 2500,
    origin: 'bottom',
    distance: '-100px'
});
sr.reveal('.social', {
    delay: 2000,
    duration: 2000,
    origin: 'bottom',
     distance: '-100px'
}); 
sr.reveal('.img__background', {
    delay: 2000,
    duration: 2000,
    origin: 'bottom',
     distance: '-100px'
}); 
sr.reveal('.about__tittle', {
    duration: 1500,
    origin: 'top',
    distance: '-100px'
});
sr.reveal('.about__img', {
    duration: 4000,
    origin: 'top',
    distance: '-100px'
});
sr.reveal('.about__me', {
    duration: 4500,
    origin: 'top',
    distance: '-100px'
}); 
sr.reveal('.btn-cv', {
    duration: 5000,
    origin: 'top',
    distance: '-100px'
});
sr.reveal('.skills__tittle', {
    duration: 2000,
    origin: 'top',
    distance: '-100px'
});
sr.reveal('.skills-wrapper', {
    duration: 3000,
    origin: 'rigth',
    distance: '-100px'
});
sr.reveal('.portfolio__tittle', {
    duration: 2000,
    origin: 'left',
    distance: '-100px'
});
sr.reveal('.card__tittle', {
    duration: 2500,
    origin: 'rigth',
    distance: '-100px'
});
sr.reveal('.carousel', {
    duration: 3000,
    origin: 'top',
    distance: '-100px'
});
sr.reveal('.contact__tittle', {
    duration: 2000,
    origin: 'left',
    distance: '-100px'
});
sr.reveal('.info', {
    duration: 2500,
    origin: 'rigth',
    distance: '-100px'
});
sr.reveal('.email__container', {
    duration: 3000,
    origin: 'top',
    distance: '-100px'
});



