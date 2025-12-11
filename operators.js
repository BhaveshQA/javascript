console.log("Airthmetic Operators:");

let a = 10;
let b = 10;

console.log(`Addition of ${a} and ${b} is : ${a +b}`)
console.log(`Subtraction of ${a} and ${b} is : ${a - b}`)
console.log(`Multiplication of ${a} and ${b} is : ${a * b}`)
console.log(`Division of ${a} and ${b} is : ${a / b}`)
console.log(`Modulus of ${a} and ${b} is : ${a % b}`)

console.log("\nAssignment Operators:")
let c = 10
c +=10 // c = c + c
console.log(`Print c : ${c}`)

c -=c  // c = c - c
console.log(`Print c : ${c}`)


console.log("Comparision Operator")

let value1 = 1
let value2 ="1"

console.log("Compare using == operator", value1 ==value2) // Compares values, ignores datatype true (1 == "1")
console.log("compare using the === operator", value1===value2) //Compares values and datatype. false (number ≠ string)
console.log("compare using the !=", value1 != value2) //Checks if values are not equal (datatype ignored). false (1 == "1")


console.log("Logical operators")

/**Logical operators are extremely important in automation because we use them in:

If conditions

Validation statements

Assertions

Loop conditions

Page state checks

API response checks */


console.log("Logical operator &&")
let age = 19
let eligibleForLicence = true

if ( age >= 20 && eligibleForLicence){
 console.log ("Eligible for the licence")
}
else
{
    console.log("Wait for till you grow up ")
}

console.log("logical operator ||")

let isIndianCitizen = false
let isAge = 15

if ( isAge == 14 || isIndianCitizen == true) {
    console.log("You are eligible for apply visa for the Italy")
}
else
{
    console.log("Wait for sometime dear for being eligible")
}

