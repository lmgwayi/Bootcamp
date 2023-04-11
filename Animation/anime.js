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
    showDivs(slideIndex);
    
    function plusDivs(n) {
    showDivs(slideIndex += n);
    }
    
   function showDivs(n) {
     let index;
      let images = document.getElementsByClassName("mySlides");
      if (n > images.length) {slideIndex = 1}
      if (n < 1) {slideIndex = images.length}
      for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";  
      }
      images[slideIndex-1].style.display = "block";  
    }