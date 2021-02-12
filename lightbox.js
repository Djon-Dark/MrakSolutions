const lightbox = document.querySelector('#Lightbox');
const slides = document.getElementsByClassName('slide');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');

let slideIndex = 1;
showSlide(slideIndex);

function openLightbox() {
  lightbox.style.display = 'block';
  //test za animirati display none/block
  setTimeout(()=>{
    lightbox.style.opacity = 1;
  },100)
}

function closeLightbox() {
  lightbox.style.opacity = 0;
  setTimeout(()=>{
  lightbox.style.display = 'none';
},100)}

function changeSlide(n) {
	showSlide(slideIndex += n);
}

function toSlide(n) {
	showSlide(slideIndex = n);
}

function showSlide(n) {

  if (n > slides.length) {
    slideIndex = 1;	
  }
  
  if (n < 1) {
  	slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
    slides[i].style.display = "none"; 
  }

  slides[slideIndex - 1].style.display = 'block';
  setTimeout(()=>{
    slides[slideIndex - 1].style.opacity = 1;
  },100)
}

function hideSlide(n){
  slides[n+1].style.display = 'none';
}

//close modal
lightbox.addEventListener('click',(e)=>{
    if(e.target.classList.contains('modal')){
        closeLightbox();
    }
})

previous.addEventListener('click',()=>{changeSlide(-1)});
next.addEventListener('click',()=>{changeSlide(1)}); //addeventlistener - ovako se mora pozvati funkcija s parametrima, inace vrati undefined


//Full screen image - NOT FINISHED
/*
const expand_btn = document.querySelector('.expand_btn');
const expand_toggle = document.querySelector('.expand_btn i');
const modalimg = document.querySelectorAll('.slide img');

expand_btn.addEventListener('click', ()=>{
    modalimg.forEach(img => img.classList.toggle('expandIMG'));
    expand_toggle.classList.toggle('fa-expand');
    expand_toggle.classList.toggle('fa-compress');
})
*/