import 'package:flutter/material.dart';
import './product_manager.dart';

void main() => runApp(App());

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
          appBar: AppBar(
            title: Text("Easy List"),
          ),
          body: ProductManager("s")),
    );
  }
}
