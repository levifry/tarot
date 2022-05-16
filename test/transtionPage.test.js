import transitionPage from "../src/transtionPage.js"
import fetch from "./mocks/fetch.js"
import getCards from "../src/getCards.js"
import displayCard from "../src/displayCard.js"

describe('When transitionPage is invoked', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id='flow_start'></div><div id="flow_reading"></div><div id="card-description"></div>`

    // jest.spyOn(getCards, 'fetch').mockImplementation(fetch())
    const displaySpy = jest.spyOn(displayCard.prototype, 'handleCursor').mockImplementation(()=>{})
    
    transitionPage(3,"New Title")
  })
  it('should hide the landing page', () => {
    expect(document.getElementById('flow_start').classList[1]).toBe('hide')
  })
  it('should change the spread-name title to the type that was passed in.', () => {
      
  })
  it('should invoke getCards with the amount of cards passed in', () => {
      
  })
  it('should invoke displayCard foreach card returned by getCards give after a set time', ()=> {

  })
})