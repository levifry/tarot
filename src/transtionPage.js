import getCards from './getCards.js';
import displayCard from './displayCard.js';

const transitionPage = async (amount, title)  => {
  let landingPage = document.getElementById('flow_start');
  let readingPage = document.getElementById('flow_reading');
  let spacer = document.createElement('span');
  
  let header = document.getElementById('spread-name');

  header.classList.remove('hide');
  header.innerHTML  = title;
  


  spacer.className = 'spacer';
  landingPage.classList.add('hide');
  readingPage.appendChild(spacer);

  const cards = await getCards(amount);
  cards.forEach(function(card, index, collection) {
    setTimeout(function() {
      displayCard(card);
    }, index * 150);
  });
}

export default transitionPage;