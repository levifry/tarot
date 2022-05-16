import allCards from './util/allCards.json' assert{ type: 'json' }

const getCards = (numberCards) => {
  return fetch(`https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=${numberCards}`)
  .then(response => response.json())
  .then(data => {
    data.cards.forEach(card => {
      let check = allCards[card.name_short]
      card.img = check
    })
    return data.cards

  });
}
export default getCards