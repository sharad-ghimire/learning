## Hello World

```dart
/*
  main() => entry function
*/
void main() {
  // Print Function to print the text to console
  print('Hello World');
}
```

## Built in Data Types

**Data Types**

All datatypes in Dart are Objects, therefore, their initial value is by default `null`. Dart has special support for following data types:

- Number (includes `int` and `double`)
- Strings
- Booleans
- Lists (also known as arrays)
- Maps
- Runes (for expressing Unicode characters in String)
- Symbols

```dart
var age = 10; // It is inferred as integer automatically

// OR
int age = 10; // datatype variableName = value;
int hexValue = 0xEADEEAB; // Can also assign hexadecimal valur
double percentage = 93.0;
String name = 'Sharad'
bool isOn = true;
```

**String, Literals and Interpolation**
Literals examples: true, 2, "John", 4.5

```dart
  String s1 = 'Single Quotes';
  String s2 = 'Double Quotes';
  String s3 = 'It\'s good!';
  // Large String
  String s4 = 'Lorem Ipsum is simply dummy text of the printing.'
              'standard dummy text ever since the 1500s, when an'
              'five centuries, but also the leap into electronic typesetting'
              'remaining essentially unchanged.';

  // String Interpolation
  String name = 'Sharad';
  String message = 'My name is' + name;
  String messsage = 'My name is $name';
  String messsage = 'My name\'s length is ${name.length}';

```

**`final` vs `const` keyword**

If we never want to change a value then use `final` and `const` keywords.

| `final`                                                                   | `const`                                                                                                            |
| :------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------- |
| `final` variable can only be set once and it is intialized when accessed. | `const` variable is implicitly final but it is a complile-time constant (i.e it is initialized during compilation) |
| Instance varible can be `final` but cannot be `const`.                    | If we want a constant at class level then make it `static const`                                                   |

```dart
// final
final name = 'Sharad';
name = 'Yo!'; // Invalid
final String firstName = 'Sharad';

// const
const PI = 3.14;
const double gravity = 9.8;

class Circle {
  final color = 'Red';
  static const PI = 3.14;
}
```

## Conditional Structure

**Conditonal Statements**: If the condition is true then do something else do something else.

```dart
void main() {
  // If and else statement
  var salary = 25000;
  if (salary > 2000) {
    print("Something");
  } else {
    print("Something else");
  }

  // if else if  statement
  var marks = 70;
  if(marks >= 90 && marks < 100){
    print("Something");
  } else if(marks >= 80 && marks < 90){
    print("Something eLse ");
  } else if(marks >= 70 && marks < 80){
    print("Anything ");
  } else if(marks >= 60 && marks < 70){
    print("Nothing");
  } else {
    print("Invalid!");
  }
}

```

**Conditional Exxpressios**

```dart
void main() {
  // condition ? exp1 : exp2
  // If condition is true, evaluate exp1 and return its value, otherwise, evaluate and returns the value of exp2
  int a = 2;
  int b = 3;
  a < b ? print(a) : print(b);

  int smallNumber =  a < b ? a : b;

  // exp1 ?? exp2
  // If exp1 is non-null, returns its value; otherwise, evaluates and returns the value of exp2
  String name = null;
  String nameToPrint = name ?? "Guest User";
  print(nameToPrint);

}
```

**Switch Case Statement**

```dart
void main() {
  String grade = 'A';
  // Switch Case Statements are applicable for only 'int' and 'String'
  switch (grade) {
    case: 'A':
      print("A");
      break;

    case: 'B':
      print("B");
      break;

    default:
      print("Nothing");
  }
}
```

## Control Statements

**Loop Structure** : Control Variable, Conditional Check, Increment/Decrement the counter. Definite (For Loop) and Indefinite (while and do while).

```dart
// For Loops
// for(initializer; condition; increment/decrement){}
for( var i = 0; i < 4; i++){
  print("Hello");
}

List planetList = ["Mercury", "Venus", "Mars"];
for (String planet in planetList) {
  print(planet);
}

// While loops
while(i < 4){
  print("Hello");
  i++;
}

// do .. while loops
do {
    print("Hello");
    i++;
} while ( i < 4);


```

## Functions and Methods and Error Handling

## OOPS Concepts

## Functional Programming

## Dart Collection Framework
