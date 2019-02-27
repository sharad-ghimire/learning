import 'package:todo_redux/models/modals.dart';

class AddItemAction {
  static int _id = 0;
  final String item;
  AddItemAction(this.item) {
    _id++;
  }

  int get id => _id; //getter

}

class RemoveItemAction {
  final Item item;
  RemoveItemAction({this.item});
}

class RemoveItemsAction {}
