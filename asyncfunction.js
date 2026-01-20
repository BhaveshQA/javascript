/**
 * Convert the existing promise example into the async/await format
 */


const clickButton = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Click on button")
    },1000)
})

const validatePageTitle = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Validate page title")
    },1000)
})

clickButton.then((result)=>{
    console.log(result)
    return validatePageTitle;
}).
then((validateTitle)=>{
    console.log(validateTitle)
})


/**
 * What problem does async/await solve?
callbacks → messy
promise chaining → better, but needs return discipline
async/await solves this by letting you write async code that looks synchronous.
Same promises underneath, better readability on top.
 */

async function runTest(){
    const result = await clickButton;
    console.log(result)
    const validatePage = await validatePageTitle
    console.log(validatePage)
}

runTest()

/**
 * Rule 1: async function
 * It means:
This function always returns a Promise
Even if you return a normal value

Rule 2: await
await means:“Pause execution inside this function only until the promise resolves.”
Important points:
await does not block JavaScript
It pauses only the current async function
Other code can still run

Rule 3: Where can we use await?
Only inside an async function
 */


function getData(){
    return new Promise(resolve =>{
        setTimeout(()=>{resolve("Get User data")})
    },1000)
}

async function run(){
    console.log("Before wait")
    let result = await getData()
    console.log(result)
    console.log("After wait")
}

run()


/**
 * Rule 4 :When use await then error handle using try/catch block
 * In async/await, errors must happen inside the try block, either by:
   a rejected promise (await promise)
   or throw new Error()
   Only then will catch run.
 */

function checkError(){
    return new Promise((reject) =>{
        reject("Error occures due to network issue")
    })
}

async function errorMessage(){
try{
    const result = await checkError()
    console.log(result)
}
catch(error){
    
   console.log(error)
}
}

errorMessage()


/**
 * Error Thrown Manually → Caught
 */

async function isValidUser(value){
    try{

        if(!value){
            throw new Error("User validation failed")
        }

        console.log("User validation successfully")

    }
    catch(error){
        console.log("Caught error:", error.message)

    }
}
isValidUser(false)


/**
 * 
 */

async function simpleTask(){
    try{
       console.log("Task completed")
    }
    catch(error){
      console.log(error.message)
    }

}

simpleTask()

/**
 * ASYNC ERROR (Rejected Promise)
 * Rejected promises are automatically converted into thrown errors when using await.
 */

function fetchData(){
 return new Promise((reject)=>{
      reject("Network Error while fetch data")
 })
}

async function loadData(){
    try{

        const result = await fetchData()
        console.log(result)

    }
    catch(error){
      console.log("Caught error:", error)
    }
}

loadData()


/**
 * MULTIPLE STEPS – ERROR STOPS FLOW
 * Once an error occurs, everything after it in try is skipped.
 * 
 * async function always returns a Promise
 * await pauses only the current function
 * Rejected promise = thrown error
 * catch handles:thrown errors, rejected promises
 * After an error, remaining try code does NOT run
 */


function stepOne(){
    return Promise.resolve("Step 1 completed")
}

function stepTwo(){
    return Promise.reject("Step 2 failed")
}

async function processStep(){

    try {
const step1 = await stepOne()
    console.log(step1)

    const step2 = await stepTwo()
    console.log(step2)

    console.log("This step not execute after promise rejected")
    }
    catch(error){
    console.log("Caught Error:", error)
    }
    
}

processStep()
