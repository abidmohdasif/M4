// If Statements
let age =25

if(age >= 21){
    console.log("You are a legal adult. ")
}
else{
    console.log("Your are a minor")
}


// Nested If Statements

let hasLicense = true // Boolean true false variable

if(age >= 16){
    if(hasLicense == true){
        console.log("You are old enough to drive and have your license")
    }
    else{
        console.log("Your old enugh to drive, but still need a license")
    }
}
else{
    console.log("Your are not old enough to drive")
}
age = -1 

if(age >=13){
    console.log("You are old engought to doomscroll")
}
else if(age <0){
    console.log("You are not born yet")
}
else if(age == 0){
    console.log("You are a baby")
}
else if(age <= 100){
    console.log("You are too old to doomscroll")
}
else{
    console.log("You must be 13+ to doomscroll")
}

// Functions are reuable section of code
// define code once, use it whenever you need it
// call the function to execute that code


// function functionName(parameters,parameters){
//     // function code goes here
// }

function happyBirthday(username,birthdayAge){
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday to you!${username}`);
    console.log(`your are ${birthdayAge} years old!`);
}

happyBirthday("Evan", 45);
happyBirthday("Nayan", 17);

function add(x,y){
    let result = x + y;
    console.log(result);
}
let answer = add(5,4);
console.log(answer);

function subtract(x,y){
    let result = x - y;
    return result;
}

let subtractAnswer = subtract(10,5);
console.log(subtractAnswer);

function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

function isValidEmail(email){
    if(email.includes("@") && email.includes(".")){
        return true;
    }
    else{
        return false;
    }
}