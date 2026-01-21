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


