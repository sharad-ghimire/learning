# Hello World

```dart
// bin/main.dart
import 'package:helloworld/helloworld.dart' as helloworld
main(List<String> arguments) {
	print("Hello World: ${helloworld.calculate()}!");
}

// lib/helloworld.dart
int calculate(){
	return 6 * 7;
}

```

# Variables

```dart
// This imports a file and uses it as a variable (/* Multiple Line*/)
main(List<String> arguments){
	// Boolean
	var isOn = true;
	bool isOn;   //generic bool type
	bool isDog = false;
	print('isOn = ${isOn}');
	print('isOn is a  ${isOn.runtimeType}'); // isOn is a bool

	// Number
	num age = 34;
	int people = 6;
	double temp = 32.06;

	// Parse an int
	int test = int.parse("12");
	print(test); // 12

	// Taking a int class calling its parse function, taking an argument, and saying hey, if that did not work then call onError which is anonymous function.
	int err = int.parse('12.0009', onError: (source) => 0);
	print('err = ${err}');

	// Basic Math
	int dogyear = 7;
	int dogage = age * dogyear;
	print("Your age in dog years is: $(dogyear)");

	//String
	String name = "Sharad Ghimire";
	print('Hello ${name}');
	// Get a substring
	String firstname = name.substring(0, 6);  // Sharad
	// Get the index of a string
	int index = name.indexOf(" ");
	String lastname  = name.substring(index).trim(); // Ghimire
	// Length
	print(name.length);
	// Contains
	print(name.contains('rad'); // true

	// Create a List
	List parts = name.split(' ');  //[Sharad, Ghimire]
	print(parts[0]); // Sharad

	// Variable vs const
	String hello = 'hello';
	const String world = 'world';

	world = 'my World'; //Cannot assign to final (const) variable
}
```

# User Input Example

```dart
import 'dart.io'; // Allow for input and output
import 'dart:async'; // Allow for sync and async operations
	// async are the operations that can be done at the same time. Alot of io in dart are async

main(List<String> arguments){
	stdout.write("What is your name?\r\n");
	// Escape sequence => \r hard return \n new line
	String name = stdin.readLineSync();
	// Read the line from the user syncronously, ie. block our program from executing until our function has completed.
	print(name);
	name.isEmpty ? stderr.write("Name is empty") : stdout.write('Hello ${name} \r\n');
	}
```

# Collections

```dart
import 'dart:collection';
	//enum
enum colors { red, green , blue } // We cannot put enum inside a main function
	// This is a Enumerator and it is the simplest of the collection
main(List<String> arguments) {
  print(colors.values); // [colors.red, colors.green, colors.blue]
	print(colors.red);

		// List has zero based index
	List test = [1, 2, 3, 4];
	print(test.length);
	print(test[0]);
	print(test.elementAt(2)); //3

		// Dynamic List of generic type
	List things = new List();
	things.add(1);
	things.add('cats');
	things.add(true);

	// Creating a variable type of generic of int (List that only has int)
	List<int> numbers = new List<int>(); //new creates a new object in memory
	numbers.add(1);

	// Set = unordered and do not contain duplicates
	Set<int> numbers = new Set<int>();
	numbers.add(1);
	numbers.add(2);
	numbers.add(1);
	print(numbers); // [1, 2]

	// Queue = Ordered, no index, add and remove from the start and end
	// It is not a part of standard collection so we nned to import it
	Queue items = new Queue();
	items.add(1);
	items.add(3);
	items.add(2);
	items.removeFirst();
	items.removeLast();
	print(items); // { 3 }

	// Map = key / value pair => add items and no need to know thier index
	Map people = { 'firstname': 'Sharad', 'lastname': 'Ghimire' };
	print(people.keys); // (firstname, lastname)
	print(people.values); // (Sharad, Ghimire)
	print(people['firstname']); // Sharad

	Map<String, String> people = new Map<String, String>();
	people.putIfAbsent('firstname', () => 'Sharad'); // Anonymous function
}

```

# Flow Control

