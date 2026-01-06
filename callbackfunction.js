/**
 * Passing a function as callback
 */

console.log("Passing a function as callback")
function greetMorning(name){
   console.log(`Hello Good Morning ${name}`)
}

function processUser(callback){
    callback("Bhavesh")
}

processUser(greetMorning)

console.log("-----------------------------------")

/**
 * Callback with calculation
 */

console.log("Callback with calculation")
function addTwoNumber(a,b){
    console.log(`Add two number using callback ${a + b}`)
}

function processNumber(x,y,callback){
    callback(x,y)
}

processNumber(5,6,addTwoNumber)

console.log("-----------------------------------")
/**
 * Conditional callback execution
 */

console.log("Conditional callback execution")

function success(){
    console.log("Success callback")
}

function failure(){
    console.log("failure callback")
}

function validateResults(isValid, successCb, failureCb){
      if(isValid){
        successCb()
      }
      else{
        failureCb()
      }
}

validateResults(false,success,failure)

console.log("-------------------------------------")


/**
 * Callback inside loop
 */

console.log("Callback inside loop")

function printItemName(itemName){
  console.log(`Item Name : ${itemName}`)
}

function callPrintNameFunction(items, callback){
    for(let i = 0; i<items.length; i++){
        callback(items[i])
    }
}

callPrintNameFunction(["ItemA","ItemB"],printItemName)
console.log("----------------------------------------")

/**
 * CALLBACKS USED IN AUTOMATION
 * Array method callback
 * here price =>{} is callback function inside forEach method
 */

console.log("Array method callback in automation")

const itemPrice = [250,400,300]

itemPrice.forEach(price =>{
    console.log(`Validate price ${price}`)
} )



const users = ["admin", "guest", "editor"]

users.forEach(user => {
    console.log(`validate user : ${user}`)
})
console.log("-------------------------------------------------")

/**
 * map with callback 
 */

const price = ["R100","R200"]

const numberPrice1 = price.map(p=>Number(p.replace("R",""))
)

console.log(numberPrice1)

console.log("----------------------------------------------")

/**
 * fiter with callback
 */

const marks = [45, 60, 30, 80]

const marksgraterthan50 = marks.filter(n=> n >= 50)
console.log(marksgraterthan50)