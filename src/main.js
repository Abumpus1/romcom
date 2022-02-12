// Create variables targetting the relevant DOM elements here 👇
var title = document.querySelector('.cover-title');
var desc1 = document.querySelector('.tagline-1');
var desc2 = document.querySelector('.tagline-2');
var image = document.querySelector('.cover-image');
var priceTag = document.querySelector('.price-tag');
var tagLine = document.querySelector('.tagline');

var coverInput = document.querySelector('#cover');
var titleInput = document.querySelector('#title');
var desc1Input = document.querySelector('#descriptor1');
var desc2Input = document.querySelector('#descriptor2');

var mainPage = document.querySelector('.main-cover');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-covers-section');

var btnMakeBook = document.querySelector('.create-new-book-button');
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

btnHome.addEventListener('click', goToHome);

btnShowSaved.addEventListener('click', goToSavedView);

btnMakeCover.addEventListener('click', goToFormView);

btnRandomCover.addEventListener('click', makeCover);

btnMakeBook.addEventListener('click', function() {
  event.preventDefault();
  createBook(coverInput, titleInput, desc1Input, desc2Input)
  addBookProperties(coverInput, titleInput, desc1Input, desc2Input)
  goToHome()
});


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function makeCover() {
  image.src = covers[getRandomIndex(covers)];
  title.innerText = titles[getRandomIndex(titles)];
  desc1.innerText = descriptors[getRandomIndex(descriptors)];
  desc2.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover (
    image.src,
    title.innerText,
    desc1.innerText,
    desc2.innerText);
}

function addBookProperties(input1, input2, input3, input4) {
  covers.push(input1.value);
  titles.push(input2.value);
  descriptors.push(input3.value);
  descriptors.push(input4.value);
}

function goToHome() {
  show(mainPage);
  show(btnRandomCover);
  show(btnSave);
  hide(formView);
  hide(btnHome);
  hide(savedView);
}

function goToFormView() {
  show(formView);
  show(btnHome);
  hide(mainPage);
  hide(btnRandomCover);
  hide(btnSave);
}

function goToSavedView() {
  show(savedView);
  show(btnHome);
  hide(mainPage);
  hide(formView);
  hide(btnSave);
  hide(btnRandomCover);
}

function createBook(input1, input2, input3, input4) {
  var book = new Cover(
  image.src = input1.value,
  title.innerText = input2.value,
  desc1.innerText = input3.value,
  desc2.innerText = input4.value)
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
    element.classList.add('hidden');
}
