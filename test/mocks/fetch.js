global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve( {cards: [
      {
        name: 'Knight of Swords',
        name_short: 'swkn',
        value: 'knight',
        value_int: 12,
        suit: 'swords',
        type: 'minor',
        meaning_up: 'Skill, bravery, capacity, defence, address, enmity, wrath, war, destruction, opposition, resistance, ruin. There is therefore a sense in which the card signifies death, but it carries this meaning only in its proximity to other cards of fatality.',
        meaning_rev: 'Imprudence, incapacity, extravagance.',
        desc: 'He is riding in full course, as if scattering his enemies. In the design he is really a prototypical hero of romantic chivalry. He might almost be Galahad, whose sword is swift and sure because he is clean of heart.'
      },
      {
        name: 'Four of Cups',
        name_short: 'cu04',
        value: 'four',
        value_int: 4,
        suit: 'cups',
        type: 'minor',
        meaning_up: 'Weariness, disgust, aversion, imaginary vexations, as if the wine of this world had caused satiety only; another wine, as if a fairy gift, is now offered the wastrel, but he sees no consolation therein. This is also a card of blended pleasure.',
        meaning_rev: 'Novelty, presage, new instruction, new relations.',
        desc: 'A young man is seated under a tree and contemplates three cups set on the grass before him; an arm issuing from a cloud offers him another cup. His expression notwithstanding is one of discontent with his environment.'
      },
      {
        name: 'Queen of Swords',
        name_short: 'swqu',
        value: 'queen',
        value_int: 13,
        suit: 'swords',
        type: 'minor',
        meaning_up: 'Widowhood, female sadness and embarrassment, absence, sterility, mourning, privation, separation.',
        meaning_rev: 'Malice, bigotry, artifice, prudery, bale, deceit.',
        desc: 'Her right hand raises the weapon vertically and the hilt rests on an arm of her royal chair the left hand is extended, the arm raised her countenance is severe but chastened; it suggests familiarity with sorrow. It does not represent mercy, and, her sword notwithstanding, she is scarcely a symbol of power.'
      }
    ]} ),
  })
);

export default fetch