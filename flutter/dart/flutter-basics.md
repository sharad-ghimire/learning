# Basics

### Hello World

```dart
import 'package:flutter/material.dart';

void main(){
  runApp(new MaterialApp(
    home: new MyApp(),
  ));
}

class MyApp extends StatefulWidget {
  @override
  _State createState() => _State();
}

class _State extends State<MyApp> {
  @override
  Widget build(BuildContext context){
    return new Scaffold(
      appBar: new AppBar( title: new Text('Name of App')),
      body: new Container (
        padding: new EdgeInsert.all(32.0),
        child: new Center(
          child: new Coloum(
            children: <Widget>[
              new Text('Hello World')
            ]
          )
        )
      )
    )
  }
}

```

### Buttons

```dart
class _State extends State<MyApp> {
  String _value = 'Hello';

  void _onPressed(String value) {
    setState((){
      _value = value;
    });
  }

  void _add(){
    setState(() => value++);
  }

  void _sub(){
    setState(() => value--);
  }

  @override
  Widget build(BuildContext context){
    return new Scaffold(
      appBar: new AppBar( title: new Text('Name of App')),
      body: new Container (
        padding: new EdgeInsert.all(32.0),
        child: new Center(
          child: new Coloum(
            children: <Widget>[
              new Text(_value),
              new RaisedButton(
                onPressed: () => _onPressed("Hello"),
                child: new Text('Click!')
              ),
              new FlatButton(
                onPressed: () => _onPressed('Hey!'),
                child: new Text('Flaty Click')
              ),
              new IconButton(
                icon: new Icon(Icons.add),
                onPressed: _add
              ),
              new IconButton(
                icon: new Icon(Icons.remove),
                onPressed: _sub
              ),
            ]
          )
        )
      )
    )
  }
}

```

### Input Widgets

```dart
import 'dart:async'; // Aysnc for date picker

class _State extends State<MyApp> {

  // For Text Field
  String _value = '';
  void _onChange(String value) => setState(() => value = 'Changed: $value');

  void _onSubmit(String value) => setState(() => value = 'Submit :$value');

  // For checkbox
  bool _value1 = false;
  bool _value2 = false;

  void _value1Changed(bool value) => setState(() => _value1 = value);
  void _value2Changed(bool value) => setState(() => _value2 = value);

  // Initial values for Radio
  int _value1 = 0;
  int _value2 = 0;

  void _setValue1(int value) => setState(() => _value1 = value);
  void _setValue2(int value) => setState(() => _value2 = value);

  // Inital Values for Switches
  bool _value1 = false;
  bool _value2 = false;

  void _onChanged1(bool value) => setState(() => _value1 = value);
  void _onChanged2(bool value) => setState(() => _value2 = value);

  // For slider
  double _value = 0;

  void _setValue(double value) => setState(() => _value = value);

  // For date picker
  String _value = '';
  Future _selectDate() async {
    DateTime picked = await showDatePicker(
      context: context,
      initialDate: new DateTime.now(),
      firstDate: new DateTime(2016),
      lastDate: new DateTime(2020),
    );
    if(picked != null) setState(() => _value = picked.toString());
  }


  @override
  Widget build(BuildContext context){
    ...
    new Text(_value),

    // Text Field
    new TextField(
      decoration: new InputDecoration(
        labelText: 'Hello',
        hintText: 'Hint',
        icon: new Icon(Icons.people)
      ),
      autocorrect: true,
      autofocus: true,
      keyboardType: TextInputType.number,
      onChanged: _onChanged,
      onSubmit: _onSubmit
    ),

    // Check box
    new Checkbox(
      value: _value1,
      onChanged: _value1Changed
    ),
    new CheckboxListTile(
      value: _value2,
      onChanged: _value2Changed,
      title: new Text('Hello'),  // we can put any widget here
      controlAffinity: ListTileControlAffinity.leading,
      subtitle: new Text('Subtitle'),
      secondary: new Icon(Icons.archive),
      activeColor: Colors.red,
    ),

    // Radios
    new Radio(
      value: i,
      groupValue: _value1,
      onChanged: _setValue1
    ),
    new RadioListTile(
      value: i,
      groupValue: _value2,
      onChanged: _setValue2,
      activeColor: Colors.green,
      controlAffinity: ListTileControlAffinity.trailing,
      title: new Text("Item $i");
      subtitle: new Text("Sub title");
    ),

    // Switch
    new Switch(value: _value1, onChanged: _onChanged1),
    new SwitchListTile(
      value: _value2,
      onChanged: _onChanged2,
      title: new Text(
        'Hello World',
        style: new TextStyle(
          fontWeight: FontWeight.bold,
          color: Colors.red
        ),
      ),
    )

    // Slider
    new Text('Value ${(_value * 100).round()}'),
    new Slider(value: _value, onChanged: _setValue),

    // Date Picker
    // import async package for asynchronous operation
    new Text(_value),
    new RaisedButton(onPressed: _selectDate, child: new Text('Pick Date')),

  }
}

```

