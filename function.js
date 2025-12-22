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