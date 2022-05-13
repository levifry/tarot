import displayCard from './displayCard'
import getCards from './getCards'
import cardObjArr from "./test/mocks/cardObjArr";

getCards(12).then((cards) => {
  cards.forEach(function(card, index, collection) {
    setTimeout(function() {
      displayCard(card)
      window.scrollTo(0,document.body.scrollHeight)
    }, index * 150);
  })
})

let transitionPage = () => {
  console.log('clicked')
  let landingPage = document.getElementById('flow_start');
  let readingPage = document.getElementById('flow_reading');
  
  landingPage.classList.add('hide');
  let btn = document.getElementById('btn')
  //btn.setAttribute('disabled', '')
}
document.getElementById('btn').addEventListener("click", transitionPage)