### Scaffold

**AppBar**

```dart
void main(){
  int _value = 0;
  void _add() => setState(() => _value++);
  void _remove() => setState(() => _value--);

  Widget build(BuilContext context){
    return new Scaffold(
      appBar: new AppBar(
        title: Text('Name of the App'),
        backgroundColor: Colors.red,
        actions: <Widget> [
          new IconButton( icon: Icon(Icons.add), onPressed: _add),
          new IconButton( icon: Icon(Icons.remove), onPressed: _remove),
        ],
      ),
      ...
      new Text(
        _value.toString(),
        style: new  TextStyle(
          fontWeight: FontWeight.bold,
          fontSize: 37.0
        )
      )
    )
  }
}
```

**FLoating Action Button**

```dart
void main(){
  int _value = '';
  void _onClicked() => setState(() => _value = new DateTime.now().toString());

  Widget build(BuilContext context){
    return new Scaffold(
      .//..
      floatingActionButton: new FloatingActionButton(
        onPressed: _onClicked,
        backgroundColor: Colors.red,
        mini: true,
        child: new Icon(Icons.timer),
      )
      //...
      new Text(_value)
    )
  }
}
```

**Drawer**

```dart
void main(){
  Widget build(BuilContext context){
    return new Scaffold(
      //..
      drawer: new Drawer(
        child: new Container(
          padding: new EdgeInsets.all(32.0),
          child: new Column(
            children: <Widget> [
              new Text('Hello Drawer'),
              new RaisedButton(
                onPressed: () => Navigator.pop(context),
                child: new Text('Close')
              )
            ],
          ),
        ),
      ),
      //...
    )
  }
}
```

**Footer Buttons**

```dart
String _value = '';
void _onClick(String value) => setState(() => _value = value);
Widget build(BuilContext context){
  return new Scaffold(
    //...
    persistentFooterButtons: <Widget>[
      new IconButton(
        icon: Icon(Icons.timer),
        onPressed: () => _onClick('Button1')
      ),
      new IconButton(
        icon: Icon(Icons.people),
        onPressed: () => _onClick('Button2')
      ),
      new IconButton(
        icon: Icon(Icons.map),
        onPressed: () => _onClick('Button3')
      ),
    ],
    //...
    new Text(_value)
  )
}

```

**Bottom Navigation Bar**

```dart
List<BottomNavigationBarItems> _items;
String _value = '';
int _index = 0;

@override
void initState(){
  _items = new List();
  _items.add(new BottomNavigationBarItems(
    icons: new Icon(Icons.people),
    title: new Text("People")
  ));
  _items.add(new BottomNavigationBarItems(
    icons: new Icon(Icons.message),
    title: new Text("Message")
  ));
  _items.add(new BottomNavigationBarItems(
    icons: new Icon(Icons.weekends),
    title: new Text("Weekends")
  ));
}

Widget build(BuilContext context){
  return new Scaffold(
    //...
    bottomNavigationBar: new NavigationBar(
      items: _items,
      fixedColor: Colors.blue,
      currentIndex: _index,
      onTap: (int item) {
        setState((){
          _index = item;
          _value = "Current value is ${_index.toString()}";
        });
      }
    )
    //...
  )
}
```

### Notification

**Bottom Sheet**

