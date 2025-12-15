console.log("If conditional statement")

console.log("Simple IF")
console.log("------------------")
let tempreture1 = 31

if(tempreture1 >=30){
    console.log("Alexa turn on Ac in all rooms")
}


console.log("-----------------------------------")
console.log("Simple If else statement")
let tempreture2 = 29

if(tempreture2 >=30){
    console.log("Alexa Turn on Ac in all rooms")
}
else
{
    console.log("Tempreture is not that much hot....")
}


console.log("Else if lader")


let tempreture = 17
console.log("You entered: " + tempreture);

if (tempreture < 15){
    console.log("cool day")
}
else if(tempreture < 25){
    console.log("Medium tempreture")
}
else if(tempreture <33) {
    console.log("Tempreture rising towards the hot day")
}
else{
    console.log("Hot day...needs to some cool atmosphere")
}


console.log("Cart value discount")

/**
 * Conditions:

If cart < 500 → “No discount”

If 500–1000 → “5% discount applied”

If 1000–2000 → “10% discount applied”

If >2000 → “15% discount applied”
 */

let cartAmount = 501

if (cartAmount < 500){
    console.log("Sorry no discuount at the moment....")    
}
else if(cartAmount >=500 && cartAmount  <1000){
    console.log("Eligible for the 5% discount")
}
else if(cartAmount < 2000 && cartAmount >= 1000){
    console.log("Eligible for the 10% discount..")
}
else {
    console.log("Eligible for the 15% discount...")
}


console.log("------Ticket condition example---------")

/**
 * If age < 5        → ticket free
If age >= 5 && < 18 → ticket ₹100
If age >= 18 && < 60 → ticket ₹200
If age >= 60        → ticket ₹150 (senior citizen discount)
 */

let age = 'a'

if( typeof age !== "number")
    {
 console.log("Please enter valid Input number...")
}

else if(age < 5){
    console.log("Ticket is free for you kids...")
}
else if(age >=5 && age <18){
    console.log("Ticekt price is 100 rs")

}
else if(age >=18 && age < 60){
    console.log("Ticket price is 200 rs")
}
else
{
    console.log("Seniour citizen discount... 150 rs")
}