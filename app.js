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


//PARALAX SCROLL

const one = document.querySelector('.one');
const three = document.querySelector('.three');
const main = document.querySelector('main');


/*  PARALLAX ZA H1 DOBAR, RADI
function parallax(element, distance, speed){
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}
*/

function parallax(element, distance, speed){
    const item = document.querySelector(element);
    const elementTopDistance = item.getBoundingClientRect().top;
    const center = window.innerHeight / 2;
        if(elementTopDistance <= center){
          item.style.transform = `translateY(${distance * speed}px)`;  
        }
    
}


main.addEventListener('scroll', function (){
    let main = document.querySelector('main');
    let scrolldistance = main.scrollTop; 
    one.style.backgroundPositionY = scrolldistance * -0.3 + 'px';
    three.style.backgroundPositionY = scrolldistance * -0.7 + 'px';

//DODAJ NEKI SCROLL COUNTER S KOJIM CES RESETIRATI SCROLLDISTANCE

    parallax('.q1', scrolldistance, 0.5);
    parallax('.q2', scrolldistance, 0.5);
    parallax('.q3', scrolldistance, 0.5);

})


