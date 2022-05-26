/* The following script is implemented for the slide-show on the Home Page
 * The JS has been based on the design sample in W3-Schools
 * as per: https://www.w3schools.com/howto/howto_js_slideshow.asp
 */
let slideIndex = 0;
showSlides();

/* Control automatic transition of slides */
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides_fade");
  let blocks = document.getElementsByClassName("block");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < blocks.length; i++) {
    blocks[i].className = blocks[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  blocks[slideIndex-1].className += " active";

  setTimeout(showSlides, 3500);
}