import 'package:flutter/material.dart';

import './product.dart';

class ProductManager extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _ProductManager();
  }
}

class _ProductManager extends State<ProductManager> {
  List<String> _products = ['Food Tester'];

  @override
  Widget build(BuildContext context) {
    return Column(children: <Widget>[
      Container(
        margin: EdgeInsets.all(10.0),
        child: RaisedButton(
          child: Text('Add Product'),
          onPressed: () {
            setState(() {
              _products.add('Advanced food tester');
            });
          },
        ),
      ),
      Products(_products)
    ]);
  }
}
