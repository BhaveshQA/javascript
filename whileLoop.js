/**
 * What is a while loop?
   A while loop keeps running as long as a condition is true.

Key difference from for loop:
for loop → when you know how many times to run
while loop → when you don’t know how many times, and a condition controls it

while (condition) {
    // code to execute
}

You must update the condition inside the loop, otherwise it becomes an infinite loop.
 */


/**
Automation Perspective (Why this matters)
This exact pattern is used when:
2.scanning UI lists and validating specific items
3.filtering API responses
4.validating table rows with conditions
5.retry logic with checks
6.pagination validations
 */

console.log("Example 1: Print numbers 1 to 5")

let i = 1

while(i<=5){
    console.log(i)
    i++
}


/**
 * Example 2: Print even numbers between 1 and 10
 */

console.log("Print even numbers between 1 and 10")
let  j = 1
while(j<=10){

    if(j%2===0){
        console.log(`Even number ${j}`)
    }
    j++

}

/**
 * Example 3: Reverse counting (5 to 1)
 */

console.log("Reverse counting (5 to 1)")
let k = 5
while( k >=1){
    console.log(`Reverse number print ${k}`)
    k--
}

/**
 * Example 4: Automation-style thinking
 */

console.log("Automation-style thinking")
let retry = 1
while(retry <=3){
 console.log("Retry test execution",+retry)
 retry ++
}

/**
 * Print numbers from 1 to 20 that are divisible by 4 using while.
 */

console.log("Print numbers from 1 to 20 that are divisible by 4 using while.")

let number = 1
while(number <=20){
    if(number%4===0){
        console.log("Print number divided by 4 : " + number)
    }
    number++
}


/**
 * do while loop
 * 
Code runs at least once
Condition checked after execution
Useful for validations, retries, confirmations


When to use do-while in automation

✔ First action must always run
✔ Retry at least once
✔ Validation attempts
✔ Confirmation dialogs
✔ Polling with guaranteed first run
 */


console.log("Simple do while loop") 
let count = 1

do{

    console.log(`Print the count variable value ${count}`);
    count++
    console.log(count)
}
while(count<=5);


/**
 * Example 2: Condition false initially
 */

console.log("Example 2: Condition false initially")
let value = 10
do{
 console.log("Execute loop atleast one time")
 value--
}
while(value < 5)


/**
 * Example 3: Reverse counting
 */

let counting = 5
do{
    console.log(`Reverse counting ${counting}`);
    counting--
}
while(counting >0)