```dart
void _showBottom(){
  showModalBottomSheet<void>(
    context: context,
    builder: (BuildContext context) {
      return new Container(
        padding: new EdgeInserts.all(15.0),
        child: new Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            new Text(
              "Some info here",
              style: new TextStyle(
                color: red,
                fontWeight: FontWeight.bold
              ),
            ),
            new RaisedButton(
              onPressed: () => Navigator.pop(context),
              child: new Text('Close'),
            ),
          ]
        ),
      );
    }
  );

  //... Inside build function
  new RaisedButton(
    onPressed: _showBottom,
    child: new Text('Click To Open Bottom Sheet')
  )
  //...
}
```

**Snack Bar**

```dart
// Key is a way of referencing a widget and global key here is availble inside the entire application no matter where we call it.
final GlobalKey<ScaffoldState> _scaffoldState = new  GlobalKey<ScaffoldState>();

void _showBar(){
  _scaffoldState.currentState.showSnackBar(new SnackBar(
    content: new Text('Hello!!'),
  ));
}

Widget build(BuilContext context){
  return new Scaffold(
    key: _scaffoldState,
    //...
      new RaisedButton(
        onPressed: _showBar,
        child: new Text('Show bar'),
      )
  );

}

```

**Alert Dialog**

```dart
import 'dart:async';
//...
class _State extends State<MyApp>{
  Future _showAlert(BuildContext context, String message) async {
    return showDialog(
      context: context,
      child: new AlertDialog(
        title: new Text(message),
        actions: <Widget>[
          new FlatButton(
            onPressed: () => Navigator.pop(context),
            child: new Text('OK')
          )
        ]
      )
    )
  }

  //.. Inside build function
      new RaisedButton(
        onPressed: () => _showAlert(context, 'Do you like flutter?'),
        child: new Text('Click me!'),
      )
  //..
}

```

**Simple Dialog**

```dart
import 'dart:async';

enum Answers{ YES, NO, MAYBE }

class _State extends State<MyApp>{
  String _value = '';
  void _setValue(String value) => setState(() => _value = value);

  Future _askUser() async {
    switch(
      await showDialog(
        context: context,
        child: new SimpleDialog(
          title: new Text('Do ypu like flutter?'),
          children: <Widget>[
            new SimpleDialogOption(
              child: new Text('Yes!!'),
              onPressed: () {
                Navigator.pop(context, Answers.YES);
              }
            ),
            new SimpleDialogOption(
              child: new Text('No!!'),
              onPressed: () {
                Navigator.pop(context, Answers.NO);
              }
            ),
            new SimpleDialogOption(
              child: new Text('Maybe!!'),
              onPressed: () {
                Navigator.pop(context, Answers.MAYBE);
              }
            )
          ]
        ),
      )
    ){
      case Answers.YES:
        _setValue('Yes');
        break;
      case Answers.NO:
        _setValue('NO');
        break;
      case Answers.MAYBE:
        _setValue('MAYBE');
        break;

    }
  }

  //.. Inside build function
      new Text(_value),
      new RaisedButton(
        onPressed: () => _askUser,
        child: new Text('Click me!'),
      )
  //..
}

```

### Layouts

**Columns and Rows**

```dart
class _State extends State<MyApp>{
  TextEditingController _user = new TextEditingController();
  TextEditingController _pass = new TextEditingController();


  //.. Inside build function
  child: new Center(
    padding: neww EdgeInsets.all(32.0),
    child: new Center(
      child: new Column(
        children: <Widget>[
          new Text('Please Login'),
          new Row(
            children: <Widget>[
               new Text('Username:'),
               new Expanded( // Expands to take up rest of the space
                 child: new TextField(controller: _user)
               ),
            ]
          ),
          new Row(
            children: <Widget>[
               new Text('Password:'),
               new Expanded(
                 child: new TextField(
                   controller: _password
                   obscureText: true
                  )
               ),
            ]
          ),
          new Padding(
            padding: new EdgeInsets.all(12.0),
            child: new RaisedButton(
              onPressed: () => print("Login ${_user.text}"),
              child: new Text('Click')
            )
          )
        ],
      ),

    ),
  ),
  //..
}

```

**Card**

