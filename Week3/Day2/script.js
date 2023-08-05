// DI-Bootcamp/Week3/DAy2/ExerciseXP
// Student name: Kaining Zhou

// Exercise 1: Your Favorite Food
// Instructions
// Store your favorite food into a variable.
let favFood = "pancake";
// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)
let favMeal = "breakfast";
// Console.log I eat <favorite food> at every <favorite meal>
console.log(`I eat ${favFood} at every ${favMeal}`);

// Exercise 2 : Series
// Instructions
// Part I
// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
// 1. Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
let myWatchedSeriesLength = myWatchedSeries.length
console.log(myWatchedSeriesLength);
// 2. Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory
let myWatchedSeriesSentence = myWatchedSeries.toString();
console.log(myWatchedSeriesSentence);
// 3. Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory
console.log(`I watched 3 series: ${myWatchedSeriesSentence}`);

// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
myWatchedSeries.splice(2, 1, "friends");
console.log(myWatchedSeries);
// Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push("Foodie");
console.log(myWatchedSeries);
// Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.unshift("Hidden love");
console.log(myWatchedSeries);
// Delete the series “black mirror”.
myWatchedSeries.splice(1,1);
console.log(myWatchedSeries);
// Console.log the third letter of the series “money heist”.
console.log(myWatchedSeries[1][2]);
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
console.log(myWatchedSeries);

// Exercise 3 : The Temperature Converter
// Instructions
// Store a celsius temperature into a variable.
let temInCelsius = 40
// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32
let temInFahrenheit = (temInCelsius/5) * 9 + 32;
console.log(temInFahrenheit);

// Exercise 4 : Guess The Answers #1
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.
 let c;
 let a = 34;
 let b = 21;

 console.log(a+b) //first expression
// Prediction: 55 It will output 55, because 34 and 21 are numbers
// Actual: 55

 a = 2;

 console.log(a+b) //second expression
// Prediction: 23 It will output 23 because the value of a is changed to 2
// Actual: 23

// What will be the outcome of a + b in the first expression ?
// 55
// What will be the outcome of a + b in the second expression ?
// 23
// What is the value of c?
// undefined yet
// Analyse the code below, what will be the outcome?
console.log(3 + 4 + '5'); // The output is 75 becuase 3 and 4 are numbers, then concat the string '5', resulting in a new string

// Exercise 5 : Guess The Answers #2
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.
typeof(15)
// Prediction: number because 15 without quatation mark should be a number
// Actual: number

typeof(5.5)
// Prediction: number because 5.5 without quatation mark should be a number
// Actual: number

typeof(NaN)
// Prediction: string. Because 'NaN' is short for 'Not a number'
// Actual: number

typeof("hello")
// Prediction: string. Because it is with a quatation mark
// Actual: string

typeof(true)
// Prediction: boolean. Because it can only be true or false
// Actual: boolean

typeof(1 != 2)
// Prediction: boolean. Because the result of 1 != 2 is true
// Actual: boolean

"hamburger" + "s"
// Prediction: "hamburgers". Because it is "hamburger" concat "s"
// Actual: "hamburgers"

"hamburgers" - "s"
// Prediction: warning; Because these two are not numbers
// Actual: NaN

"1" + "3"
// Prediction: "13". Because it is string "1" concat string "3"
// Actual: "13"

"1" - "3"
// Prediction: waring. Because these two are strings, not numbers
// Actual: -2

"johnny" + 5
// Prediction: "johnny5"; Because this is concat of string and a number
// Actual: "johnny5"

"johnny" - 5
// Prediction: warning. Because 'johnny' is not a number, could not calculate
// Actual: NaN

99 * "hello"
// Prediction: warning. Because 'hello' is not a number, could not calculate
// Actual: NaN

1 != 1
// Prediction: false. Because the result if a logic
// Actual:

1 == "1"
// Prediction: true. Because her compare value, not data type
// Actual: true

1 === "1"
// Prediction: false. Because here compare both value and type
// Actual: false

// Exercise 6 : Guess The Answers #3
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// What is the output of each of the expressions below?
// 5 + "34"
// // Prediction: "534" Because this is the concat of two strings
// // Actual: "534"

// 5 - "4"
// // Prediction: NaN Because the type of these two are different
// // Actual: 1

// 10 % 5
// // Prediction: 0 Because the remaining when 10 devide 5 is 2.
// // Actual: 0

// 5 % 10
// // Prediction: 5 Because the remaining when 5 divide 10 is 5.
// // Actual:

// "Java" + "Script"
// // Prediction: "JavaScript" Because this is one string concat another string.
// // Actual: "JavaScript"

