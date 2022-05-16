let hoveredDesc = false;
let hoveredCard = false;
let currentCard;
let currentCardClass;
let touched = false;

const handleCursor = (cardDiv, cardDescriptionDiv, card) => {
    cardDiv.addEventListener('mouseenter', function() {
    hoveredCard = true;
    currentCardClass = cardDiv.classList[1];
    currentCard = document.getElementsByClassName(currentCardClass)[0]; 
    currentCard.classList.add('hover-z');
    currentCard.children[0].classList.add('hover');
    displayDesc(card.desc);
  });


  let cardInnerDiv = cardDiv.children[0];

  cardInnerDiv.addEventListener('click', function() {
    if (touched) {
      null; 
    } else {
      if (cardInnerDiv.classList.contains('active')) {
        cardInnerDiv.classList.remove('active');
      } else {
        cardInnerDiv.classList.add('active');
      }
    }
  });

  cardDiv.addEventListener('touchstart', function() {
    // if (touched) {
    //   hoveredCard = false;
    //   removeHover(3000);
    //   cardInnerDiv.classList.remove('active');
    // } else {
    //   hoveredCard = true;
    //   currentCardClass = cardDiv.classList[1];
    //   currentCard = document.getElementsByClassName(currentCardClass)[0]; 
    //   currentCard.classList.add('hover-z');
    //   currentCard.children[0].classList.add('hover');
    //   displayDesc(card.desc);
    // }
    currentCardClass = cardDiv.classList[1];
    currentCard = document.getElementsByClassName(currentCardClass)[0];
    if (!currentCard.classList.contains('hover')) {
      console.log('first condition',currentCard.classList);
      touched = true;
      hoveredCard = true;
      currentCard.classList.add('hover-z', 'hover');
    } else if (currentCard.classList.contains('hover', 'hover-z') && !(currentCard.classList.contains('active'))) {
      console.log('second condition',currentCard.classList);
      currentCard.classList.add('active');
    } else {
      console.log('else condition',currentCard.classList);
      hoveredCard = false;
      touched = false;
      currentCard.classList.remove('active', 'hover', 'hover-z')
    }

    
    // hoveredCard = true;
    // currentCardClass = cardDiv.classList[1];
    // currentCard = document.getElementsByClassName(currentCardClass)[0]; 
    // currentCard.classList.add('hover-z');
    // currentCard.children[0].classList.add('hover');
    // displayDesc(card.desc);

    // if (cardInnerDiv.classList.contains('active')) {
    //   cardInnerDiv.classList.remove('active');
    // } else {
    //   cardInnerDiv.classList.add('active');
    // }


  })

  // cardDiv.addEventListener('touchend', function() {
  //   hoveredCard = false;
  //   // removeHover(100);
  //   currentCard.classList.remove('hover-z');
  //   currentCard.children[0].classList.remove('hover');
  //   cardInnerDiv.classList.remove('active');
  //   touched = false;
  // })

  cardDiv.addEventListener('mouseleave', function() {
    hoveredCard = false;
    removeHover(3000);
    cardInnerDiv.classList.remove('active');
  });

  cardDescriptionDiv.addEventListener('mouseenter', function() {
    hoveredDesc = true;
    currentCard.classList.add('hover-z');
    currentCard.children[0].classList.add('hover');
    
  })
  
  cardDescriptionDiv.addEventListener('mouseleave', function() {
    hoveredDesc = false;
    removeHover(400);
    cardInnerDiv.classList.remove('active');
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
  let cardDescriptionDiv = document.getElementById('card-description');
  cardDescriptionDiv.style.display = 'flex';
  cardDescriptionDiv.innerHTML = inputCardDesc;
}

const hideDesc = function() {
  let cardDescriptionDiv = document.getElementById('card-description');
    cardDescriptionDiv.style.display = 'none';
    cardDescriptionDiv.innerHTML = '';
}
export default handleCursor;