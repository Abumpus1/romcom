// Create variables targetting the relevant DOM elements here 👇
var title = document.querySelector('h2');
var desc1 = document.querySelector('.tagline-1');
var desc2 = document.querySelector('.tagline-2');
var image = document.querySelector('.cover-image');
var priceTag = document.querySelector('.price-tag');
var tagLine = document.querySelector('.tagline');
var btnRandomCover = document.querySelector('.random-cover-button');
var btnMakeCover = document.querySelector('.make-new-button')
var homePage =[title, desc1, desc2, image, priceTag, tagLine];
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
btnRandomCover.addEventListener('click', function() {
  makeCover();
});

btnMakeCover.addEventListener('click', function() {
  hide(homePage);
});

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

image.src = covers[getRandomIndex(covers)]
title.innerText = titles[getRandomIndex(titles)]
desc1.innerText = descriptors[getRandomIndex(descriptors)]
desc2.innerText = descriptors[getRandomIndex(descriptors)]

function makeCover() {
  currentCover = new Cover (
    image.src = covers[getRandomIndex(covers)],
    title.innerText = titles[getRandomIndex(titles)],
    desc1.innerText = descriptors[getRandomIndex(descriptors)],
    desc2.innerText = descriptors[getRandomIndex(descriptors)])
  }

function hide(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add('hidden');
  }
}
