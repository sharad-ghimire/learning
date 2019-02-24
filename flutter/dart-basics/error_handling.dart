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
  } on NoSuchMethodError {
    // Catch specific error
    print('Sorry thats not gonna happen');
  } catch (e) {
    print("There was an error: ${e.toString()}");
  } finally {
    // Clean up
    print("Compete");
  }

  // Throwing Exception
  try {
    int age;
    int dogyears = 7;
    if (dogyears != 7)
      throw new Exception('Dog years must be 7'); // Custom exception
    if (age == null) throw new NullThrowError();
    print(age * dogyears);
  } on NullThrownError {
    print("The value was null!!");
  } on NoSuchMethodError {
    print('Sorry no such method!');
  } catch (e) {
    print("There was an error: ${e.toString()}");
  } finally {
    print("Compete");
  }
}
