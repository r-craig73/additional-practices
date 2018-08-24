var myHeight = parseInt(prompt("What is your height, in inches?"));
var myWeight = parseInt(prompt("What is your weight (be honest), in lbs?"));

var bodyMassIndex = function(weightPounds, heightInches) {
  return "Your BMI is " + ((703 * weightPounds) / (heightInches * heightInches)).toPrecision(3);
};

alert(bodyMassIndex(myWeight, myHeight));
