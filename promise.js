/**
 * How JavaScript handles waiting without blocking everything
 */

/**
 * Problem without async flow. It will execute the statement without waiting for 1 sec.
 */

console.log("Start of the execution")
setTimeout(()=>{console.log("wait for 1 sec")}, 1000);
console.log("End of the Execution")


/**
 * promise: A value that will be available later. This is used for the solution of aysyncronous flow
 * it has 3 states : pending, fullfilled, rejected
 * 
 */


const myPromise = new Promise((resolve, rejected) => {
    let sucess = true
    if(sucess){
        resolve("Promise resolved")
    }
    else{
        rejected("Promise rejected")
    }
});

myPromise
.then(result => console.log(result))
.catch(error => console.log(error))


/**
 * Basic Promise with delay (Success)
 */

console.log("----------------------------")
const orderFood = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Delay with 2 sec")
    },2000)
})

orderFood.then((result)=>console.log(result))


/**
 * Promise with Failure (reject)
 */

console.log("------------------------------")

const paymentProcess = new Promise((resolve, reject) => {
    let paymentStatus = false
    if(paymentStatus){
        resolve("Payment success")
    }
    else
    {
        reject("Payment failed")
    }
})

paymentProcess.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})


/**
 * Promise chaining (then → then)
 * Each .then() returns a new promise.
Whatever you return from one .then() becomes the input to the next .then().
 */

const userRecords = new Promise((resolve)=>{
    resolve("Get user data")
})

userRecords.then((login)=>{
    console.log(login)
    return "Get profile information"
})
.then((profile)=>{
    console.log(profile)
})