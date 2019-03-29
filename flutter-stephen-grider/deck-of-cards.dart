void main() {
  new Deck();
}

class Deck {
  List<Card> cards = new List<Card>();
  Deck() {
    var ranks = ["Ace", "Two", "Three", "Four", "Five"];
    var suits = ['Dimonds', 'Hearts', 'Clubs', 'Spade'];

    for (var suit in suits) {
      for (var rank in ranks) {
        var card = new Card(suit, rank);
        cards.add(card);
      }
    }
  }
}

class Card {
  String suit;
  String rank;
  Card(this.suit, this.rank);
}