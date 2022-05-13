let count = 1;
const displayCard = (card) => {
  let flipState = Math.round(Math.random());

  let flowReading = document.getElementById('flow_reading');
  // append inside flowReading
  let cardDiv = document.createElement('div');
  cardDiv.className = 'card';
  cardDiv.classList.add(`card${count}`)
  
  //// append inside card div;
  let cardInnerDiv = document.createElement('div');
  cardInnerDiv.className = 'card-inner';
  ////// append inside of card-inner div
  let cardFrontDiv = document.createElement('div');
  cardFrontDiv.className = 'card-front';
  //////// append inside of card-front div
  let cardNameDiv = document.createElement('div');
  cardNameDiv.className = 'card-name';
  let cardImgDiv = document.createElement('div');
  cardImgDiv.className = 'card-image';
  ////// append inside of card-inner div
  let cardBackDiv = document.createElement('div');
  cardBackDiv.className = 'card-back';
  //////// append inside of card-back div
  let cardMeaningDiv = document.createElement('div');
  cardMeaningDiv.className = 'card-meaning';

  let cardDescriptionDiv = document.getElementById('card-description')

  let cardImg = document.createElement('img');
  cardImg.src = card.img;
  cardImgDiv.appendChild(cardImg);
  cardNameDiv.innerHTML = card.name;
  cardMeaningDiv.innerHTML = card.meaning_up;
  cardDescriptionDiv.innerHTML = card.desc;
  

  if (flipState) {
    cardInnerDiv.classList.add('reverse');
    cardMeaningDiv.innerHTML = card.meaning_rev;
  }

  cardBackDiv.appendChild(cardMeaningDiv);
  cardFrontDiv.appendChild(cardImgDiv);
  cardFrontDiv.appendChild(cardNameDiv);
  cardInnerDiv.appendChild(cardFrontDiv);
  cardInnerDiv.appendChild(cardBackDiv);
  cardDiv.appendChild(cardInnerDiv);
  // cardDiv.classList.add('slide-in')
  
  flowReading.appendChild(cardDiv);
  
  
  

  cardDiv.addEventListener('mouseenter', function() {displayDesc(card.desc)});
  cardDiv.addEventListener('mouseleave', function() {hideDesc()});
  
  setTimeout(function() {
    cardDiv.classList.add('slide-in')
  }, 500)
  count++;
}

const displayDesc = function(inputCardDesc) {
  let cardDescriptionDiv = document.getElementById('card-description')
  cardDescriptionDiv.style.display = 'flex';
  cardDescriptionDiv.innerHTML = inputCardDesc;
  // console.log(inputCardDesc);
}

const hideDesc = function() {
  let cardDescriptionDiv = document.getElementById('card-description')
  cardDescriptionDiv.style.display = 'none';
  cardDescriptionDiv.innerHTML = '';
  // console.log(inputCardDesc);
}

export default displayCard