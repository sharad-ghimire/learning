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

