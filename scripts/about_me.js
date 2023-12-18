let somePictures = document.querySelector(".some_pictures");
const allImages = document.querySelectorAll('.some_pictures img');

//arrows
const prevArrow = document.querySelector('.arrow_box2');
const nextArrow = document.querySelector('.arrow_box');

//counter
let counter = 1;
const size = allImages[0].clientWidth;

somePictures.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listeners

nextArrow.addEventListener('click', ()=>{
  if(counter >= allImages.length - 2) return;
  somePictures.style.transition = "transform 0.6s ease-in-out";
  counter++;
  prevArrow.style.opacity = 1;
  nextArrow.style.opacity = 1;
 
  somePictures.style.transform = 'translateX(' + (-size * counter) + 'px)';
  if(counter >=5){
    nextArrow.style.opacity = 0;
    prevArrow.style.borderColor = "white";
  }
 
});

prevArrow.addEventListener('click', ()=>{
  if(counter <= 1) return;
  somePictures.style.transition = "transform 0.4s ease-in-out";
  counter--;
  nextArrow.style.opacity = 0.5;
  prevArrow.style.opacity = 1;
  prevArrow.style.borderColor = "black";
  somePictures.style.transform = 'translate(' + (-size * counter) + 'px)';
  if(counter <=1) {
    prevArrow.style.opacity = 0;
    nextArrow.style.opacity = 0.5;
  }
  
});

somePictures.addEventListener('transitionend', ()=>{
  if(allImages[counter] === '.pic1'){
    somePictures.style.transition = "none";
    counter = allImages.length - 2;
    somePictures.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }

  if(allImages[counter] === '.pic7'){
    somePictures.style.transition = "none";
    counter = allImages.length - counter;
    somePictures.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});

