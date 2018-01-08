var myHeight = parseInt(prompt("What's your height, in inches:"));
var myWeight = parseInt(prompt("What's your weight (be honest), in lbs:"));

var bodyMassIndex = function(weightPounds, heightInches) {return "Your BMI is " + (703 * weightPounds) / (heightInches * heightInches);
};

alert(bodyMassIndex(myWeight, myHeight));
