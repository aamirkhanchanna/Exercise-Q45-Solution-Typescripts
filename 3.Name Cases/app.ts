// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.

// lowerCase
let personName: string ="Aamir"
console.log("lowercase:", personName.toLowerCase());

// upperCase
console.log("uppercase:", personName.toLocaleUpperCase());

// titleCase
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));