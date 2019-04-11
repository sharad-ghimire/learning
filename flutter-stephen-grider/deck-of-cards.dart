void main() {
  var deck = new Deck();
  deck.shuffle();
  print(deck);
  print("---------------------------------");
  print(deck.deal(5));
  print("---------------------------------");
  print(deck);
  deck.removeCard('Dimonds', 'Ace');
  print("---------------------------------");
  print(deck);

}

class Deck {
  List<Card> cards = new List<Card>();
  Deck() {
    var ranks = ["Ace", "Two", "Three", "Four", "Five"];
    var suits = ['Dimonds', 'Hearts', 'Clubs', 'Spades'];

    for (var suit in suits) {
      for (var rank in ranks) {
        cards.add(new Card(suit:suit, rank:rank));
      }
    }
  }
  String toString(){
    return "This is a Desk() instance with the follwoing list of cards:\n ${cards.toString()}";
  }

  void shuffle(){
    cards.shuffle();
  }

  cardsWithSuit(String suit) {
    return cards.where((card) => card.suit == suit);
  }

  deal(int handSize){
    var hand = cards.sublist(0, handSize);
    cards = cards.sublist(handSize);
    return hand;
  }

  removeCard(String suit, String rank){
    cards.removeWhere((item) => item.suit == suit && item.rank==rank);
  }
}

class Card {
  String suit;
  String rank;
  Card({this.suit, this.rank});
  String toString(){
    return "$rank of $suit ";
  }
}