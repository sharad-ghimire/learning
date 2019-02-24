	// bin/main.dart
import 'package:helloworld/helloworld.dart' as helloworld

main(List<String> arguments) {
	print("Hello World: ${helloworld.calculate()}!");
}
	
// lib/helloworld.dart
int calculate(){
	return 6 * 7;
}