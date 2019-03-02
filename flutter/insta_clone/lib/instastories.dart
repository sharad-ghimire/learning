import 'package:flutter/material.dart';

class InstaStories extends StatelessWidget {
  final topText = Row(
    mainAxisAlignment: MainAxisAlignment.spaceBetween,
    children: <Widget>[
      Text(
        "Stories",
        style: TextStyle(fontWeight: FontWeight.bold),
      ),
      Row(
        children: <Widget>[
          new Icon(Icons.play_arrow),
          Text(
            "Watch All",
            style: TextStyle(fontWeight: FontWeight.bold),
          )
        ],
      )
    ],
  );

  final stories = Expanded(
    child: ListView.builder(
      scrollDirection: Axis.horizontal,
      itemCount: 5,
      itemBuilder: (BuildContext context, int index) => Stack(
            alignment: Alignment.bottomRight,
            children: <Widget>[
              Container(
                width: 60.0,
                height: 60.0,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  image: DecorationImage(
                    fit: BoxFit.fill,
                    image: NetworkImage(
                        "https://avatars3.githubusercontent.com/u/34888940?s=460&v=4"),
                  ),
                ),
                margin: const EdgeInsets.symmetric(horizontal: 8.0),
              ),
              index == 0
                  ? Positioned(
                      right: 10.0,
                      child: CircleAvatar(
                        backgroundColor: Colors.blue,
                        radius: 10.0,
                        child: Icon(
                          Icons.add,
                          size: 14.0,
                        ),
                      ),
                    )
                  : Container()
            ],
          ),
    ),
  );

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        mainAxisAlignment: MainAxisAlignment.start,
        children: <Widget>[topText, stories],
      ),
    );
  }
}
