/**
 * await inside LOOPS
 */


function login(user){
   return user;
}

const userType = ["admin","register","guest"]

async function loginUser(){

    for(let users of userType){
        
    const user = await login(users)
    console.log("Login with userType : ", user)
    }

}

loginUser()

/**
 * Parallel async execution → Promise.all
 * Use this when: tasks are independent, order does not matter, you want speed
 * Both promises start together : JS waits until ALL finish, If one fails → entire Promise.all fails
 */

function loadPage(){
    return  Promise.resolve("Page Load successfully")
}

function fetchUser(){
    return  Promise.resolve("User fetch successfully")
}


async function runParellel(){
    const result = await Promise.all([loadPage(),fetchUser()])
    console.log(result)
}

runParellel()


/**
 * Error handling with Promise.all
 * Very important for multi-API / multi-validation tests
 */


function page1(){
    return Promise.resolve("Page1 load successfully")
}

function page2(){
    return Promise.reject("Page 2 not load due to network issue..")
}

async function pageLoadEvent(){
    try{
        const page = await Promise.all([page1(),page2()])
        console.log(page)

    }
    catch(error){
       console.log("Error", error)
    }
}

pageLoadEvent()