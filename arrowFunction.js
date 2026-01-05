/**
 * 
An arrow function is a shorter syntax for writing functions in JavaScript.
1.It does the same job as a normal function
2.But with less code and clear intent
 */

console.log("Simple greetings")

const greet = ()=>{
    console.log("Wel come to arrow function bhavesh")
}
greet()


/**
 * “Take inputs on the left → produce result on the right”
 *
  const functionName = (parameters) => {
    // function body
      };

      Key parts:

const functionName → function stored in a variable
(parameters) → input values
=> → arrow operator
{} → function body

*/

let add = (a,b)=> {
    return a+b
}
console.log(add(5,2))


/**
 * Implicit return : If a function has only one statement, you can skip:
{ }
return
 */

const square = n => n * n
console.log(square(5))


/**
 * Arrow function with array methods
 */

console.log("forEach")

let arr = ["Bhavesh", "Hina"]

arr.forEach( a => {
    console.log(a)
})


/**
 * map() method
 */

let number = [5,6,7,8]

let value = number.map(a=>a*2)
console.log(value)
console.log(number)


/**
 * filter()
 */

let n = [ 10, 20, 3, 6]
let findMoreThan10 = n.filter(n=>n > 10)
console.log(findMoreThan10)