let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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

$(document).on('ready', function(){

  $('#chooseFile').on('click', function (e) {
    url = $('#image-url').val();
    
    // check if it's empty
		if (url === "")
			alert('Please type a URL');		

		url = addHTTP(url);
		
    if (checkURL(url)){

      // get image size (and save dimensions in local storage)
      getImageDimensions(url, updateBackgroundDimensions);
      
      localStorage.setItem('myImageURL', url);
      updateBackgroundImage(url);

      $('#fileModal').modal('hide');
    }else{
      alert('Not a valid image!');
    }
  });
  
  $('#resetImage').on('click', function (e) {
    window.localStorage.clear();
    location.reload();
  });
  
  checkLocalStorage();
});

function checkLocalStorage(){
  if(localStorage.getItem('myImageURL') &&
    localStorage.getItem('myImageURLWidth') &&
    localStorage.getItem('myImageURLHeight')) {

    updateBackgroundDimensions(localStorage.getItem('myImageURLWidth'),localStorage.getItem('myImageURLHeight'));
    updateBackgroundImage(localStorage.getItem('myImageURL'));
  }
}

function updateBackgroundDimensions(w, h){
  $('#image').css('width', w);
  $('#image').css('height', h);
  $('#image').css('background-size', w + 'px ' + h + 'px');
}

function updateBackgroundImage(url){
  $('#image').css('background-image', 'url('+url+')');
}

function getImageDimensions(url, callback){
  var img = $('<img src="'+url+'"/>').load(function(){
    localStorage.setItem('myImageURLWidth', this.width);
    localStorage.setItem('myImageURLHeight', this.height);
    callback(this.width, this.height);
  });
}

function addHTTP(url) {
   if (!/^(f|ht)tps?:\/\//i.test(url)) {
      url = "http://" + url;
   }
   return url;
}

function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) !== null);
}
