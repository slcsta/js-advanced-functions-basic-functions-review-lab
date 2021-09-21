// Your code here
function saturdayFun(activity="roller-skate") {
    console.log(`This Saturday, I want to ${activity}!`);
    return `This Saturday, I want to ${activity}!`;
}


// LAB: Implement a function expression called mondayWork. 
// The function should return a String like "This Monday, I will ... ." 
// Fill in the ... with the activity that's passed in as the first parameter. 
// If nothing is passed in, default to "go to the office". 
// Run learn to verify you've gotten this set of tests passing before continuing with the lesson.

const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}


// write a function called wrapAdjective
// wrapAdjective should return a function:
    //an innner function
    //takes a single parameter that defaults to "special"
function wrapAdjective(flair="*"){
    return function(quality="special"){
        return `You are ${flair}${quality}${flair}!`;
    }
}

let Calculator = {
    add: function(a, b){
        return a + b;
    },
   subtract: function(a, b){
        return a - b;
   },
   multiply: function(a, b){
    return a * b;
   },
   divide: function(a, b){
    return a/b;
   }
}

function actionApplyer(startingInteger, arrayFunctions){
    for (let i = 0; i < arrayFunctions.length; i++) {
        startingInteger = arrayFunctions[i](startingInteger);
    }
    return startingInteger;
}

