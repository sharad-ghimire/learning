import 'package:flutter/material.dart';

class ProductControl extends StatelessWidget {
  final Function addProducts; //passed function
  ProductControl(this.addProducts);

  @override
  Widget build(BuildContext context) {
    return RaisedButton(
      color: Theme.of(context).primaryColor,
      child: Text('Add Product'),
      onPressed: () {
        addProducts('Sweeeeeets');
      },
    );
  }
}
