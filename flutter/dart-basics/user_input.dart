	import 'dart.io'; // Allow for input and output
	import 'dart:async'; // Allow for sync and async operations
	// async are the operations that can be done at the same time. Alot of io in dart are async
	
	main(List<String> arguments){
		stdout.write("What is your name?\r\n"); 
		// Escape sequence => \r hard return \n new line
		String name = stdin.readLineSync(); 
		// Read the line from the user syncronously, ie. block our program from executing until our function has completed.
		print(name); 
		name.isEmpty ? stderr.write("Name is empty") : stdout.write('Hello ${name} \r\n");
}