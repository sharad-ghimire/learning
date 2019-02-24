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
		import 'dart:collection';
		
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
