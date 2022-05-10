/* The following script is implemented for the slide-show on the Home Page
 * The JS has been referenced from a design sample in W3-Schools
 * as per: https://www.w3schools.cShowSlidesom/howto/howto_js_slideshow.asp
 */
let slideIndex = 1;
usrShowSlides(slideIndex);
autoIncrement();

/* Perform an automatic transition */
function autoIncrement() {
    /* Set timeout for auto increment */
    setTimeout(autoIncrement, 8000);
    plusSlides(1);
}

function plusSlides(n) {
  usrShowSlides(slideIndex += n);
}

function currentSlide(n) {
  usrShowSlides(slideIndex = n);
}

/* User input controlled slide show animations */
function usrShowSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides_fade");
  let blocks = document.getElementsByClassName("block");
  /* Wrap */
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < blocks.length; i++) {
    blocks[i].className = blocks[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  blocks[slideIndex-1].className += " active";
}