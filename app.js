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

const contentSlide = () => {
    const content = document.querySelector('.content');

    content.addEventListener(setTimeout)

}