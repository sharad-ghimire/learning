import 'package:flutter/material.dart';
import './pages/product.dart';

class Products extends StatelessWidget {
  final List<Map<String, String>> products;
  // the value of product never change inside here

  Products([this.products = const []]);

  Widget _buildProductItem(BuildContext context, int index) {
    return Card(
      child: Column(
        children: <Widget>[
          Image.asset(products[index]["image"]),
          Text(products[index]["title"]),
          ButtonBar(
            alignment: MainAxisAlignment.center,
            children: <Widget>[
              FlatButton(
                child: Text("Details"),
                onPressed: () => Navigator.push(context, MaterialPageRoute(
                      builder: (BuildContext context) {
                        return ProductPage(
                            products[index]["title"], products[index]["image"]);
                      },
                    )),
              )
            ],
          )
        ],
      ),
    );
  }

  Widget _buildProductList() {
    // return products.length > 0
    //     ? ListView.builder(
    //         itemBuilder: _buildProductItem,
    //         itemCount: products.length,
    //       )
    //     : Text("Add some Items");
    Widget productCard;
    if (products.length > 0) {
      productCard = ListView.builder(
        itemBuilder: _buildProductItem,
        itemCount: products.length,
      );
    } else {
      return Container();
    }
    return productCard;
  }

  @override
  Widget build(BuildContext context) => _buildProductList();
}
