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
				print('value is 3);
				continue; // Continue the loop
			}
			
			if(value > 5){
				print('value is greater than 5);
				break;  // jumps out of the loop
			}
			
		} while(true);
		
		// For Each
		List people = ['Sharad', 'Ram', 'Hari'];
		
		// Starting value, range, increment
		for(int i = 0; i < people.length; i++){
			print('Person at ${i} is ${person[i]');
		}
		
		people.forEach((String person) {
			print(person);
		});
	}

