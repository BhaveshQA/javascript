/**
 * In automation, functions are used to:
1.avoid duplicate code
2.wrap logic (loops + conditions)
3.make scripts readable
4.reuse actions (login, validation, retry, calculation)
Think:
Function = named logic block you can reuse
 */

console.log("Basic function")

function sayhello(){
    console.log("Hello welcome to the automation world of testing")
}
sayhello()


console.log("-----------------------")

/**
 * Example 2: Print numbers 1 to 5 (loop inside function)
 */

function printNumber(){
    for(let count = 1; count <=5; count++){
        console.log(`Print the number : ${count}`)
    }
}
printNumber()

console.log("------------------------")
/**
 * Example 3: Check even or odd (condition)
 */


console.log()
function oddEven(number){
    if(number%2===0){
        console.log(`Number is even ${number}`)
    }
    else
    {
        console.log(`Number is odd ${number}`)
    }
}
oddEven(11)
console.log("----------------------------")

/**
 * Example 4: Print table of 2 (loop)
 */

console.log("Example 4: Print table of 2 (loop)")

function print2Table(){
    let i = 1, j =2
    
    while(i<=10){
        console.log(`${i} * ${j} = ${i*j}`)
        i++
    }
}
print2Table()

console.log("---------------------------------")

/**
 * Example: Print numbers divisible by N (loop + param)
 */

function divisionByNumber(number, division){

    for(let i =1; i<=number; i++){
        if(i%division===0){
            console.log(`Print the number ${i}`)
        }
    }
}

divisionByNumber(10,2)
console.log("------------------------------------")

/**
 * Example : Validate age for ticket
 */

console.log("Validate age for ticket")

function ageCheker(age){
    if(age < 5){
        console.log("free ticket")
    }
   else if(age >= 5 && age < 15){
        console.log("Ticket price is 500")
    }
    else if(age>=15 && age <= 50){
        console.log("Ticket price is 1500")
    }
    else{
        console.log("Ticket price is 700")
    }
}

ageCheker(5)


console.log("------------------------------")

/**
 * ADVANCED FUNCTIONS (Return + Automation Thinking)
 */

console.log("Return even count (loop + return)")

console.log("Basic Return via function")

function maxNumber(a, b){

    if(a>b){
        return a
    }
    else
    {
        return b
    }
}

console.log(maxNumber(10,20))


/**
 * Return odd or even
 */

console.log("Return odd or even")

function oddEven(number){

    if(number%2===0){
        return "even"
    }
    return "odd"
}

console.log(` number is ${oddEven(5)}`)

/**
 * return boolean value
 */

console.log("Return boolean value")

function booleanValue(i){
   
    return i > 5
}

console.log(booleanValue(5))


console.log("--------------------------")

/**
 * Example 1: Find maximum of 3 numbers
 */

function findMaxNumber(a,b,c){
    if( a> b && a > c)
        return a
    if(b > a && b > c)
        return b
    return c
}

console.log(findMaxNumber(9,10,7))

console.log("---------------------")

/**
 * Count even numbers (loop)
 */

console.log("Count even numbers (loop)")

function countEvenNumber(n){
    let count = 0

    for(let i = 1; i<=n; i++){
        if(i%2===0){
            count++
        }

    }
    return count
}

console.log(countEvenNumber(10))