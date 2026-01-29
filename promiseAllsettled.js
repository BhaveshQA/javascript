/**
 * Why Promise.allSettled() Exists 
 * Problem with Promise.all()
   It fails fast
   If one promise fails, everything stops
   You lose information about other promises

   But in automation, sometimes you want:
    all API results
    all page health checks
    all validations
    even if some fail
That’s where Promise.allSettled() is used.
 */

/** Basic example */

const p1 = Promise.resolve("Page Load");
const p2 = Promise.reject("Api failed");
const p3 = Promise.resolve("Config loaded")


async function promiseAll(){

    let results = await Promise.allSettled([p1,p2,p3])
    console.log(results)

}

promiseAll()


/**
 * Automation-Style Example (Very Important)
 */


function homepage(){
    return Promise.resolve("Home Page Load")
}

function checkApiResponse(){
    return Promise.reject("API Failed to load")
}

function dashboard(){
    return Promise.resolve("Dashboard visible to user")
}


async function healthCheck(){
    let results = await Promise.allSettled([homepage(),checkApiResponse(),dashboard()])

    results.forEach((result,index)=>{
        if(result.status === "fulfilled"){
            console.log(`Check ${index +1} passed`, result.value)
        }
        else
        {
            console.log(`Check ${index + 1} failed`, result.reason)
        }
    })
}

healthCheck()