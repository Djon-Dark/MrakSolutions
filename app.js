// BURGER NAVIGATION
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', ()=>{    
    //Toggle nav
        nav.classList.toggle('nav-active');
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


let prevScrollPos = main.scrollTop; //to hide navbar, this must be outside of scroll event listener

main.addEventListener('scroll', function (){
    let main = document.querySelector('main');
    let scrolldistance = main.scrollTop; 

    //HIDE NAVBAR ON SCROLL DOWN, SHOW ON SCROLL UP
    let currentScrollPos = scrolldistance;
    const nav = document.querySelector("nav");
    if(prevScrollPos > currentScrollPos){
        nav.style.top = "0"
    } else {
      nav.style.top = "-3rem";
    }
    prevScrollPos = currentScrollPos;
    

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

window.onresize = function() {
    document.body.height = window.innerHeight;
    main.style.height = window.innerHeight;
}
window.onresize();

//TO DO:

// -iPhone still bugged out, viewport not showing correctly for address bar and controls

// -CENTRIRATI STRELICU NA DNO STRANICE
// -UREDITI TEKST
// -MEDIA QUERY ZA ULTRAWIDE, JER IZGLEDA MALO PEDERSKI TRENUTNO

// -MEDIA QUERY ZA LANDSCAPE MODE NA MOBITELIMA
// -mozda maknuti scroll snap za neke situacije, pogledaj cemherovu stranicu
// -mozda dodati blur efekt sa filter: blur(8px)

