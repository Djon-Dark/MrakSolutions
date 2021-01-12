// BURGER NAVIGATION
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const html = document.querySelector('html');
burger.addEventListener('click', ()=>{    
    //Toggle nav
        navLinks.classList.toggle('nav-active');
        
    //Burger Animation
    burger.classList.toggle('toggle');
    html.classList.toggle('disablescroll');
});
}

navSlide();

const body = document.querySelector('body');
const question = document.querySelector('.question');
const answer = document.querySelector('.answer');
const questionH1 = document.querySelectorAll('.questionH1');
const text = document.querySelectorAll('.text');
const smallimg = document.querySelectorAll('.smallimg');
const navactive = document.querySelector('.nav-links');
const nav = document.querySelector('nav');
/*  PARALLAX ZA H1 DOBAR, RADI
function parallax(element, distance, speed){
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}
*/




const debounce = (func, wait) => {
    let timeout;
    return function () {
        if(!timeout){
            func();
            timeout = setTimeout( ()=> timeout = null, wait);
        }
    };
  };

let ismobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

let prevScrollPos = window.pageYOffset; //to hide navbar, this must be outside of scroll event listener
window.addEventListener('scroll', () => {
    let scrolldistance = window.pageYOffset;
    // BYPASS PARALLAX EFFECT ON MOBILE
    if (!ismobile) {
    // BACKGROUND PARALLAX
        const one = document.querySelector('.one');
        one.style.backgroundPositionY = scrolldistance * -0.5 + 'px';
    }
});

// HIDE NAVBAR ON SCROLL DOWN, SHOW ON SCROLL UP
window.addEventListener('scroll', debounce(()=>{
    if (ismobile) {
        const nav = document.querySelector("nav");
        let scrolldistance = window.pageYOffset;
        let currentScrollPos = scrolldistance;             
        if(prevScrollPos > currentScrollPos || currentScrollPos < 20){
        nav.style.top = "0";
        } else {
        nav.style.top = "-3rem";
        }
        prevScrollPos = currentScrollPos;
    } 
},250));      

//WINDOW.INNER HEIGHT ZA SAKRITI NAVBAR TEST


//WINDOW.INNER HEIGHT ZA SAKRITI NAVBAR TEST


setInterval(function(){ 
    //ARROW FADE OUT AFTER FIRST SCROLL
    const fadeOut = element =>{
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
}, 30);





