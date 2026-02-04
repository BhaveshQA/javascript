/**
 * 
 * Why Retry Logic Is Needed

In real automation:

APIs fail temporarily

Pages load slowly

Elements appear late

Network is flaky

❌ Failing immediately = unstable tests
✅ Retrying smartly = stable automation
 */


/**
 * LEVEL 1: BASIC RETRY (Fixed number of attempts)
Example: Retry an async operation 3 times
 */

let attempt = 0

function flakyTest(){
    return new Promise((resolve,reject)=>{
        attempt++
        if(attempt <3){
            reject("api falied")
        }
        else
        {
            resolve("API success")
        }
    })
}

async function retryattempt(){
    for(let i =0; i<3; i++){
      try{
        const result = await flakyTest();
        console.log("Success", result)
        return
      }
      catch(error){
        console.log(`No of attempt ${i} and ` + error)
        await delay(1000)

      }
    }
    console.log("All attemp failed")
}

retryattempt()


/**
 * LEVEL 2: Retry with DELAY (More realistic)
   Add wait between retries
 */


   function delay(milisecond){
     return new Promise((resolve)=>{
        setTimeout(resolve,milisecond)
     })
   } 


 /**
  * Retry with THROW after max attempts
    Fail test properly if retries exhausted
  *  */  


    // retry function


function delay(milisecond){
     return new Promise((resolve)=>{
        setTimeout(resolve,milisecond)
     })
   } 

let attempts = 0

function flakyTest(){
    return new Promise((resolve,reject)=>{
        attempts++
        if(attempts <=3){
            reject("api falied")
        }
        else
        {
            resolve("API success")
        }
    })
}

    async function retryMaxAttempt(){
        for(let j =1; j<=3;j++){
            try{

                const result = await flakyTest();
                console.log(result)
                return 
            }catch(error){
                console.log(`No of attempt ${j} and ` + error)
                if(j===3){
                    throw new Error("failed after max attempt")
                }
                await delay(1000)

            }
        }
    }

  async  function test(){
        try {
       const result = await retryMaxAttempt();
       console.log(result);
           } catch (error) {
            console.log("Final failure:", error.message);
     }
    }
test()


/**
 * framework level retry function, where we pass the function name, max no retry and delay in miliseconds
 */


async function retrycall(fn, retry=3, wait = 1000) {

    for(let i=0; i<retry; i++){
        try{
            return await fn()
        }
        catch(error){
            if(i===retry-1){
                throw error
            }
            console.log("Retry attempt and failed", i)
            await delay(wait)
        }
    }

}

async function clickLoginButton() {
    // simulate flaky UI
    if (Math.random() < 0.7) {
        throw new Error("Button not clickable");
    }
    return "Clicked";
}

 
 
async function runTest() {
    try {
        const result = await retrycall(clickLoginButton, 5, 1000);
        console.log("Success:", result);
    } catch (error) {
        console.log("Final failure:", error.message);
    }
}

runTest()