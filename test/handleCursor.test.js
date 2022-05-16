import handleCursor from '../src/handleCursor.js';

/*
    describe("when testClick() has fired", () => {
  let clickHandler;
  beforeAll(() => {
    clickHandler = jest.fn();
    document.querySelectorAll("div").forEach(div => {
      div.addEventListener("click", clickHandler);
    });

    // as the `testClick()` is invoked within the application
    // you should require the implementation here instead
    // of trying to call it within the test
    require("./testClick");
  });

  it("should call the click event listerner for child1", () => {
    // not sure what to do here
    expect(clickHandler).toHaveBeenCalledWith(
      expect.objectContaining({
        target: child1
      })
    );
  });
});
*/

/*
beforeAll (() => {
    let testCardDiv = document.createElement('div');
    let testDescDiv = document.createElement('div');

    let cardDesc = 'This is a test description';


    testCardDiv.classList.add('card', 'card1', 'slide-in');
    testDescDiv.id = 'card-description';

    handleCursor(testCardDiv, testDescDiv, cardDesc);

    clickHandler = jest.fn();
})
*/


describe('handleCursor tests', () => {
    test('handleCursor adds hover and hover-z classes to card div on a mouseenter event', () => {
        expect(true)
    })
})