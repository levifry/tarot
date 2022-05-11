const getCards = (numberCards) => {
  
let allCards = 
{
  ar01: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-magician.jpg',
  ar02: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-highpriestess.jpg',
  ar03: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-empress.jpg',
  ar04: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-emperor.jpg',
  ar05: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-hierophant.jpg',
  ar06: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-lovers.jpg',
  ar07: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-chariot.jpg',
  ar08: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-strength.jpg',
  ar09: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-hermit.jpg',
  ar10: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-wheeloffortune.jpg',
  ar11: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-justice.jpg',
  ar12: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-hangedman.jpg',
  ar13: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-death.jpg',
  ar14: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-temperance.jpg',
  ar15: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-devil.jpg',
  ar16: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-tower.jpg',
  ar17: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-star.jpg',
  ar18: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-moon.jpg',
  ar19: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-sun.jpg',
  ar20: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-judgement.jpg',
  ar00: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-fool.jpg',
  ar21: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-world.jpg',
  wapa: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-wands-11.jpg',
  wakn: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-wands-12.jpg',
  waqu: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-wands-13.jpg',
  waki: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-wands-14.jpg',
  waac: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-wands-01.jpg',
  wa02: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-wands-02.jpg',
  wa03: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-wands-03.jpg',
  wa04: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-wands-04.jpg',
  wa05: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-wands-05.jpg',
  wa06: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-wands-06.jpg',
  wa07: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-wands-07.jpg',
  wa08: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-wands-08.jpg',
  wa09: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-wands-09.jpg',
  wa10: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-wands-10.jpg',
  cupa: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-cups-11.jpg',
  cukn: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-cups-12.jpg',
  cuqu: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-cups-13.jpg',
  cuki: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-cups-14.jpg',
  cuac: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-cups-01.jpg',
  cu02: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-cups-02.jpg',
  cu03: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-cups-03.jpg',
  cu04: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-cups-04.jpg',
  cu05: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-cups-05.jpg',
  cu06: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-cups-06.jpg',
  cu07: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-cups-07.jpg',
  cu08: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-cups-08.jpg',
  cu09: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-cups-09.jpg',
  cu10: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-cups-10.jpg',
  pepa: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-pentacles-11.jpg',
  pekn: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-pentacles-12.jpg',
  pequ: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-pentacles-13.jpg',
  peki: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-pentacles-14.jpg',
  peac: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-pentacles-01.jpg',
  pe02: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-pentacles-02.jpg',
  pe03: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-pentacles-03.jpg',
  pe04: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-pentacles-04.jpg',
  pe05: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-pentacles-05.jpg',
  pe06: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-pentacles-06.jpg',
  pe07: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-pentacles-07.jpg',
  pe08: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-pentacles-08.jpg',
  pe09: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-pentacles-09.jpg',
  pe10: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-pentacles-10.jpg',
  swpa: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-swords-11.jpg',
  swkn: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-swords-12.jpg',
  swqu: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-swords-13.jpg',
  swki: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-swords-14.jpg',
  swac: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-swords-01.jpg',
  sw02: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-swords-02.jpg',
  sw03: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-swords-03.jpg',
  sw04: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-swords-04.jpg',
  sw05: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-swords-05.jpg',
  sw06: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-swords-06.jpg',
  sw07: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-swords-07.jpg',
  sw08: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-swords-08.jpg',
  sw09: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-swords-09.jpg',
  sw10: 'https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-swords-10.jpg'
}

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