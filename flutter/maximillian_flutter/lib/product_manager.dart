import 'package:flutter/material.dart';

import './product.dart';
import './product_control.dart';

class ProductManager extends StatefulWidget {
  final String startingProduct;
  // Should be a immutable class and data should be changed in State Class below

  ProductManager({this.startingProduct = "Sweet Default"});
  //Constructor with default named argument

  @override
  State<StatefulWidget> createState() {
    return _ProductManagerState();
  }
}

class _ProductManagerState extends State<ProductManager> {
  List<String> _products = []; // _ only used in this file (class)

  // Using startingProduct
  @override
  void initState() {
    // runs before build() runs
    _products.add(widget.startingProduct);
    super.initState(); //super refershs to the base class
  }

  void _addProducts(String product) {
    setState(() {
      _products.add(product);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(children: <Widget>[
      Container(
          margin: EdgeInsets.all(10.0), child: ProductControl(_addProducts)), //pass the ref of the function
      Products(_products)
    ]);
  }
}
