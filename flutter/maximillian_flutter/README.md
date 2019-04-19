- final is dart is same as const in javascript and in const we cannot change the value

```dart
final List<String> product = [];
products = ["Hello"]; // Error
products.add("Hello"); // We can add to that array though (reference type)


final List<String> product = const []; // Cannot add to an modifiable list
products.add("S"); // Error

```
