/*
In JavaScript, the static keyword is used to define a static method for a class. A static method is a method that is associated with the class itself, rather than with any specific instance of the class.

Static methods are called on the class itself, rather than on an instance of the class. They are often used to create utility functions or to implement functions that are closely tied to a class, but do not require access to instance data.

Here is an example of a class with a static method:

*/

class MyClass {

    static staticMethod() {
    console.log('This is a static method');
    }

    static roman(number){
        console.log(number)
    }
}

MyClass.staticMethod(); // prints 'This is a static method'
MyClass.roman(555)
/*In the example above, the staticMethod is a static method of the MyClass class. It can be called on the class itself, but not on an instance of the class.
*/


/*
Note: if a class has a constructor and you want to pass parameters then it won't be invoked unless you use instance or singleton approach.. as constructor invokes only with new.
*/