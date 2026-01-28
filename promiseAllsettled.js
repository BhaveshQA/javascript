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