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
    var typed = new Typed(".social__icon-animation1", {
        strings : ["ithub"], 
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });
    var typed = new Typed(".social__icon-animation2", {
        strings : ["inkedin"], 
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });
    var typed = new Typed(".social__icon-animation3", {
        strings : ["outube"], 
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });
    var typed = new Typed(".social__icon-animation4", {
        strings : ["nstagram"], 
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });
    var typed = new Typed(".about__me-animation", {
        strings : ["Developer"], 
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });

});


