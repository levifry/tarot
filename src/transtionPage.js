import getCards from './getCards'
import displayCard from './displayCard'

const transitionPage = async (amount, title)  => {
  document.getElementById('spread-name').innerHTML  = title

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

export default transitionPage