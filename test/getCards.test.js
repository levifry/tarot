import getCards from "../src/getCards.js";
import fetch from "./mocks/fetch.js"


describe('getCards Test', () => {
  test('getCards returns the user specified number of cards', () => {
    getCards(3).then((check) => 
      expect(check.length).toBe(3)
    );
  })
  test('getCards should add in the img property to each card object', () => {
    getCards(3).then((check) => 
      expect(check[0].hasOwnProperty('img')).toBe(true)
    );
  })
})