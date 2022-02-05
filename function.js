// Javascript - Intro to functions and more
// Functions :
// You would have seen functions before but now you can also write your own functions!
// Example:
// // function declaration
// function square(number) {
// return number * number;
// }
// The function keyword defines the start of a function. Functions also have a name, the
// above function's name is square . Functions are used to represent blocks of code
// that perform very specific functions. Just like if statements all the code within
// the braces {} are executed by the function.
// Executing a function is called invoking, calling, or applying it. You can call a
// function by putting parentheses after an expression that produces a function value.
// Functions also have arguments , these are values you can pass to a function. In the
// example, number is the argument we are passing to the function.
// Functions also have a return statement, they are optional but many functions return
// some data that can be used later in your overall program.
// Scope
// In programing Scope determines the accessibility (visibility) of variables.
// There are two types of scope in JavaScript:
// Local Scope
// Global Scope
// Local Variables
// Consider the following snippet of code
// // code here cannot access the `number` variable!
// function someFunction(){
// var number = 20
// }
// // code here cannot access the `number` variable!
// In the above example only the code within the funciton someFunction can access the
// number variable.
// Global Variables
// Consider another snippet of code
// var number = 20
// //code here can access the `number` variable


const parents = {
    father: "krishna"
    mother: "priya"

}
const son = Object.create(parents)
console.log(son.father)