```dart
new Card(
  child: new Container(
    padding: EdgeInsets.all(32.0),
    child: new Column(
      children: <Widget>[
        new Text('Hello'),
        new Text('How are you!'),
      ],
    ),
  ),
)

```

**Expanded**

```yml
assets:
  - images/flutter.jpg
```

```dart
new Column(
  children: <Widget>[
    new Text('Image Demo'),
    // It determines how much area of screen we actually need
    new Expanded(
      child:  new Image.asset('images/flutter.jpg'),
    ),
    new Expanded(
      new Image.network('http://something.jpg'),
    ),
  ]
)
```

**Listview Builder**

```dart
import 'package:http/http.dart' as http;
import 'dart:async';
import 'dart:convert';
import 'dart:io';

class _State extends State<MyApp>{
  Map _countries = new Map();
  void _getData() async {
    var url = 'http://country.io/names.json';
    var response = await http.get(url);

    if(response.statusCode == 200){
      setState(() => _countries = JSON.decode(response.body));
      print('Loaded ${_countries.length} countries');
    }
  }

  @override
  void initState(){
    // Better Apporach  but if timeout then it will freeze
    _getData();
  }

  //... Inside build method
  _getData(); // Every time we rerender its going to build but that will add more countries to our map so BAD!!

  //...
  new Column(
    children: <Widget>[
      new Text('Countries'),
      new Expanded(child: new ListView.builder(
        itemCount: _countries.length;
        itemBuilder: (BuildContext build, int index){  // we want it to template it here
          String key = _countries.keys.elementAt(index);
          return new Row(
            children: <Widget>[
              new Text('$key : '),
              new Text(_countries[key])
            ],
          );
        },

      ))
    ]
  )


}



```

# Intermediate

### Widgets

**Tooltips**

```dart
class _State extends State<MyApp>{

  String _value = 'Nothing';
  void _onPressed() => setState(() => _value = new DateTime.now().toString());

  @override
  Widget build(BuildContext context){
    return new Scaffold(
      //..
      new Text(_value),
      new IconButton(
        icons: Icon(Icons.timer),
        onPressed: _onPressed,
        tooltip: 'Click me',
      )
    ),
  }
}

```

**Chips, keys and children**

```dart
class _State extends State<MyApp>{

  int counter = 0;
  List<Widget> _list = new List<Widget>();

  @override
  void initState(){
    for(int i = 0; i < 5; i++){
      _list.add(_newItem(i)); // Because this is a initState() we dont have to setState()
    }
  }
  void _onClicked() {
    Widget chip = _newItem(counter);
    setState(() => _list.add(child));
  }

  Widget _newItem(int i){
    Key key = new Key('items_$i');
    Container child = new Container(
      key: key, // keys allow us to reference that object (like an identifier)
      // we need key because we have a widget tree and need to access a child in that widget tree. So, when we call this key, we are referencing this Container()
      padding: new EdgeInsets.all(10.0),
      child: new Chip(
        label: new Text('${i} Name here'),
        deleteIconColor: Colors.red,
        deleteButtonTooltipMessage: 'Delete',
        onDeleted: () => _removeItem(key),
        avatar: new CircleAvatar(
          backgroundColor: Colors.grey.shade800,
          child: new Text(i.toString())
        ),
      )
    );
    counter++;
    return child;
  }

  void _removeItem(Key key){
    for(int i = 0; i < _list.length; i++){
      Widget child = _list.elementAt(i);
      if(child.key == key){
        setState(() => _list.removeAt(i));
        print('Removing ${key.toString()}');
      }
    }
  }

  @override
  Widget build(BuildContext context){
    return new Scaffold(
      floatingActionButton: new FloatingActionButton(
        onPressed: _onClicked,
        child: new Icon(Icons.add),
      )
      body: new Container(
        child: new Column(
          children: _list, // our list of Widgets
        )
      ),
    ),
  }
}
```

**Slider and Indicators**

