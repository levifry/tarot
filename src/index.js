import transitionPage from './transtionPage.js';

const CurrentVersionApp = '1.0.3';
console.log(`Verions: ${CurrentVersionApp}`);

let threeCards = document.getElementsByClassName('3-card-spread');

for (let i = 0; i < threeCards.length; i++) {
  threeCards[i].addEventListener("click", function() {
    transitionPage(3, threeCards[i].textContent);
  } )
}

let fourCards = document.getElementById('4-card-spread')
fourCards.addEventListener("click",function() {
  transitionPage(4, fourCards.textContent);
});

document.getElementById('spread-name').addEventListener("click", function() {
  let landingPage = document.getElementById('flow_start');
  let readingPage = document.getElementById('flow_reading');
  let header = document.getElementById('spread-name');
  header.classList.add('hide');
  landingPage.classList.remove('hide');

  removeAllCards(readingPage);
});

const removeAllCards = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}