```dart
// assert determines if someting is true (similar to throwing an errors)
main (List<String> arguments) {
	int age = 43;
	assert(age == 43);

		// if else
	if(age == 43) print('You are 43!');

	if(age < 18){
		print('You are a minor!');

		if(age < 13) {
			print('You are not even a teenager');
		} else {
			print('You child');
		}
	}

	// Scope is where variables live
	// Variables have short lifecycle -> { .. } scope
	if(age == 43) {
		print('You are 43');
	} else {
		bool hasBills = true; // this variable is inside this scope
		print('You are not ${age} and has bills ${hasBills}');
	}

	// Switch - works really well with enums
	switch(age){
		case 18:
			print('You are 18, you can vote');
			break;  //break out of the current scope

		case 21:
			print('You are 21, you are an adult!');
			break;

		case 65:
			print('You are 65, you can retire');
			break;

		default:
			print('Nothing special about this age.');
			break;
	}

	// Loops
	// Do loop
	int value;
	int init = 1;
	int max = 5;
	value = init;

	do {
		print value;
		value++;
	} while (value < max);
		// 1 2 3 4

	// While Loop
	while(value <= max){
		print value;
		value++;
	}
	// 1 2 3 4 5
	// Do loop will always run its block first while the while loop evaluates first before running

	// Infinite Loop
	do {
		print('Value');
		value++;

		if(value == 3){
			print('value is 3');
			continue; // Continue the loop
		}

		if(value > 5){
      print('value is greater than 5');
			break;  // jumps out of the loop
		}

	} while(true);

	// For Each
        List people = ['Sharad', 'Ram', 'Hari'];

	// Starting value, range, increment
	for(int i = 0; i < people.length; i++){
		print("Person at ${i} is ${person[i]}");
	}

	people.forEach((String person) {
		print(person);
	});
}
```

# Functions

```dart
	// main function is the main execution of the program
	main (List<String> aarguments){
		test();
		sayHello('Sharad');

		print('Your age in dog years is ${dogYears(43)}!');

		int wall1 = squareFeet(10, 10);
		int wall2 = squareFeet(10, 20);
		int celling = squareFeet(20, 20);

		double paint = paintNeed(wall1, wall2, celling);
		print('You ${paint} gallons of paint');

		download('myfile.txt');
		download('myfile2.txt', true);

		int footage = squareFeetNamed(length: 10, width: 5);
		int footage = squareFeetNamed(10, 5); // Error! Call them by name!!
		downloadNamed('myFile.txt'); // No need to pass port
		downloadNamed('myFile.txt', port: 90);

		// Point to the function below
		var dogyears = calcYears;
		var catYears = calcYears;
		print('Your age in dog years is ${dogyears(age: 43, multiplier: 7)}');
		print('Your age in cat years is ${dogyears(age: 43, multiplier: 12)}');

		// Anonymous Functions (internal functions)
		() { print('Hello'); } // Nothing happens

		List people = [ 'Sharad', 'Ghimire'];

		people.forEach(print);
		people.forEach(() {
			print(name);
		});

		people.where((String name) { // where creates another list if true adds to it
			switch(name){
				case 'Sharad':
					return true;
				case 'Ghimire':
					return false;
			}
		}).forEach(print);


	}

	//void means not gonna return anything
	void test() {
		print('Testing');
	}

	void sayHello(String name) {
		print('Hello ${name}!');
	}

	int dogYears(int age){
		return age * 7;
	}

	int squareFeet(int width, int length){
		return width * length;
	}

	double painNeeded(int wall1, int wall2, int celling){
		int footage = wall1 + wall2 + celling;
		return footage/30;
	}

	// Optional parameters
	void sayHello([String name = '']){
		if(name.isNotEmpty) name = name.padLeft(name.length + 1); //takes name and add space above it
		print('Hello ${name}');
	}

	void download(String file, [bool open = false]){
		print('Downloading ${file}');
		if(open) print('Opening ${file}');
	}

	// Names Parameters
	int squareFeetNamed({ int width, int length }){
		return width * length;
	}

	// Optional Named
	void downloadNamed(String file, { int port: 80}){
		print('Downloading ${file} on port ${port}');
	}

	// Functions As Objects
	int calcYears({int age, int multiplier}){
		return age * multiplier;
	}

```

# Error Handling

```dart
	main(List<String> arguments) {
		// Error is a program failure
		// Exception can be handled

		int age;
		int dogyears = 7;
		print(age * dogyears);
		//Unhandled exception: NoSuchMethodError: The method '*' was called on null.

		// Try Catch Finally
		try {
			int age;
			int dogyears = 7;
			print(age * dogyears);
		}
		on NoSuchMethodError { // Catch specific error
			print('Sorry thats not gonna happen');
		}
		catch(e) {
			print("There was an error: ${e.toString()}");
		}
		finally {  // Clean up
			print("Compete");
		}

		// Throwing Exception
		try {
			int age;
			int dogyears = 7;
			if(dogyears != 7) throw new Exception('Dog years must be 7'); // Custom exception
			if(age == null) throw new NullThrowError();
			print(age * dogyears);
		}
		on NullThrownError{
			print("The value was null!!");
		}
		on NoSuchMethodError {
			print('Sorry no such method!');
		}
		catch(e) {
			print("There was an error: ${e.toString()}");
		}
		finally {
			print("Complete");
		}
}
```
