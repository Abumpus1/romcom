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
var savedCoversView = document.querySelector('.saved-covers-section');
var savedView = document.querySelector('.saved-view');

var makeMyBookBtn = document.querySelector('.create-new-book-button');
var newRandomCoverBtn = document.querySelector('.random-cover-button');
var formViewBtn = document.querySelector('.make-new-button');
var homeBtn = document.querySelector('.home-button');
var saveBtn = document.querySelector('.save-cover-button');
var savedViewBtn = document.querySelector('.view-saved-button');

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;


window.addEventListener('load', function() {
makeRandomCover();
displayBooks();
});

savedCoversView.addEventListener('dblclick', deleteBook);

homeBtn.addEventListener('click', goToHome);

savedViewBtn.addEventListener('click', goToSavedView);

formViewBtn.addEventListener('click', goToFormView);

newRandomCoverBtn.addEventListener('click', makeRandomCover);

saveBtn.addEventListener('click', function() {
  saveBook(currentCover);
  displayBooks();
});

makeMyBookBtn.addEventListener('click', function() {
  event.preventDefault();
  createBook(coverInput, titleInput, desc1Input, desc2Input);
  addBookProperties(coverInput, titleInput, desc1Input, desc2Input);
  goToHome();
});


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
    element.classList.add('hidden');
}

function goToHome() {
  show(mainPage);
  show(newRandomCoverBtn);
  show(saveBtn);
  hide(formView);
  hide(homeBtn);
  hide(savedView);
}

function goToFormView() {
  show(formView);
  show(homeBtn);
  hide(mainPage);
  hide(newRandomCoverBtn);
  hide(saveBtn);
  hide(savedView);
}

function goToSavedView() {
  show(savedView);
  show(homeBtn);
  hide(mainPage);
  hide(formView);
  hide(saveBtn);
  hide(newRandomCoverBtn);
}

function makeRandomCover() {
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

function createBook(input1, input2, input3, input4) {
  currentCover = new Cover(
  image.src = input1.value,
  title.innerText = input2.value,
  desc1.innerText = input3.value,
  desc2.innerText = input4.value);
}

function displayBooks() {
  savedCoversView.innerHTML = ''
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversView.innerHTML += `
    <section class='mini-cover' id=${savedCovers[i].id}>
      <img class='cover-image' src=${savedCovers[i].cover}>
      <h2 class='cover-title'>${savedCovers[i].title}</h2>
      <h3 class='tagline'>A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
      <img class="price-tag" src="./assets/price.png">
      <img class="overlay" src="./assets/overlay.png">
    </section>`;
  }
}

function saveBook(book) {
  if (!savedCovers.includes(book)) {
    savedCovers.push(book);
  }
}

function deleteBook() {
  var clickedId = parseInt(event.target.closest('.mini-cover').id);
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id === clickedId) {
      savedCovers.splice(i, 1);
      displayBooks();
    }
  }
}
