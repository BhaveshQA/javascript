const myName = "Bhavesh";
let myAge = 35;
let myRole ="QA Engineer";
let myAutomationExperience = 5;
let completedMorningTea = true;
let myCity = "Ahmedabad";
let myCountry = "India";
let myFavoriteLanguage = "English";
let isLearningAutomation = true;
let yearsOfExperience = 14;

console.log("Name: " + myName);
console.log("Age: " + myAge);
console.log("Role: " + myRole);
console.log("Automation Experience (years): " + myAutomationExperience);
console.log("Completed Morning Tea: " + completedMorningTea);   
console.log(`City: ${myCity}`);
console.log(`County : ${myCountry}`);
console.log(`Favorite Language: ${myFavoriteLanguage}`);
console.log(`Is Learning Automation: ${isLearningAutomation}`);
console.log(`Total Years of Experience: ${yearsOfExperience}`);


let studentInformation = {
    name: "Bhavesh",
    age: 35,
    role: "QA Engineer",
    automationExperience: 5}

    console.log(typeof studentInformation);
    console.log(`studentInformation: ${JSON.stringify(studentInformation)}`);
    console.log("Name: " + studentInformation.name)