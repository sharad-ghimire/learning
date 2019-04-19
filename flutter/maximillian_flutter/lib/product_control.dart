import 'package:flutter/material.dart';

class ProductControl extends StatelessWidget {
  final Function addProducts;
  ProductControl({this.addProducts});

  @override
  Widget build(BuildContext context) {
    return RaisedButton(
      padding: EdgeInsets.all(10),
      child: Text("Add Product"),
      onPressed: () {
        addProducts({
          "title": "Choc",
          "image": "assets/food.png",
        });
      },
    );
  }
}
