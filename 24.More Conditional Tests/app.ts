// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try 
// more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
// and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array



let car : string = 'Toyota Corolla';
let age : number = 25;
let number : number[] = [1, 2, 3, 4];

// **String Tests**

// Test 1: Equality (True)
console.log("Is car == 'Toyota Corolla'? I Predict True.");
console.log(car == 'Toyota Corolla'); // True (case-insenitive)

// Test 2: Strict Equality (False)
console.log("Is car === 'Toyota Corolla'? I Predict False.");
console.log(car === 'Toyota Corolla'); // False (case-senitive)

// Test 3: Inequality (True)
console.log("Is car != 'Toyota Corolla'? I Predict True");
console.log(car != 'Toyota Corolla'); // True

// Test 4: Inequality (False)
console.log("Is car !== 'Toyota Corolla'? I Predict False");
console.log(car !== 'Toyota Corolla'); // False (Case-sensitive)

// ** Lowercase Function Tests**

// Test 5: Lowercase Conversion (True)
console.log("is car.toLowerCase() == 'Toyota Corolla'? I predict True.")
console.log(car.toLowerCase() == 'Toyota Corolla'); // True (Converted to LowerCase)

// Test 6: Lowercase Conversion (False)
console.log("is car === car.toLowerCase()? I predict False.")
console.log(car === car.toLowerCase()); // False (Original value remains uppercase)

// **Numerical Tests**

// Test 7: Equality (True)
console.log("is age == 25? I predict True.")
console.log(age == 25); // True

// Test 8: Inequality (False)
console.log("is age != 30? I predict False.")
console.log(age != 30); // False

// Test 9: Greater Than (False)
console.log("is age > 30? I predict False.")
console.log(age > 30); // True

// Test 10: Less Than Or Equal (True)
console.log("is age <= 25? I predict True.")
console.log(age <= 25); // True