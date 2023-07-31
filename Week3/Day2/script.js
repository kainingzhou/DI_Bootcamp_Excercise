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
