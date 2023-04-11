// let images = [
//     "image1.jpg",
//     "image2.jpg",
//     "image3.jpg",
// ];

// let index = 0;
// function next() {
// let show = images[index];
// console.log(show);
// index++;
// }
// next()
// next()
// next()
// next()

// function prev(){
//     let show = images[index];
//     console.log(show);
//     index--;

//     if(index <0 ){
//         index=images.length -1
//     }
// }
// prev()
// prev()
// prev()

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}