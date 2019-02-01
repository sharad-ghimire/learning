## Lecture 1 - Basic C++

**Algorithm And Data Strcutures**: _Algorithm_: A well defined computational process that takes some input and produces an output. -- Really it’s a tool for solving a well specified computational problem. -- We don’t actually need a computer for them though. _Data Structure_: A way to store and organise data - simply a a special type of algorithm

**Strings in C++**: Strings in C are just null terminated char arrays. -- Null is mostly just 0, or something that looks like it. -- Since C++11, an actual `null_ptr` type exists, so we can have a proper null that isn’t just 0. -- Where could that possibly go wrong? What if you forget the null? What if you want to know the length? -- C++ has a proper string class (`std::string`) that conceptually wraps a `char[]` and fixes these problems.

**Arrays**:

```cpp
int a[4] ={1,2,3,4};
int a[] ={1,2,3,4};
int a[4] ={};
int a[4];
```

These are all statically created. The program does its own memory management – so we need to know the size! -- What if we don’t know the size? -- Arrays decay to pointers to the first element. -- So an `int[]` can be treated as a `int*`.

**Static and Dynamic Allocation**: C++ has a more complex allocation system than Java (at least from the programmer’s perspective). Things can be statically allocated (They are automatically deallocated when they go out of scope - What does this mean for return data?) Or dynamically allocated (Created on the heap with the `new` keyword. C++ has no garbage collection, so we have to manage it ourselves.

**Pointers**: They’re just variables that tell us where something is in memory i.e they point to something. To create a pointer to type t:

```cpp
t * foo;      t* foo,     t * foo      t *foo
```

The spaces around the \* don’t matter. A pointer is really just number that is the address of whatever it’s pointing at. To get what it’s pointing at we dereference it:

```cpp
t bar = *foo;
```

If we’re dereferencing to get a member `(*foo).bar`, we can write the alternative foo->bar. This can be nicer in many situations. -- To get the address of something, use the address operator:

```cpp
int foo = 5;
int * bar = &foo;
```

**References**: References are like pointers but they can’t change where they’re pointing after initialisation -- They’re transparently dereferenced -- They’re created with the & operator int & foo = ...; But then they work like the thing at the other end -- foo = foo + 5 does what you’d expect (what would it do to a pointer?) -- References are good for passing data around without copying it (this should be familiar from Java – it does essentially the same thing).

\*\* So if we want to create an array where we don’t know the size (e.g. as a parameter or return type), we need a pointer `int * tabulate(Data dataObject)...` -- But how do we know that we’re getting an array? We don’t! Well -- So use `std::vector!`

**Classes**: The methods have no content below -- They can, but they don’t have to -- C++ routinely separates definition from source code -- It expects a single pass compiler, so we have to have all the names in the right order! -- Typically definitions are put in header files (usually with a .h extension, but not necessarily). -- Source code is normally in source files (usually .cpp, but again, that can change - Sometimes code is put in the header file.

In header file --Declare things in the right order for `#includes`. -- Create the equivalent of interfaces (virtual classes!)

```cpp
#include <string>
using std::string;
class myClass : public parentClass {
    private:
        int privateInt;
    public:
        int getPrivateInt();
        void setPrivateInt(int newValue);
        string toString();
};
```

**Abstract Data Types**: ADTs are specifications of behaviour of Data Types -- They don’t specify implementations -- Adhering to an ADT allows us to code without having to know implementation details (good for teams, reusability and modularity) -- In Java, we’d achieve this with an Interface and abstraction.

**The List ADT**: A list stores data in a sequential order -- So what methods should a list have? -- Something to check if it’s empty? -- Something to add to the front of the list? -- Something to add to the end? -- Something to get the first element? -- Something to get the rest of the list?

An intList Virtual Class:

```cpp
class intList {
public:
    virtual ~intList() {};
    virtual bool isEmpty() = 0;
    virtual void prepend(int c) = 0;
    virtual void append(int c) = 0;
    virtual int head() = 0;
    virtual intList tail() = 0;
};
```
