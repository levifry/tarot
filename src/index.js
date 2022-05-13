import displayCard from './displayCard'
import getCards from './getCards'


// const cards = await getCards(3)

// cards.forEach(function(card, index, collection) {
//     setTimeout(function() {
//       displayCard(card)
//     }, index * 150);
//   })

let landingPage = document.getElementById('flow_start');
const transitionPage = async (amount)  => {
  let landingPage = document.getElementById('flow_start');
  let readingPage = document.getElementById('flow_reading');
  let spacer = document.createElement('span')
  spacer.className = 'spacer';

  
  landingPage.classList.add('hide');
  let btn = document.getElementById('3-card-spread')
  
  const cards = await getCards(amount);
  readingPage.appendChild(spacer);
  cards.forEach(function(card, index, collection) {
    setTimeout(function() {
      displayCard(card)
    }, index * 150);
  })
}

const removeAllCards = (parent) => {

  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

let threeCards = document.getElementsByClassName('3-card-spread')
console.log(threeCards.length)
for (let i = 0; i < threeCards.length; i++) {
//   threeCards[i].addEventListener("click", function() {
//     transitionPage(3);
//   } )
  console.log(threeCards[i]);
}

document.getElementById('4-card-spread').addEventListener("click",function() {
  transitionPage(4);
})
// document.getElementsByClassName('3-card-spread').addEventListener("click",function() {
//   transitionPage(8);
// })
document.getElementById('spread-name').addEventListener("click", function() {
  let landingPage = document.getElementById('flow_start');
  let readingPage = document.getElementById('flow_reading');
  landingPage.classList.remove('hide');
  removeAllCards(readingPage);
})