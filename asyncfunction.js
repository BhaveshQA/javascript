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
 */

function checkError(){
    return new Promise((reject) =>{
        reject("Error occures due to network issue")
    })
}

async function errorMessage(){
try{
    console.log("User Online and record")
}
catch{
    const error = await checkError()
    console.log(error)
}
}

errorMessage()