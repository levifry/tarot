let hoveredDesc = false;
let hoveredCard = false;
let currentCard;
let currentCardClass;

const handleCursor = (cardDiv, cardDescriptionDiv, card) => {
    cardDiv.addEventListener('mouseenter', function() {
    hoveredCard = true;
    currentCardClass = cardDiv.classList[1];
    currentCard = document.getElementsByClassName(currentCardClass)[0]; 
    currentCard.classList.add('hover-z');
    currentCard.children[0].classList.add('hover');
    displayDesc(card.desc)
  });

  cardDiv.addEventListener('mouseleave', function() {
    hoveredCard = false;
    removeHover(3000);
  });

  cardDescriptionDiv.addEventListener('mouseenter', function() {
    hoveredDesc = true;
    currentCard.classList.add('hover-z');
    currentCard.children[0].classList.add('hover');
    
  })
  
  cardDescriptionDiv.addEventListener('mouseleave', function() {
    hoveredDesc = false;
    removeHover(400);
  });
  
}

const removeHover = (time) => {

  currentCard.classList.remove('hover-z');
  currentCard.children[0].classList.remove('hover');
  window.setTimeout(function() {
    if (!hoveredCard && !hoveredDesc) {
      hideDesc();
    }
  }, time);
}

const displayDesc = function(inputCardDesc) {
  let cardDescriptionDiv = document.getElementById('card-description')
  cardDescriptionDiv.style.display = 'flex';
  cardDescriptionDiv.innerHTML = inputCardDesc;
}

const hideDesc = function() {
  let cardDescriptionDiv = document.getElementById('card-description')
    cardDescriptionDiv.style.display = 'none';
    cardDescriptionDiv.innerHTML = '';
}
export default handleCursor