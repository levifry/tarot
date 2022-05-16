import displayCard from "../src/displayCard.js";
import cardObjArr from "./mocks/cardObjArr.js"


beforeAll(() => {
  let num = 0
  document.body.innerHTML = `<div id="flow_reading"></div><div id="card-description"></div>`
  cardObjArr.forEach((cards) => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5 - num);
    displayCard(cards);
    num += .1 
  })
})

afterAll(()=> {
  jest.spyOn(global.Math, 'random').mockRestore();
})

describe('displayCard tests', () => {
  test('displayCard should display the correct amount of cards', () => {
    expect(document.getElementsByClassName('card').length).toBe(3);
  })
  test('displayCard should have the correct div format for each card', () => {
    expect(document.getElementsByClassName('card')[0].innerHTML).toEqual('<div class="card-inner reverse"><div class="card-front"><div class="card-image"><img src="https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-fool.jpg"></div><div class="card-name">The Fool</div></div><div class="card-back"><div class="card-meaning">Negligence, absence, distribution, carelessness, apathy, nullity, vanity.</div></div></div>')

  })
  test('displayCard should hide some divs until user hover actions occurs', () => {
    expect(false)
  })
})