// " " + " "
// // Prediction: "  " Because this is one string concat another string. Each string of them contain one space
// // Actual:

// " " + 0
// // Prediction: NaN Because these two are not numbers, cannot calculate
// // Actual: " 0"

// true + true
// // Prediction: NaN Because these two are boolean, cannot calculate
// // Actual: 2

// true + false
// // Prediction: NaN Because these two are boolean, cannot calculate
// // Actual: 1

// false + true
// // Prediction: NaN Because these two are boolean, cannot calculate
// // Actual: 1

// false - true
// // Prediction: NaN Because these two are boolean, cannot calculate
// // Actual: -1

// !true
// // Prediction: false Because the opposite of true is false
// // Actual: false

// 3 - 4
// // Prediction: -1 Because these two are numbers, can calculate
// // Actual: -1

// "Bob" - "bill"
// // Prediction: NaN Because these two are strings, not numbers, therefore cannot calculate
// // Actual: NaN

// DI-Bootcamp/Week3/Day2/ExerciseXPGold

// Exercise 1 : Favorite Color
// Instructions
// let sentence = ["my","favorite","color","is","blue"];
// Write some simple Javascript code that will join all the items in the array above, and console.log the result.
let sentence = ["my","favorite","color","is","blue"];
console.log(sentence.join(' '));

// Exercise 2. Mix up 
// Create 2 variables. The values should be strings. For example:
// let str1 = "mix";
// let str2 = "pod";
// 2. Slice out and swap the first 2 characters of the two strings from part 1.
// 3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
// 4. Finally console.log the new concatenated string.
let str1 = "mix";
let str2 = "pod";
str1 = 'pox';
str2 = 'mid';
let str3 = `${str1} ${str2}`;
console.log(str3);

// Exercise 3 : Calculator
// Instructions
// Make a Calculator. Follow the instructions:
// Prompt the user for the first number.
// Store the first number in a variable called num1.
// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.
// BONUS: Make a program that can subtract, multiply, and also divide!
let num1 = Number(prompt('What is your first number?', ' '));
let num2 = Number(prompt('What is your second number?', ' '));
let num3 = num1 + num2;
alert(`The sum of num1 and num2 is ${num3}`);

// DI-Bootcamp/Week3/Day2/ExerciseXPNinja
// Exercise 1 : Evaluation
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.
// Evaluate the comparisons found below:
//     5 >= 1
// Predict: true (because this is a Boolean)
// Actual:
//     0 === 1
// Predict: false (because here to compare both value and data type)
// Actual: false
//     4 <= 1
// Predict: false (here is a boolean, 4 is bigger than 1 therefore is false)
// Actual: false
//     1 != 1
// Predict: false (here is Boolean, 1 should be equal to 1)
// Actual: false
//     "A" > "B"
// Predict: false ("A" and "B" are strings, could not compare)
// Actual: false
//     "B" < "C"
// Predict: false ("B" and "C" are strings, could not compare)
// Actual: true
//     "a" > "A"
// Predict: false ("a" and "A" are strings, could not compare)
// Actual: true
//     "b" < "A"
// Predict: false ("b" and "A" are strings, could not compare)
// Actual: false
//     true === false
// Predict: false (true is not equal to false)
// Actual: false
//     true != true
// Predict: false (true is equal to true)
// Actual: false

// Exercise 2 : Ask For Numbers
// Instructions
// Ask the user for a string of numbers separated by commas
// Console.log the sum of the numbers.
// Hint: use some string methods
// Examples
// "2,3"➞ 5
// let numAll = prompt('Please type in a string of numbers seperated by commas', ' ');
// let value1 = Number(numAll[0]);
// let value2 = Number(numAll[1]);
// let value3 = Number(numAll[2]);
// let sum = value1 + value2 + value3;
// console.log(sum);

// Exercise 3 : Find Nemo
// Instructions
// Hint: if statement (tomorrow’s lesson)
// Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
// Find the word “Nemo”
// Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
// If you can’t find Nemo, console.log “I can’t find Nemo”.
let input = prompt('Please give me a sentence containing the word \'Nemo\'', 'Example: I love the movie named Nemo');
let position = input.search('Nemo');
console.log(`I found Nemo at ${position}`);

// Exercise 4 : Boom
// Instructions
// Hint: if statement (tomorrow’s lesson)

// Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:

// If the number given is less than 2 : return “boom”
// If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
// If the number given is evenly divisible by 2, add a exclamation mark to the end.
// If the number given is evenly divisible by 5, return the string in ALL CAPS.
// If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
// Don't know how to solve