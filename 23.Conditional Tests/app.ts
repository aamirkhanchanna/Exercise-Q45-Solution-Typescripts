// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your 
// prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


let car: string = "Subaru";

// Test 1: Equality Comparison (True)
console.log("is car == 'Subaru'? I predict True.");
console.log(car == 'Subaru'); // True

// Test 2: Strict Equality Comparison (True)
console.log("is car === 'Subaru'? I predict True.");
console.log(car === 'Subaru'); // True

// Test 3: Inequality Comparison (False)
console.log("Is car != 'Subaru'? I predict False.");
console.log(car != 'Subaru'); // False

// Test 4: Strict Inequality Comparison (False)
console.log("is car !== 'Subaru'? I predict False.")
console.log(car !== 'Subaru'); // False

// Test 5: Less Than Comparison (False)
console.log("is car < 'Subaru'? I predict False.")
console.log(car < 'Subaru'); // False (lexicographic Comparison)

// Test 6: Greater Than Comparison (False)
console.log("is car > 'Subaru'? I predict False.")
console.log(car > 'Subaru'); // False (lexicographic Comparison)

// Test 7: Less Than or Equal Comparison (True)
console.log("is car <= 'Subaru'? I predict True.")
console.log(car <= 'Subaru'); // True

// Test 8: Greater Than or Equal Comparison (True)
console.log("is car >= 'Subaru'? I predict True.")
console.log(car >= 'Subaru'); // True

// Test 9: Checking Truthiness (True)
console.log("is car? I predict True.")
console.log(car); // True (Non-Empty String is Truthy)

// Test 10: Checking Falseiness (False)
console.log("is !car? I predict False.")
console.log(!car); // False (Negation Of A Truthy Value)