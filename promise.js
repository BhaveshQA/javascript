/**
 * How JavaScript handles waiting without blocking everything
 */

/**
 * Problem without async flow. It will execute the statement without waiting for 1 sec.
 */

console.log("Start of the execution")
setTimeout(()=>{console.log("wait for 1 sec")}, 1000);
console.log("End of the Execution")