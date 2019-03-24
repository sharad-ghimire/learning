# Dart

- Object-oriented language: how to organize code in objects, or classes.
- Statically typed: Variables contain data of a single 'type', like an interger or a string.
- C-style Syntax
- Multiple Runtime Environment: Transpiled to JS to run in the browser. Runs in the Dart VM to execute from a command line. Complied to machine code to run on mobile devices.

```dart
void main(){
    var name = myName();
    print('My name is $name and my name has ${name.length} char');
}

String myName() {
    return 'Sharad';
}
```

**Types in Dart**

- Every value has a 'type'.
- Every variable has a type it can reference.
- Once a variable has a 'type' associated, the variable type cannot change.
- We don't always have to annotate types, dart can guess for us.
- `String`, `int`, `double` and `dynamic` (we have a variable that can hold any variable you wish)
- Why? Performance can be improved, easier to work om large projects, less of a need to write unit tests, automatically find simple errors.

**OOP**

- Object = Piece of Data + Method
- A class contain a set of rules.

```dart
void main(){
    var person = new Person('Sharad');
    person.printName();
}

class Person {
    String firstName;

    Person(this.firstName); //constructor

    printName(){
        print(firstName);
    }
}
```

- Call classes constructor function with arguments
- Constructor function execuuted, does some initial setup.
- New instance of class returned.

**Dart Program Design Flow**:

- What different types of things exist in our app? -> Create a dart class to represent each type of thing.
- What pieces of data would be tied to each 'thing'? -> Create a 'field' on each class to hold that piece of data.
- How would we interact with each thing and the data it contains? -> Write methods to represent each interaction.
- How do different things interact with each other? -> Write code outside of a class to get classes to interact.

