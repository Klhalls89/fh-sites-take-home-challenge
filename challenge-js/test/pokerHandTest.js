var assert = require('assert');
var PokerHand = require('../pokerHand.js');

describe('Rank a Royal Flush', function() {
  var hand = new PokerHand('As Ks Qs Js 10s');
  it('Return royal flush when hand given', function() {
    assert.equal(hand.getRank(), 'Royal Flush');
  });
});

describe('Rank a Straight Flush', function() {
  var hand = new PokerHand('5s 6s 7s 8s 9s');
  it('Return straight flush when hand given', function() {
    assert.equal(hand.getRank(), 'Straight Flush');
  });
});

describe('Rank a Four of a Kind', function() {
  var hand = new PokerHand('3c 3s 3d 3h 6h');
  it('Return four of a kind when hand given', function() {
    assert.equal(hand.getRank(), 'Four of a Kind');
  });
});

describe('Rank a Full House', function() {
  var hand = new PokerHand('3c 3s 3d 6s 6h');
  it('Return a full house when hand given', function() {
    assert.equal(hand.getRank(), 'Full House');
  });
});

describe('Rank A Flush', function() {
  var hand = new PokerHand('Kh Qh 6h 2h 9h');
  it('Return flush when hand given', function() {
    assert.equal(hand.getRank(), 'Flush');
  });
});

describe('Rank A Straight', function() {
  var hand = new PokerHand('7c 6s 5s 4h 3h');
  it('Return a straight when hand given', function() {
    assert.equal(hand.getRank(), 'Straight');
  });
});

describe('Rank A Three of a Kind', function() {
  var hand = new PokerHand('3c 3s 3d Ah 6h');
  it('Return three of a kind when hand given', function() {
    assert.equal(hand.getRank(), 'Three of a Kind');
  });
});

describe('Rank Two Pair', function() {
  var hand = new PokerHand('Kh Kc 3s 3h 2d');
  it('Return two pair when hand given', function() {
    assert.equal(hand.getRank(), 'Two Pair');
  });
});

describe('Rank a Pair', function() {
  var hand = new PokerHand('Ah As 10c 7d 6s');
  it('Return one pair when hand given', function() {
    assert.equal(hand.getRank(), 'One Pair');
  });
});

describe('Rank a High Card', function() {
  var hand = new PokerHand('6h 3s 10c 7d 5s');
  it('Return high card hand given', function() {
    assert.equal(hand.getRank(), 'High Card');
  });
});
