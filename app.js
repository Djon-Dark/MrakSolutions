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
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const main = document.querySelector('main');

main.addEventListener('scroll', function (){
    let main = document.querySelector('main');
    let offset= main.scrollTop;
    
    one.style.backgroundPositionY = offset * -0.1 + 'px';
    two.style.backgroundPositionY = offset * -0.1 + 'px';
    /*
    three.style.backgroundPositionY = offset * -0.2 + 'px';
    four.style.backgroundPositionY = offset * -0.2 + 'px';
    */
})

