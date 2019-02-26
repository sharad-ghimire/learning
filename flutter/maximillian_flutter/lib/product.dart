import 'package:flutter/material.dart';

class Products extends StatelessWidget {
  final List<String> products;

  Products([this.products = const []]); //Constructor with defaualt postional argument (parameter)

  @override
  Widget build(BuildContext context) {
    return Column(
      children: products.map(
        (element) {
          var image = Image.asset('assets/food.png');
          return Card(
            child: Column(
              children: <Widget>[image, Text(element)],
            ),
          );
        },
      ).toList(),
    );
  }
}
