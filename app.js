// BURGER NAVIGATION
const navLinks = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');

const navSlide = () => {
    const body = document.querySelector('body');
burger.addEventListener('click', ()=>{    
    //Toggle nav
    navLinks.classList.toggle('nav-active');   
    //Burger Animation
    burger.classList.toggle('toggle');
    body.classList.toggle('scrolldisabled');
});
}

navSlide();

function closeNavLinks(){
    setTimeout(()=>{
        navLinks.classList.remove('nav-active');
        burger.classList.remove('toggle');
    },200)
}

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
/*
//RJESENJE ZA ANDROID NAVBAR SA WINDOW.INNERHEIGHT - RADI ALI STEKA, TREBA TESTIRATI
window.addEventListener('resize', ()=>{
    body.style.height = window.innerHeight+'px';
    console.log('body height: '+ window.innerHeight)
    });
//RJESENJE ZA ANDROID NAVBAR SA WINDOW.INNERHEIGHT
*/

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


//*********OTHER PAGES**********
const microcement = document.querySelector('.microcement');
const onama = document.querySelector('.onama');
const galerija = document.querySelector('.galerija');
const kontakt = document.querySelector('.kontakt');
const page = document.querySelector('.page');
const onamaP = document.querySelector('.onamaP');
const galerijaP = document.querySelector('.galerijaP');
const kontaktP = document.querySelector('.kontaktP');
const navBarLinks = document.querySelectorAll('.nav-links li');

// SHOW-HIDE PAGES
microcement.addEventListener('click', ()=>{
        navBarLinks.forEach(link => link.classList.remove('active'));
        kontaktP.classList.remove('reveal');
        galerijaP.classList.remove('reveal');
        onamaP.classList.remove('reveal');
        body.classList.remove('scrolldisabled');
        setTimeout(()=>{
            onamaP.classList.add('hide');
            galerijaP.classList.add('hide');
            kontaktP.classList.add('hide');
        },90);
        closeNavLinks()
})

onama.addEventListener('click', ()=>{
    pageActive(onama)
    galerija.classList.remove('active');
    kontakt.classList.remove('active');
    body.classList.toggle('scrolldisabled');
    onamaP.classList.remove('hide');
    kontaktP.classList.remove('reveal');
    galerijaP.classList.remove('reveal');
    setTimeout(()=>{
        onamaP.classList.toggle('reveal');
        galerijaP.classList.add('hide');
        kontaktP.classList.add('hide');
        disableScroll();
    },90);
    hidden(onamaP);
    closeNavLinks()
})

galerija.addEventListener('click', ()=>{
    pageActive(galerija);
    onama.classList.remove('active');
    kontakt.classList.remove('active');
    body.classList.toggle('scrolldisabled');
    galerijaP.classList.remove('hide');
    kontaktP.classList.remove('reveal');
    onamaP.classList.remove('reveal');
    setTimeout(()=>{
        galerijaP.classList.toggle('reveal');
        onamaP.classList.add('hide');
        kontaktP.classList.add('hide');
        disableScroll();
    },90)
    hidden(galerijaP);
    closeLightbox();
    closeNavLinks()
})

kontakt.addEventListener('click', ()=>{
    pageActive(kontakt);
    onama.classList.remove('active');
    galerija.classList.remove('active');
    body.classList.toggle('scrolldisabled');
    kontaktP.classList.remove('hide');
    galerijaP.classList.remove('reveal');
    onamaP.classList.remove('reveal');
    setTimeout(()=>{
        kontaktP.classList.toggle('reveal');
        onamaP.classList.add('hide');
        galerijaP.classList.add('hide');
        disableScroll();
    },90);
    hidden(kontaktP);
    closeNavLinks()
})

function disableScroll() {
    if (onamaP.classList.contains('reveal')||galerijaP.classList.contains('reveal')||kontaktP.classList.contains('reveal')) {
        body.classList.add('scrolldisabled');
    } else {
        body.classList.remove('scrolldisabled');
    };
}

const hidden = (element)=>{
    if(element.classList.contains('reveal')){
        setTimeout(()=>{element.classList.add('hide')},200)}
}

function pageActive(page){
    page.classList.toggle('active');
}



