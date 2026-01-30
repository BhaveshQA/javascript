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

      }
    }
    console.log("All attemp failed")
}

retryattempt()