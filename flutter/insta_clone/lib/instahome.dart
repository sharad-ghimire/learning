import 'package:flutter/material.dart';
import 'package:insta_clone/instabody.dart';

class InstaHome extends StatelessWidget {
  final topBar = new AppBar(
    backgroundColor: Color(0xfff8faf8),
    centerTitle: true,
    elevation: 1.0,
    leading: new Icon(Icons.camera_alt),
    title: SizedBox(
      height: 35.0,
      child: Image.asset("assets/images/insta_logo.png"),
    ),
    actions: <Widget>[
      Padding(
          padding: const EdgeInsets.only(right: 12.0), child: Icon(Icons.tv)),
      Padding(
          padding: const EdgeInsets.only(right: 12.0), child: Icon(Icons.send))
    ],
  );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: topBar,
      body: new InstaBody(),
      bottomNavigationBar: Container(
        color: Colors.green,
        height: 50.0,
        alignment: Alignment.center,
        child: BottomAppBar(
          child: new Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: bottomNavigationIcons(),
          ),
        ),
      ),
    );
  }

  List<Widget> bottomNavigationIcons() {
    List<Widget> bottomNavigation = List<Widget>();
    bottomNavigation.add(IconButton(
      icon: Icon(Icons.home),
      onPressed: () {},
    ));
    bottomNavigation.add(IconButton(
      icon: Icon(Icons.search),
      onPressed: null,
    ));
    bottomNavigation.add(IconButton(
      icon: Icon(Icons.add_box),
      onPressed: null,
    ));
    bottomNavigation.add(IconButton(
      icon: Icon(Icons.favorite),
      onPressed: null,
    ));
    bottomNavigation.add(IconButton(
      icon: Icon(Icons.account_box),
      onPressed: null,
    ));

    return bottomNavigation;
  }
}
