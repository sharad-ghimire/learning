import 'package:flutter/material.dart';
import 'package:insta_clone/instastories.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class InstaList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var deviceSize = MediaQuery.of(context).size;
    return ListView.builder(
      itemCount: 5,
      itemBuilder: (BuildContext context, int index) => index == 0
          ? new SizedBox(
              child: new InstaStories(),
              height: deviceSize.height * 0.16,
            )
          : Column(
              mainAxisAlignment: MainAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: <Widget>[
                // First Row
                Padding(
                  padding: const EdgeInsets.fromLTRB(16.0, 16.0, 8.0, 16.0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: <Widget>[
                      Row(
                        children: <Widget>[
                          Container(
                            height: 40.0,
                            width: 40.0,
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              image: DecorationImage(
                                fit: BoxFit.fill,
                                image: NetworkImage(
                                    "https://i.pinimg.com/originals/78/5b/29/785b29af19d310d012af4d299448eacd.jpg"),
                              ),
                            ),
                          ),
                          SizedBox(
                            width: 10.0,
                          ),
                          Text(
                            "Bruno Mars",
                            style: TextStyle(fontWeight: FontWeight.bold),
                          ),
                        ],
                      ),
                      IconButton(
                        icon: Icon(Icons.more_vert),
                        onPressed: null,
                      )
                    ],
                  ),
                ),
                // Second Row
                Flexible(
                  fit: FlexFit.loose,
                  child: Image.network(
                    "https://www.ugfreshdaily.com/wp-content/uploads/2019/02/Bruno-Mars-Release-%E2%80%98Please-Me%E2%80%99-Music-Video-ft.-Cardi-B-DOWNLOAD-Mp3-HERE-731x405.jpg",
                    fit: BoxFit.cover,
                  ),
                ),
                // 3rd Row
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: <Widget>[
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: <Widget>[
                          new Icon(FontAwesomeIcons.heart),
                          new SizedBox(
                            width: 16.0,
                          ),
                          new Icon(FontAwesomeIcons.comment),
                          new SizedBox(
                            width: 16.0,
                          ),
                          new Icon(FontAwesomeIcons.heart),
                          new SizedBox(
                            width: 16.0,
                          ),
                          new Icon(FontAwesomeIcons.paperPlane),
                          new SizedBox(
                            width: 16.0,
                          ),
                        ],
                      ),
                      new Icon(FontAwesomeIcons.bookmark),
                    ],
                  ),
                ),

                // 4th Row
                Padding(
                  padding: const EdgeInsets.fromLTRB(16.0, 16.0, 16.0, 5.0),
                  child: Text(
                    "Liked by sharadghimire and 1,342 others",
                    style: TextStyle(fontWeight: FontWeight.bold),
                  ),
                ),

                // 5th Row
                Padding(
                  padding: const EdgeInsets.fromLTRB(16.0, 16.0, 0.0, 8.0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: <Widget>[
                      Container(
                        height: 30.0,
                        width: 30.0,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          image: DecorationImage(
                            fit: BoxFit.fill,
                            image: NetworkImage(
                                "https://i.pinimg.com/originals/78/5b/29/785b29af19d310d012af4d299448eacd.jpg"),
                          ),
                        ),
                      ),
                      SizedBox(
                        width: 10.0,
                      ),
                      Expanded(
                        child: TextField(
                          decoration: InputDecoration(
                              border: InputBorder.none,
                              hintText: "Add a comment ..."),
                        ),
                      )
                    ],
                  ),
                ),

                // 6th Row
                Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 16.0),
                    child: Text(
                      "23 mins ago",
                      style: TextStyle(color: Colors.grey),
                    )),
              ],
            ),
    );
  }
}
