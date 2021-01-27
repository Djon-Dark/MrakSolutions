const lightbox = document.querySelector('#Lightbox');
const slides = document.getElementsByClassName('slide');

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

