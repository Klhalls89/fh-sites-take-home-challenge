
class PokerHand {
  constructor(hand) {
    this.hand = hand
    this.state = {rank: ''}
  }

  getRank() {
    this.getCards(this.hand)
    if (this.state.rank !== '') {
      return this.state.rank
    }
  }

  getCards = (hand) => {
      let suits = []
      let cardValues = []
      const faceCards = {
        A: '1',
        K: '13',
        Q: '12',
        J: '11'
      }

      let splitUpCards = hand.split(' ')
        splitUpCards.forEach((card) => {
        card = card.split('')
        let suit = card[card.length-1]
        suits.push(suit)
        let cardValue;
        if (card.length === 2) {
          if (!Object.keys(faceCards).includes(card[0])) {
            cardValue = card[0]
            cardValues.push(parseInt(cardValue))
          } else {
            cardValue = faceCards[(card[0])]
            cardValues.push(parseInt(cardValue))
          }
        } else {
          card[0] += card[1]
          cardValue = card[0]
          cardValues.push(parseInt(cardValue))
        }
      })
      if (suits.length === 5 && cardValues.length === 5) {
        this.cardsCheck(suits, cardValues.sort())
      }
  }

    cardsCheck = (suits, cardValues) => {
      const isFlush = suits.every(suit => suit === suits[0])

      const isStraight = cardValues.every((cardValue, i) => {
        if (i === 0) {
          return true;
        }
        if (cardValue - 1 === cardValues[i-1]){
          return true
        } else {
          return false
        }
      })

      const hasPair = cardValues.reduce((acc, cardValue) => {
        const filteredCardValues = cardValues.filter(val => val === cardValue)
        if (filteredCardValues.length === 2) {
          return true;
        } else {
          return acc;
        }
      }, true);


    const hasThreeOfAKind = cardValues.reduce((acc, cardValue) => {
      const filteredCardValues = cardValues.filter(val => val === cardValue)
      if (filteredCardValues.length === 3) {
        return true;
      } else {
        return acc;
      }
    }, false);

    const hasFourOfAKind = cardValues.reduce((acc, cardValue) => {
      const filteredCardValues = cardValues.filter(val => val === cardValue)
      if (filteredCardValues.length === 4) {
        return true;
      } else {
        return acc;
      }
    }, false);

   const isRoyalFlush = "1,10,11,12,13"

   const hasTwoPair = () => {
    const twoPairs = []
    cardValues.forEach(cardValue => {
      const filteredCardValues = cardValues.filter(val => val === cardValue)
      if(filteredCardValues.length == 2){
        twoPairs.push(filteredCardValues)
      }
    })
     return twoPairs.length === 4
   }

    if (cardValues.toString() == isRoyalFlush && isFlush) {
        this.state.rank = "Royal Flush";
    } else if (isFlush && isStraight) {
        this.state.rank = "Straight Flush";
    } else if (hasFourOfAKind) {
         this.state.rank = "Four of a Kind";
    } else if (hasThreeOfAKind && hasPair) {
         this.state.rank = "Full House";
    } else if (isFlush) {
         this.state.rank = "Flush";
    } else if (isStraight) {
         this.state.rank = "Straight";
    } else if (hasThreeOfAKind) {
         this.state.rank = "Three of a Kind";
    } else if (hasTwoPair()) {
         this.state.rank = "Two Pair";
    } else if (hasPair) {
        this.state.rank = "One Pair";
    } else {
        this.state.rank = "High Card";
    }
  }
}

module.exports = PokerHand;
