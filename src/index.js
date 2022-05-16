import transitionPage from './transtionPage'

const removeAllCards = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

let threeCards = document.getElementsByClassName('3-card-spread')
for (let i = 0; i < threeCards.length; i++) {
  threeCards[i].addEventListener("click", function() {
    transitionPage(3, threeCards[i].textContent);
  } )
}

let fourCards = document.getElementById('4-card-spread')
fourCards.addEventListener("click",function() {
  transitionPage(4, fourCards.textContent);
})

document.getElementById('spread-name').addEventListener("click", function() {
  let landingPage = document.getElementById('flow_start');
  let readingPage = document.getElementById('flow_reading');
  landingPage.classList.remove('hide');
  removeAllCards(readingPage);
})

