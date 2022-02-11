// Create variables targetting the relevant DOM elements here 👇
var title = document.querySelector('h2');
var desc1 = document.querySelector('.tagline-1');
var desc2 = document.querySelector('.tagline-2');
var image = document.querySelector('.cover-image');
var priceTag = document.querySelector('.price-tag');
var tagLine = document.querySelector('.tagline');

var mainPage = document.querySelector('.main-cover');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-covers-section');

var btnRandomCover = document.querySelector('.random-cover-button');
var btnMakeCover = document.querySelector('.make-new-button');
var btnHome = document.querySelector('.home-button');
var btnSave = document.querySelector('.save-cover-button');
var btnShowSaved = document.querySelector('.view-saved-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', makeCover);

btnRandomCover.addEventListener('click', function() {
  makeCover();
});

btnMakeCover.addEventListener('click', function() {
  show(formView);
  show(btnHome);
  hide(mainPage);
  hide(btnRandomCover);
  hide(btnSave);
});

btnShowSaved.addEventListener('click', function() {
  show(savedView);
  show(btnHome);
  hide(mainPage);
  hide(formView);
  hide(btnSave);
  hide(btnRandomCover);
});

btnHome.addEventListener('click', function() {
  show(mainPage);
  show(btnRandomCover);
  show(btnSave);
  hide(formView);
  hide(btnHome);
  hide(savedView);
});

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function makeCover() {
  currentCover = new Cover (
    image.src = covers[getRandomIndex(covers)],
    title.innerText = titles[getRandomIndex(titles)],
    desc1.innerText = descriptors[getRandomIndex(descriptors)],
    desc2.innerText = descriptors[getRandomIndex(descriptors)]);
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
    element.classList.add('hidden');
}
