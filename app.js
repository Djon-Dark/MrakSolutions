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

const slide1 = document.querySelector('#slide1');
const slide2 = document.querySelector('#slide3');
const main = document.querySelector('main');

main.addEventListener('scroll', function (){
    let main = document.querySelector('main');
    let offset= main.scrollTop;
    
    slide1.style.backgroundPositionY = offset * -0.5 + 'px';
    slide2.style.backgroundPositionY = offset * -0.5 + 'px';
})

