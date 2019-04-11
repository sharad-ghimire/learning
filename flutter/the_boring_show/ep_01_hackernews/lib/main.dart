import 'package:flutter/material.dart';
import 'src/article.dart';
import 'package:url_launcher/url_launcher.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Ep 01 Hacker News',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Ep 01 Hacker News'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  List<Article> _articles = articles;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: ListView(children: _articles.map(_buildItems).toList()),
    );
  }

  Widget _buildItems(Article article) {
    return Padding(
      padding: const EdgeInsets.all(20.0),
      child: ListTile(
        title: new Text(
          article.text,
          style: new TextStyle(fontSize: 80.0),
        ),
        subtitle: new Text("${article.commentsCount} comments"),
        onTap: () async {
          final fakeURL = "http://${article.domain}";
          if (await canLaunch(fakeURL)) {
            await launch("fakeURL");
          } else {
            throw 'Could not launch $fakeURL';
          }
        },
      ),
    );
  }
}
