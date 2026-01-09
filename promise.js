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
