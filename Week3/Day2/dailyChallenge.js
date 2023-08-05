// Daily Challenge: JS Arrays & Methods
// Exercise 1:
// Using this array :
const Fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// Remove Banana from the array.
Fruits.shift();
console.log(Fruits);
// Sort the array in alphabetical order.
console.log(Fruits.sort());
// Add “Kiwi” to the end of the array.
Fruits.push('Kiwi');
console.log(Fruits);
// Remove “Apples” from the array. Don’t use the same method as in part 1.
Fruits.splice(0, 1);
console.log(Fruits);
// Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// At the end you should see this outcome:
// ["Kiwi", "Oranges", "Blueberries"]
console.log(Fruits.reverse());

// Exercise 2:
// Using this array :

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// Access and then console.log “Oranges”.
console.log(moreFruits[1][1][0]);
// Bonus: If you would like more array exercises take a look at the link below.
// Array Exercises