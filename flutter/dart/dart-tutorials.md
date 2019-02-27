### Hello World

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
/*
  Initialize Counter
  while(condition){
    Put our code heree
    Increment or decrement counter
  }
*/
int i = 0;
while(i < 4){
  print("Hello");
  i++;
}



// do while loops
/*
  Initialize Counter
 do {
    Put our code heree
    Increment or decrement counter
  } while(condition)
*/
int i = 0;
do {
    print("Hello");
    i++;
} while ( i < 4);


// Break

for(int i = 1; i <= 10; i++){
  print(i);
  if(i == 6) break; // Break the loop after the value 6
}

// Using Labels
outerLoop: for (int i = 1; i <= 3; i++){
  innerLoop: for(int j = 1; j <= 3; j++) {
    print("$i $j");
    if(i == 2 && j == 2){
      break outerLoop;
    }
  }
}


// Continue (we can also define lable with continue)
for (int i = 1; i <= 3; i++){
  if(i % 2 == 0) {
    continue; // skip just 5
  }
  print(i);
}

```

## Functions or Methods

Collection of statements grouped together to perform an operation. **Functions in Dart are Objects.** That means functions can be assigned to a variable or passed as parameter to other function. All functions in Dart returns a value. If no return value is specified the function return `null`. Specifying return type is optional but is recommended as per code convention.

Different types of function parameters:

- Required Parameters
- Optional Parameters : Optional **Positional** Parameter, Optional **Named** Parameter, Optional **Default** parameter

```dart
void main() {
  print(findPerimeter(4, 2));
  findArea(4, 2);
}

int findPerimeter(int length, int breadth){  // Required parameters
  return length + breadth;
}

void findArea(int length, int breadth ){ // void means no return type [optional]
  print(length * breadth);
}

findArea(int length, int breadth){
  // By default, function returns null
}

```

**Functions as Expressions**

Use fat arrow for single line functions and remove `return` keyword and `{ }`. _Just One Expression function_

```dart
void main(){
  int rectArea = getArea(10, 5);
  findPerimeter(4, 2);
}

void findPerimeter(int l, int b) => print("Perimeter: ${2*(l+b)}");
int getArea(int l, int b) => l * b;
```

**Optional Parameters**

Named Parameters prevents errors if there are large number of parameters.

```dart
void main(){
  printCities("Dang", "Tulsipur", "Ghorahi"); // Must have all 3 arguments
  printCountries("Nepal", "India"); // Will get null in s3
  print(findVolume(2, h: 10, b: 3)); // Sequence does not matter
  var result = findArea(length: 2);
}

// Required Parameters
void printCities(String s1, String s2, String s3) => print("First: ${s1}, Second: ${s2}, Third: ${s3}");

//Optional Parameters [parameter]
void printCounties(String s1, String s2, [String s3]) => print("First: ${s1}, Second: ${s2}, Third: ${s3}");

// Optional Named Parameter
int findVolume(int l, {int b, int h}) => l * b * h;

// Optional Default Parameter
int findArea({int length, int breadth = 10}) => length * breadth;

```

## Error Handling

When normal flow of Program its disrupted and Application crashes its because of exceptions. Some Exceptions are

| Exceptions                       | Decriptions                                                                                                           |
| :------------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| `DeferredLoadException`          | Thrown when a deffered library fails to load.                                                                         |
| `FormatException`                | Exception thrown when a string or some other data does not have an expected format and cannot be parsed or processed. |
| `IntegerDivisionByZeroException` | Thrown when a number is divided by zero.                                                                              |
| `IOException`                    | Base class for all Input Output related exceptions.                                                                   |
| `IsolateSpawnExceptinon`         | Thrown when an isolate cannot be created.                                                                             |
| `Timeout`                        | Thrown when a scheduled timeout happends while waiting for an async result                                            |

```dart
void main(){
  int result = 12 ~/ 4; // ~ means divide to int then return the result in form of int.

  // When we know what kind of exception will be thrown
  try {
    result = 12 / 0;    //  IntegerDivisionByZeroException Exception
  } on IntegerDivisionByZeroException {
    print("Dont Divide By Zero ! Okay?");
  }

  // whenwever we are not sure what type of exception is going to be thrown
  try {
    result = 12 / 0;
  } catch(e){
    print("Dont Divide By Zero ! Okay? You got this $e");
  } finally {
    print("Finally clause is always executed");
  }

  // Using Stack Trace to know the events occurred before Exception was thrown
   try {
    result = 12 / 0;
  } catch(e, stack){
    print("Error: $e");
    print("Stack Trace: \n $stack");
  }
}
```

**Custom Exception Handling**

```dart

class DepositException implements Exception {
  String errorMessage() => "You cannot enter amount less than 0";
}

void depositMoney(int amount){
  if(amount < 0) throw new DepositException();
}

try {
  depositMoney(-200);
} catch(e) {
  print(e.errorMessage());
}

```

## OOPS Concepts

## Functional Programming

## Dart Collection Framework
