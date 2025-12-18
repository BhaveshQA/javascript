
/**
 * for (initialization; condition; increment/decrement) {
    // Code to execute again & again
}
Breakdown:

initialization → start value

condition → loop runs until condition is false

increment/decrement → update value each loop
 */

console.log("Simple Print 1 to 5 number")

for(let i =1; i<=5; i++){
    console.log(i)
}


/**
 * Print numbers from 1 to 20 that are divisible by 3.
 */

console.log("Print numbers from 1 to 20 that are divisible by 3.")
for(let j = 1; j <=20; j++){
    if(j%3===0){
        console.log(j)
    }
}

/**
 * Practice Task 3: Reverse Loop

Print numbers from 10 to 1.
 */
console.log("Print numbers from 10 to 1")

for(let k = 10; k>0; k--){
    console.log(k)
}

/**
 * Practice Task 4: Automation-style thinking

You have 5 products on a page. Print:
Validating product 1
Validating product 2
Validating product 3
Validating product 4
Validating product 5
 */

console.log("Print product ")

for(let i =1; i<=5; i++){
    console.log(`Validating product ${i}`)
}