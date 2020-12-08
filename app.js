// BURGER NAVIGATION
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', ()=>{    
    //Toggle nav
        nav.classList.toggle('nav-active');

    //Animate links
    navLinks.forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.2s ease forwards ${index / 8}s`;
        }
    });
    //Burger Animation
    burger.classList.toggle('toggle');
});
}

navSlide();

const main = document.querySelector('main');
const questionH1 = document.querySelectorAll('.questionH1');
const text = document.querySelectorAll('.text');
const smallimg = document.querySelectorAll('.smallimg');

/*  PARALLAX ZA H1 DOBAR, RADI
function parallax(element, distance, speed){
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}
*/


main.addEventListener('scroll', function (){
    let main = document.querySelector('main');
    let scrolldistance = main.scrollTop; 

    //BACKGROUND PARALLAX
    const one = document.querySelector('.one');
    one.style.backgroundPositionY = scrolldistance * -0.5 + 'px';

    //ARROW FADE OUT AFTER FIRST SCROLL
    const fadeOut = element =>{
        let top = element.getBoundingClientRect().top;
        let bot = window.innerHeight - element.getBoundingClientRect().bottom;
      
        if(bot > 50){
            element.style.display = 'none';
        } else {
            element.style.display = 'block';
        }
    }

     //CHECKS IF ELEMENT IS IN VIEW AND FADES IN
     const fadeIn = element =>{
        let top = element.getBoundingClientRect().top;
        let bot = window.innerHeight - element.getBoundingClientRect().bottom;
      
        if(top > -100 && bot > -100){
            element.style.animation = 'h1Fade 1s ease-in';
            element.style.opacity = 1;
        }
    }

    //SLIDE IN FROM INVISIBLE TEXT
    const slideIn = element =>{
        let top = element.getBoundingClientRect().top;
        let bot = window.innerHeight - element.getBoundingClientRect().bottom;
      
        if(top > 0 && bot > 0){
            element.style.animation = 'h1Fade 0.5s linear, slideIn 0.5s ease-out';
            element.style.opacity = 1;
        }
    }

    
   
    //ACTIVATION OF ANIMATION FUNCTIONS
    smallimg.forEach(element => fadeIn(element));
    questionH1.forEach(element => fadeIn(element));
    text.forEach(element => slideIn(element));
   
   //ARROW DISSAPEAR
    const arrow = document.querySelector('.arrow');
    fadeOut(arrow);
  

});

//TO DO:
// -CENTRIRATI STRELICU NA DNO STRANICE
// -UREDITI TEKST
// -MEDIA QUERY ZA ULTRAWIDE, JER IZGLEDA MALO PEDERSKI TRENUTNO
// -MEDIA QUERY ZA IPHONE/MOBITELE, IZGLEDA KO KURAC, SVE SE LOMI
// -MEDIA QUERY ZA LANDSCAPE MODE NA MOBITELIMA
// -POLOZAJ BURGER LINKOVA JEBE TO STA JE MIN HEIGHT NAVBARA NAMJESTEN, PA 7VH NE ODGOVARA UVIJEK, NE POKLAPA SE DOBRO