```dart
class _State extends State<MyApp>{

  double _value = 0.0;
  void _onChanged(double value) => setState(() => _value = new DateTime.now().toString());

  @override
  Widget build(BuildContext context){
    return new Scaffold(
      //..
      children: <Widget>[
        new Slider(value: _value, onChanged: _onChanged),
        new Container(
          padding: new EdgeInsets.all(32.0),
          child: new LinearProgressIndicator(
            value: _value,
            valueColor: new AlwaysStoppedAnimation<Color>(Colors.green),

          )
        ),
        new Container(
          padding: new EdgeInsets.all(32.0),
          child: new CircularProgressIndicator(
            value: _value,
          ),
        ),
      ]
    ),
  }
}

```

**Popup Menu Button**

```dart
enum Animals { Cat, Dog, Bird, Lizard }
class _State extends State<MyApp> {

  Animals _selected = Animals.Cat;
  String _value = 'Make a Selection';
  List _items = new List();

  @override
  void initState(){
    for(Animals animal in Animals.values){
      _items.add(new PopupMenuItem(
        child: new Text(_getDisplay(animal)),
        value: animal
      ));
    }
  }

  void _onSelected(Animals animal){
    setState(() {
      _selected = animal;
      _value = 'You Selected ${_getDisplay(animal)}';
    })
  }

  String _getDisplay(Animals animal){
    int index = animal.toString().indexOf(".");
    index++;
    return animal.toString().substring(index);
  }


  String _value = 'Nothing';
  void _onPressed() => setState(() => _value = new DateTime.now().toString());

  @override
  Widget build(BuildContext context){
    return new Scaffold(
      //..
      children: <Widget>[
        new Container(
          padding: new EdgeInsets.all(5.0),
          child: new Text(_value);
        ),
        new PopupMeniButton<Animals>(
          child: new Icon(Icons.input),
          initialValue: Animals.Cat,
          onSelected: _onSelected,
          itemsBuilder: (Build context){
            return _items;
          }
        ),
      ]
    ),
  }
}

```

### Layout Widgets

**Expansion Panel**

```dart

class MyItem {
  bool isExpanded;
  final String header;
  final Widget body;

  MyItem(this.isExpanded, this.header, this.body);
}

class _State extends State<MyApp>{

  List<MyItem> _items = new List<MyItem>();

  @override
  void initState(){
    for(int i = 0; i < 10; i++){
      _items.add(
        new MyItem(false, 'Item $i', new Container(
          padding: new EdgeInsets.all(10.0),
          child: new Text('Hello World'),
        ));
      )
    }
  }

  ExpansionPanel _createItem(MyItem item){
    return new ExpansionPanel(
      headerBuilder: (BuildContext contex, bool isExpanded){
        return new Container(
          padding: new EdgeInsets.all(5.0),
          child: new Text('Header ${item.header}'),

        )
      },
      body: item.body,
      isExpanded: item.isExpanded
    );
  }

  @override
  Widget build(BuildContext context){
    return new Scaffold(
      //..
      child: new ListView(
        children: <Widget>[
          new ExpansionPanelList(
            exapansionCallback: (int index, bool isExpanded){
              setState(() {
                _items[index].isExpanded = !_items[index].isExpanded;
              });
            },
            children :_items.map(_createitem).toList(),
          ),
        ]
      )
    ),
  }
}

```

**TabBar View**

```dart

class Choice {
  final String title;
  final IconData icon;

  Choice({this.icon, this.title})
}

class _State extends State<MyApp> with SingleTickerProviderStateMixin {

  TabController _controller;
  List<Choice> _items = const <Choice>[
    const Choice(title: 'Car', icon: Icons.directions_car),
    const Choice(title: 'Bicycle', icon: Icons.directions_bike),
    const Choice(title: 'Boat', icon: Icons.directions_boat),
    const Choice(title: 'Train', icon: Icons.directions_railway),
    const Choice(title: 'Walk', icon: Icons.directions_walk),
  ];

  String _value = 'Nothing';
  void _onPressed() => setState(() => _value = new DateTime.now().toString());

  @override
  Widget build(BuildContext context){
    return new Scaffold(
      //..
      new Text(_value),
      new IconButton(
        icons: Icon(Icons.timer),
        onPressed: _onPressed,
        tooltip: 'Click me',
      )
    ),
  }
}

```

### Charts

### Custom Widgets

### Navigation

### State Manangement

# Advanced
