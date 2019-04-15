import 'package:flutter/material.dart';

class Products extends StatelessWidget {
  final List<String> products; // the value of product never change inside here
  Products(this.products);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: products
          .map((element) => Card(
                child: Column(
                  children: <Widget>[
                    Image.asset("assets/food.png"),
                    Text(element)
                  ],
                ),
              ))
          .toList(),
    );
  }
}
