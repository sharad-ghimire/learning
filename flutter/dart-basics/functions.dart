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
		print('Downloading ${file});
		if(open) print('Opening ${file});
	}
	
	// Names Parameters
	int squareFeetNamed({ int width, int length }){
		return width * length;
	}
	
	// Optional Named
	void downloadNamed(String file, { int port: 80}){
		print('Downloading ${file} on port ${port});
	}

	// Functions As Objects
	int calcYears({int age, int multiplier}){
		return age * multiplier;
	}
